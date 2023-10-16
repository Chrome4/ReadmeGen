const questions = [
  {
    type: "input",
    message: "Title for your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Description for your project?",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions for your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage information for your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution guidelines for your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Test instructions for your project?",
    name: "tests",
  },
  {
    type: "list",
    message: "Licensing?",
    name: "license",
    choices: [
      {
        name: "None",
        value: {
          name: "none",
        },
      },
      {
        name: "Apache 2.0 License",
        value: {
          name: "Apache 2.0 License",
          SPDX_ID: "Apache-2.0",
          badge_ID: "Apache_2.0-yellowgreen",
        },
      },
      {
        name: "Boost Software License 1.0",
        value: {
          name: "Boost Software License 1.0",
          SPDX_ID: "BSL-1.0",
          badge_ID: "Boost_1.0-lightblue",
        },
      },
      {
        name: "BSD 2-clause License",
        value: {
          name: "BSD 2-clause License",
          SPDX_ID: "BSD-2-Clause",
          badge_ID: "BSD_2--Clause-orange",
        },
      },
      {
        name: "BSD 3-clause License",
        value: {
          name: "BSD 3-clause Licence",
          SPDX_ID: "BSD-3-Clause",
          badge_ID: "BSD_3--Clause-orange",
        },
      },
      {
        name: "Creative Commons Zero v1.0 Universal License",
        value: {
          name: "Creative Commons Zero v1.0 Universal License",
          SPDX_ID: "CCO-1.0",
          badge_ID: "CC0_1.0-lightgrey",
        },
      },
      {
        name: "Eclipse Public License 2.0",
        value: {
          name: "Eclipse Public License 2.0",
          SPDX_ID: "EPL-2.0",
          badge_ID: "EPL_2.0-red",
        },
      },
      {
        name: "GNU Affero General Public License v3.0",
        value: {
          name: "GNU Affero General Public License v3.0",
          SPDX_ID: "AGPL-3.0-only",
          badge_ID: "AGPL_v3-blue",
        },
      },
      {
        name: "GNU General Public License v2.0",
        value: {
          name: "GNU General Public License v2.0",
          SPDX_ID: "GPL-2.0",
          badge_ID: "GPL_v2-blue",
        },
      },
      {
        name: "GNU Lesser General Public License v2.1",
        value: {
          name: "GNU Lesser General Public License v2.1",
          SPDX_ID: "LGPL-2.1",
          badge_ID: "LGPL_v2.1-blue",
        },
      },
      {
        name: "MIT License",
        value: {
          name: "MIT License",
          SPDX_ID: "MIT",
          badge_ID: "MIT-yellow",
        },
      },
      {
        name: "Mozilla Public License 2.0",
        value: {
          name: "Mozilla Public License 2.0",
          SPDX_ID: "MPL-2.0",
          badge_ID: "MPL_2.0-brightgreen",
        },
      },
      {
        name: "The Unlicense",
        value: {
          name: "The Unlicense",
          SPDX_ID: "Unlicense",
          badge_ID: "Unlicense-blue",
        },
      },
    ],
  },
  {
    type: "input",
    message: "Please enter your GitHub username.",
    name: "username",
  },
  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",
  },
];

module.exports = questions;
