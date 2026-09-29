# Income Expense Tracker

## Overview

Income Expense Tracker is a beginner-friendly front-end project for entering monthly income and expenses and comparing them visually.

The project is a work in progress for practicing HTML, Bootstrap, and JavaScript. It currently focuses on data entry and chart display.

To try it, open `index.html` in a web browser with an internet connection. Enter values in the Data tab, then select Chart to see the comparison. After changing values, reopen the Chart tab to refresh the chart. No build step or package installation is required.

## Current Features

- Responsive Bootstrap navbar with the application name and Home and Logout placeholder links.
- Income and Expenses number inputs for January through December, with bold labels and unique input IDs.
- Two month columns on medium and larger screens, stacking into one column on smaller screens.
- Data and Chart tabs, with Data selected initially.
- JavaScript functions that read all 12 months in order and treat empty fields as zero for the chart.
- A responsive Chart.js bar chart showing Income in green and Expenses in red, with January through December along the horizontal axis and a vertical axis configured to begin at zero.
- The chart is created the first time the Chart tab becomes visible. On later visits, JavaScript reads the latest entries, resizes, and updates the existing chart.

`index.js` currently contains the input-reading and chart-update functionality. Income and expense totals, balance/profit calculations, persistent storage, authentication, and functional logout have not been implemented. Both Home and Logout use placeholder `#` links. Entries are not saved by the application, and the chart refreshes when its tab opens rather than while typing. The inputs use the browser's number input controls; there is no custom validation or feedback for negative amounts or currency precision.

## Technologies Used

- **HTML5** — page structure, labels, and number inputs.
- **Bootstrap 5.3.8** — responsive layout, navbar, form styling, and tabs.
- **JavaScript** — reading input values and updating the chart.
- **Chart.js 4** — displaying monthly income and expenses as a bar chart.

Bootstrap and Chart.js are loaded through CDN links, so an internet connection is needed to load those resources.

## Project Structure

```text
Income Expense Tracker/
├── index.html   # Navbar, monthly inputs, tabs, canvas, and library links
├── index.js     # Input-reading functions and chart creation/updates
└── README.md    # Project overview and learning progress
```

## Learning Goals

- Build clear HTML structure and connect labels to inputs.
- Use Bootstrap to create layouts that adapt to different screen sizes.
- Practice JavaScript functions, arrays, number conversion, and events.
- Read form values and present them in a chart.
- Use Git commits and GitHub to track and share progress.
- Use Codex to help understand, review, and improve code while checking its suggestions.

## Planned Features

Possible future improvements include:

- Income and expense totals and balance/profit calculations.
- Saving and restoring entered values.
- Additional input validation and helpful feedback.

These features are not implemented yet. Authentication and a backend are also outside the current project scope; the Logout link remains a placeholder.
