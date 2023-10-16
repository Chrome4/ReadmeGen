function renderLicenseBadge(license) {
  if (!license) return "";

  return `https://img.shields.io/badge/License-${license.badge_ID}.svg`;
}

function renderLicenseLink(license) {
  if (license.name === "no license") return "";
  if (license.SPDX_ID === "CCO-1.0")
    return "https://creativecommons.org/publicdomain/zero/1.0/";

  return `https://opensource.org/licenses/${license.SPDX_ID}`;
}

function renderLicenseSection(license) {
  if (license.name === "no license") return "";

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `[![License](${badge})](${link})`;
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This repository is covered under ${data.license.name}.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have questions open an issue 
or contact me at ${data.email}. You can find 
more of my work at [${data.username}](https://github.com/${data.username}).`;
}

module.exports = generateMarkdown;
