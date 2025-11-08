## Chart Dashboard

A Next.js 15 dashboard project built with TypeScript, TailwindCSS, Shadcn UI, and Recharts for interactive, visually appealing charts. This dashboard allows users to explore multiple chart types with dynamic filtering and a responsive design.

Features

- Interactive Charts: Area, Bar, Radar, and Radial charts with dynamic tooltips and gradients.

- Chart Selection Buttons: Easily switch between different chart types.

- Responsive Layout: Optimized for desktops, tablets, and mobile devices.

- Shadcn UI Components: Professional-looking UI for cards, tooltips, and selectors.

- TailwindCSS Styling: Minimalist design with hover, active, and focus states.

- Dashboard Navigation: Navigate back to the main page with a simple button.

- Dynamic Data Filtering: Filter chart data based on predefined ranges (7 days, 30 days, 90 days).

Project Structure
├── app
│   ├── dashboard
│   │   └── page.tsx          # Dashboard page containing charts
│   └── page.tsx              # Main landing page with navigation
├── components
│   ├── area-chart.tsx        # Interactive area chart
│   ├── chart-bar-interactive.tsx
│   ├── chart-radar-lines-only.tsx
│   └── chart-radial-grid.tsx
├── styles
│   └── globals.css           # TailwindCSS global styles
├── tailwind.config.js
├── postcss.config.js
└── next.config.js

- Installation

Install dependencies

npm install


Run the development server

npm run dev


Open http://localhost:3000
 in your browser to see the dashboard.

Usage

- Visit the main landing page.

- Click the “Go to Dashboard” button to navigate to the chart dashboard.

- Use the chart selection buttons to switch between Area, Bar, Radar, and Radial charts.

- Explore interactive chart features like tooltips and hover effects.

- Use the Back to Main Page button to return to the landing page.

Technologies Used

    Next.js 15

    TypeScript

    TailwindCSS

    Shadcn UI

    Recharts

## Future Improvements

- Custom Filter Input: Let users define their own data filters.

- API Integration: Replace mock data with live API data.

- Multiple Chart Layouts: Display multiple charts on a single dashboard.

- Dark Mode / Theming: Add user-selectable themes for better UI experience.

- Export Charts: Ability to export charts as images or PDFs.