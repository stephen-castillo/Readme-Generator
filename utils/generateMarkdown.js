// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
