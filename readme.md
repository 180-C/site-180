# 180°C Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![pages-build-deployment](https://github.com/180-C/site-180/actions/workflows/hugo.yaml/badge.svg)](https://github.com/180-C/site-180/actions/workflows/hugo.yaml)

This repository contains the source code of the 180°C website.

## Development

### Prerequisites

First, make sure you have the following installed:

- [Hugo v0.142.0](https://gohugo.io/getting-started/installing/)
- A node js package manager (Either bun or npm)

If you use VSCode, those extensions are recommended :

- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Tailwind CSS Intelissense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

Then, install all of the dependencies and update the modules (the commands are the same for Bun):

```bash
npm i
npm run update-modules
```

### Run the website locally

To run the development server (the one that includes drafts)

```bash
npm run dev
```

To run a production ready server

```bash
npm run build
```

## Deployment

The website is automatically deployed on [https://180c.ch](https://180c.ch) when a commit is pushed to the `release` branch.

## License

Released under the [MIT License](LICENSE).

## Credits

- [Hugo](https://gohugo.io/)
- [Hugoplate](https://github.com/zeon-studio/hugoplate)

## Authors

- [Antonin Faure](https://github.com/antoninfaure)



