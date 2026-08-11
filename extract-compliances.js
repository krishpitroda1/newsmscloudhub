const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const inputFile = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\20cd794f-503b-4425-8e9e-df0465f507b5\\.system_generated\\steps\\927\\content.md';
const outputDir = path.join(__dirname, 'data');
const outputFile = path.join(outputDir, 'smsCompliancesData.json');

try {
  const html = fs.readFileSync(inputFile, 'utf-8');
  const $ = cheerio.load(html);

  const results = [];
  
  $('tr').each((i, row) => {
    const cells = $(row).find('td, th');
    if (cells.length >= 3) {
      const country = $(cells[0]).text().trim();
      const mcc = $(cells[1]).text().trim();
      
      let featuresHtml = $(cells[2]).html();
      featuresHtml = featuresHtml ? featuresHtml.trim() : "";
      
      if (country && country !== 'Country' && !country.includes('Title: Live Content')) {
         results.push({
           country,
           mcc,
           featuresHtml
         });
      }
    }
  });

  if (results.length === 0) {
    console.log("No table rows found. Here are some table related classes:");
    console.log($('table').html()?.substring(0, 500));
  } else {
    console.log(`Extracted ${results.length} rows.`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2), 'utf-8');
    console.log('Successfully wrote to ' + outputFile);
  }

} catch (err) {
  console.error(err);
}
