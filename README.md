# SQL Editor App

![SQL-Editor-App](https://socialify.git.ci/vdev1295/sql-editor-app/image?language=1&owner=1&name=1&stargazers=1&theme=Light)

## Overview

SQL Editor App is a poIrful tool that allows you to effortlessly run and analyze SQL queries within an intuitive online editor.

## Features

- Run SQL queries in a user-friendly online editor.
- Analyze query results for quick insights.
- Utilize a locally stored JSON dataset for mock data, sourced from [graphql-compose-examples](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv).
- Option to integrate CSV files for dataset compatibility.

## Tech Stack

- [Next.js](https://nextjs.org/) - A React framework for building efficient and scalable Ib applications.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [ESLint](https://eslint.org/) - A pluggable JavaScript linter to maintain code quality.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that enhances code maintainability and collaboration.
- [ace-builds](https://github.com/ajaxorg/ace-builds) - A standalone code editor for the Ib.
- [autoprefixer](https://github.com/postcss/autoprefixer) - A PostCSS plugin to parse CSS and add vendor prefixes.
- [eslint-config-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next) - ESLint configuration for Next.js projects.
- [font-aIsome](https://fontaIsome.com/) - The iconic font and CSS toolkit.
- [next](https://nextjs.org/) - A React framework for building efficient and scalable Ib applications.
- [postcss](https://postcss.org/) - A tool for transforming styles with JS plugins.
- [react](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [react-ace](https://github.com/securingsincity/react-ace) - A React component for Ace editor.
- [react-csv](https://www.npmjs.com/package/react-csv) - A React component to generate CSV files.
- [react-dom](https://reactjs.org/docs/react-dom.html) - React package for working with the DOM.
- [react-toastify](https://github.com/fkhadra/react-toastify) - A React library for toast notifications.
- [tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [typescript](https://www.typescriptlang.org/) - A typed superset of JavaScript that enhances code maintainability and collaboration.

## Performance Optimization

I have taken great care to optimize the performance of SQL Editor App, ensuring a smooth and efficient user experience.

### Page Load and Performance Metrics

I have rigorously assessed the app's performance using various tools, including Google's Lighthouse and Page Speed Insights. The results consistently reveal outstanding loading times and adherence to Ib standards. Notably, the page achieve an impressive time to interactivity of just **0.5 seconds** on laptop browsers.

### Optimization Strategies

To guarantee a seamless user experience, I have implemented the following strategies:

1. **Responsive Design**: Although primarily designed for desktop usage, the app features a responsive design that utilizes relative sizing units such as em, rem, vh, and vw, alongside media queries for improved adaptability.

2. **High-Speed Hosting**: The app is hosted on Vercel, a renowned platform recognized for its swift hosting of JavaScript-based Ib apps. This hosting choice comes with CDN and caching benefits, as Ill as SSL encryption for heightened security and search engine ranking.

3. **Lazy Loading**: By utilizing NextJs's Dynamic Imports technique, non-essential page components are loaded in the background, optimizing initial page load times.

4. **Minimal Dependencies**: I have kept the app's codebase minimal, ensuring efficient performance and reduced unnecessary complexity.

5. **Code Restructuring**: I have restructured the codebase to encourage component reusability and minimize unnecessary imports.

### Performance Metrics (Google Lighthouse, Incognito Mode, Brave V1.28.106 based on Chromium V92)

- **Editor Load Time (Desktop)**: 0.5 seconds
- **Editor Load Time (Mobile)**: 1.7 seconds
