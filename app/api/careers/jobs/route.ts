import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import defaultJobs from "@/data/jobs.json";

const jobsFilePath = path.join(process.cwd(), "data", "jobs.json");
const tmpJobsFilePath = path.join("/tmp", "jobs.json");

let memoryJobsStore: any[] | null = null;

// Helper to read jobs from disk or memory fallback
function readJobsFromFile() {
  if (memoryJobsStore && memoryJobsStore.length > 0) {
    return memoryJobsStore;
  }

  try {
    if (fs.existsSync(jobsFilePath)) {
      const data = fs.readFileSync(jobsFilePath, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryJobsStore = parsed;
        return parsed;
      }
    }
  } catch (error) {
    console.error("Error reading jobs.json from process.cwd():", error);
  }

  try {
    if (fs.existsSync(tmpJobsFilePath)) {
      const data = fs.readFileSync(tmpJobsFilePath, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryJobsStore = parsed;
        return parsed;
      }
    }
  } catch (error) {
    console.error("Error reading jobs.json from /tmp:", error);
  }

  // Statically imported fallback for Vercel deployment
  const fallback = Array.isArray(defaultJobs) ? defaultJobs : [];
  memoryJobsStore = [...fallback];
  return memoryJobsStore;
}

// Helper to write jobs to disk / memory fallback
function writeJobsToFile(jobs: any[]) {
  memoryJobsStore = jobs;
  let saved = false;

  try {
    const dir = path.dirname(jobsFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2), "utf-8");
    saved = true;
  } catch (error) {
    // Read-only filesystem on Vercel deployment
    console.warn("Could not write jobs.json to process.cwd() (expected on serverless):", error);
  }

  if (!saved) {
    try {
      const tmpDir = path.dirname(tmpJobsFilePath);
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
      fs.writeFileSync(tmpJobsFilePath, JSON.stringify(jobs, null, 2), "utf-8");
      saved = true;
    } catch (tmpErr) {
      console.warn("Could not write jobs.json to /tmp:", tmpErr);
    }
  }

  return true;
}

// GET /api/careers/jobs
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const includeInactive = searchParams.get("admin") === "true";
    const jobs = readJobsFromFile();

    if (includeInactive) {
      return NextResponse.json({ success: true, jobs });
    }

    // Default to active jobs for public page
    const activeJobs = jobs.filter((j: any) => j.status === "Active" || !j.status);
    return NextResponse.json({ success: true, jobs: activeJobs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch jobs." },
      { status: 500 }
    );
  }
}

// POST /api/careers/jobs (Create new job)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, department, location, type, experience, salary, description, responsibilities, requirements, benefits } = body;

    if (!title || !department || !location || !description) {
      return NextResponse.json(
        { success: false, error: "Title, Department, Location, and Description are required." },
        { status: 400 }
      );
    }

    const jobs = readJobsFromFile();

    const newJob = {
      id: `job_${Date.now()}`,
      title: title.trim(),
      department: department.trim(),
      location: location.trim(),
      type: type ? type.trim() : "Full-Time",
      experience: experience ? experience.trim() : "1+ Years",
      salary: salary ? salary.trim() : "Competitive",
      status: "Active",
      postedAt: new Date().toISOString(),
      description: description.trim(),
      responsibilities: Array.isArray(responsibilities)
        ? responsibilities
        : typeof responsibilities === "string"
        ? responsibilities.split("\n").filter((r) => r.trim().length > 0)
        : [],
      requirements: Array.isArray(requirements)
        ? requirements
        : typeof requirements === "string"
        ? requirements.split("\n").filter((r) => r.trim().length > 0)
        : [],
      benefits: Array.isArray(benefits)
        ? benefits
        : typeof benefits === "string"
        ? benefits.split("\n").filter((r) => r.trim().length > 0)
        : [],
    };

    jobs.unshift(newJob);
    writeJobsToFile(jobs);

    return NextResponse.json({ success: true, job: newJob, jobs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create job." },
      { status: 500 }
    );
  }
}

// PUT /api/careers/jobs (Update job)
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, department, location, type, experience, salary, status, description, responsibilities, requirements, benefits } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Job ID is required for update." },
        { status: 400 }
      );
    }

    const jobs = readJobsFromFile();
    const index = jobs.findIndex((j: any) => j.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Job posting not found." },
        { status: 404 }
      );
    }

    jobs[index] = {
      ...jobs[index],
      title: title !== undefined ? title.trim() : jobs[index].title,
      department: department !== undefined ? department.trim() : jobs[index].department,
      location: location !== undefined ? location.trim() : jobs[index].location,
      type: type !== undefined ? type.trim() : jobs[index].type,
      experience: experience !== undefined ? experience.trim() : jobs[index].experience,
      salary: salary !== undefined ? salary.trim() : jobs[index].salary,
      status: status !== undefined ? status : jobs[index].status,
      description: description !== undefined ? description.trim() : jobs[index].description,
      responsibilities: Array.isArray(responsibilities)
        ? responsibilities
        : typeof responsibilities === "string"
        ? responsibilities.split("\n").filter((r) => r.trim().length > 0)
        : jobs[index].responsibilities,
      requirements: Array.isArray(requirements)
        ? requirements
        : typeof requirements === "string"
        ? requirements.split("\n").filter((r) => r.trim().length > 0)
        : jobs[index].requirements,
      benefits: Array.isArray(benefits)
        ? benefits
        : typeof benefits === "string"
        ? benefits.split("\n").filter((r) => r.trim().length > 0)
        : jobs[index].benefits,
      updatedAt: new Date().toISOString(),
    };

    writeJobsToFile(jobs);

    return NextResponse.json({ success: true, job: jobs[index], jobs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update job." },
      { status: 500 }
    );
  }
}

// DELETE /api/careers/jobs (Delete job)
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Job ID query parameter is required." },
        { status: 400 }
      );
    }

    let jobs = readJobsFromFile();
    const existingCount = jobs.length;
    jobs = jobs.filter((j: any) => j.id !== id);

    if (jobs.length === existingCount) {
      return NextResponse.json(
        { success: false, error: "Job ID not found." },
        { status: 404 }
      );
    }

    writeJobsToFile(jobs);

    return NextResponse.json({ success: true, message: "Job deleted successfully.", jobs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete job." },
      { status: 500 }
    );
  }
}
