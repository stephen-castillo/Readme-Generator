// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = '';
    switch (license){
    
        case 'MIT':
        licenseBadge = "[MIT License](https://choosealicense.com/licenses/mit/)";
        break;
    
        case 'GNU':
        licenseBadge = "[GNU General Public License v3.0 (GPL-3.0)](https://choosealicense.com/licenses/gpl-3.0/)";
        break;
    
        case 'APACHE':
        licenseBadge = "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)";
        break;
    
        case 'BSD3':
        licenseBadge = "[BSD 3-Clause License](https://choosealicense.com/licenses/bsd-3-clause/)";
        break;
    
        case 'BSD2':
        licenseBadge = "[BSD 2-Clause License](https://choosealicense.com/licenses/bsd-2-clause/)";
        break;
    
        case 'LGPL':
        licenseBadge = "[GNU Lesser General Public License v3.0 (LGPL-3.0)](https://choosealicense.com/licenses/lgpl-3.0/)";
        break;
    
        case 'MPL':
        licenseBadge = "[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)";
        break;
    
        case 'AGPL':
        licenseBadge = "[GNU Affero General Public License v3.0 (AGPL-3.0)](https://choosealicense.com/licenses/agpl-3.0/)";
        break;
    
        case 'unlicense':
        licenseBadge = "[The Unlicense](https://choosealicense.com/licenses/unlicense/)";
        break;
    
        case 'CC0-1.0':
        licenseBadge = "[Creative Commons Zero v1.0 Universal (CC0-1.0)](https://choosealicense.com/licenses/cc0-1.0/)";
        break;
    
        case 'None':
        licenseBadge = '';
        break;
    }
    return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenselink = '';
    switch (license){
    
        case 'MIT':
        licenselink = "[MIT License](https://choosealicense.com/licenses/mit/)";
        break;
    
        case 'GNU':
        licenselink = "[GNU General Public License v3.0 (GPL-3.0)](https://choosealicense.com/licenses/gpl-3.0/)";
        break;
    
        case 'APACHE':
        licenselink = "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)";
        break;
    
        case 'BSD3':
        licenselink = "[BSD 3-Clause License](https://choosealicense.com/licenses/bsd-3-clause/)";
        break;
    
        case 'BSD2':
        licenselink = "[BSD 2-Clause License](https://choosealicense.com/licenses/bsd-2-clause/)";
        break;
    
        case 'LGPL':
        licenselink = "[GNU Lesser General Public License v3.0 (LGPL-3.0)](https://choosealicense.com/licenses/lgpl-3.0/)";
        break;
    
        case 'MPL':
        licenselink = "[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)";
        break;
    
        case 'AGPL':
        licenselink = "[GNU Affero General Public License v3.0 (AGPL-3.0)](https://choosealicense.com/licenses/agpl-3.0/)";
        break;
    
        case 'unlicense':
        licenselink = "[The Unlicense](https://choosealicense.com/licenses/unlicense/)";
        break;
    
        case 'CC0-1.0':
        licenselink = "[Creative Commons Zero v1.0 Universal (CC0-1.0)](https://choosealicense.com/licenses/cc0-1.0/)";
        break;
    
        case 'None':
        licenselink = '';
        break;
    
    }
    return licenselink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseInfo = '';
    switch (license){
    
        case 'MIT':
            licenseInfo = "This program is covered under the MIT License";
        break;
    
        case 'GNU':
            licenseInfo = "This program is covered under the GNU General Public License v3.0 (GPL-3.0)";
        break;
    
        case 'APACHE':
            licenseInfo = "This program is covered under the Apache License 2.0";
        break;
    
        case 'BSD3':
            licenseInfo = "This program is covered under the BSD 3-Clause License";
        break;
    
        case 'BSD2':
            licenseInfo = "This program is covered under the BSD 2-Clause License";
        break;
    
        case 'LGPL':
            licenseInfo = "This program is covered under the GNU Lesser General Public License v3.0 (LGPL-3.0)";
        break;
    
        case 'MPL':
            licenseInfo = "This program is covered under the Mozilla Public License 2.0";
        break;
    
        case 'AGPL':
            licenseInfo = "This program is covered under the GNU Affero General Public License v3.0 (AGPL-3.0)";
        break;
    
        case 'unlicense':
            licenseInfo = "This program is covered under the The Unlicense agreement";
        break;
    
        case 'CC0-1.0':
            licenseInfo = "This program is covered under the Creative Commons Zero v1.0 Universal (CC0-1.0)";
        break;
    
        case 'None':
            licenseInfo = '';
        break;
    
    }
    return licenseInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

1. [Title](#project-title)
2. [Description](#description)
3. [Table of Contents](#table-of-contents)
4. [Installation](#installation)
5. [Usage](#usage)
6. [License](#license)
7. [Contributing](#contributing)
8. [Tests](#tests)
9. [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing

${data.guidelines}

## Tests

${data.tests}

## Questions

GitHub user: ${data.user}

Email: ${data.email}

`;
}

module.exports = generateMarkdown;
