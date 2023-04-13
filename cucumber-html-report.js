
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "reports/cucumber-json",
    reportPath: "./reports/cucumber-html",
    metadata: {
        browser: {
            name: "chrome"
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: "10",
        },
    },
});