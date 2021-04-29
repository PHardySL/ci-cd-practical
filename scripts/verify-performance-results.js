"use strict";

const path = require("path");
const fs = require("fs");

// Based on your application's initial performance score, you may want to adjust this threshold.
// 1 is 100%; 0.91 is 91% etc.
const PERFORMANCE_THRESHOLD = 0.9;

const [reportPath] = process.argv.slice(2);

if (!reportPath) {
  throw new RangeError(
    "Please specify JSON report path. Usage: node verify-performance-results.js <report-path>"
  );
}

const report = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", reportPath), "utf8")
);

const score = report.categories.performance.score;
const isScorePassing = !isNaN(score) && score >= PERFORMANCE_THRESHOLD;

if (isScorePassing) {
  console.log(`Peformance test passed with a score of ${score}.`);
  process.exit(0);
} else {
  console.log(
    `Peformance test failed with a score of ${score}. Minimum required score is ${PERFORMANCE_THRESHOLD}.`
  );
  process.exit(1);
}
