# Cookspace Career Application Portal

A modern, full-stack job application platform for Cookspace Technologies Limited, built with Next.js and React. This portal enables candidates to explore open positions, view detailed job descriptions, and submit applications with document uploads—all in a visually appealing, accessible, and mobile-friendly interface.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Directory Structure](#directory-structure)
- [How to Add a Job Posting](#how-to-add-a-job-posting)
- [How the Application Process Works](#how-the-application-process-works)
- [Customization & Extensibility](#customization--extensibility)
- [Development & Local Setup](#development--local-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Environment Variables](#environment-variables)

---

## Overview

Cookspace Career Application Portal is designed to streamline the recruitment process for both applicants and HR. It features dynamic job listings, a robust application form with file upload support, and a clean, responsive UI. The project leverages Next.js App Router, React hooks, and modular UI components for maintainability and scalability.

---

## Features

- **Dynamic Job Listings**: Each job is defined in a TypeScript array and rendered at `/career/[slug]`.
- **Detailed Job Pages**: Each job page displays company info, responsibilities, requirements, benefits, and equal opportunity statements.
- **Tabbed Navigation**: Switch between job details and the application form with a visually distinct, accessible tab UI.
- **Rich Application Form**: Collects applicant info, supports file uploads (resume, cover letter), and validates input.
- **API Integration**: Submits applications to a Next.js API route for processing and storage.
- **Responsive & Accessible**: Mobile-friendly, keyboard navigable, and uses semantic HTML.
- **Customizable UI**: Built with Tailwind CSS and modular components for easy theming and extension.

---

## Directory Structure

```
app/
  career/
    [slug]/page.tsx   # Dynamic job detail & application page (core logic)
    page.tsx          # Career overview/landing page
  api/recruitment/    # API route for handling application submissions
  ...                # Other app routes (about, contact, project, etc.)
component/
  Career/            # Career-specific UI sections
  Common/            # Shared UI (Headings, Connect, etc.)
  ...
components/ui/       # UI primitives (Button, Input, Tabs, Textarea, etc.)
hooks/               # Custom React hooks
lib/                 # Utility functions
public/images/       # Static images and assets
```

---

## How to Add a Job Posting

1. Open `app/career/[slug]/page.tsx`.
2. Add a new object to the `jobs` array with all required fields:
   - `title`, `slug`, `location`, `company`, `salary`, `about_us`, `position`, `responsibilities`, `requirements`, `benefits`, `how_to_apply`, `apply_now`, `equal_opportunity`, etc.
3. Ensure the `slug` is unique (used in the URL).
4. The job will be accessible at `/career/[slug]`.

---

## How the Application Process Works

1. **User visits** a job page (e.g., `/career/business-development-executive`).
2. **Job details** are shown in a tabbed interface. The active tab is visually highlighted.
3. **Application form** collects:
   - Name, email, phone
   - Resume (PDF), cover letter (PDF/DOC/DOCX), Google Drive link
4. **Validation** ensures all required fields and file types are correct.
5. **On submit**, the form data is sent as `FormData` to `/api/recruitment`.
6. **API route** processes the application, stores files, and returns a reference number or error.
7. **User receives** a confirmation or error message.

---

## Customization & Extensibility

- **UI Components**: Modify or extend components in `components/ui/` or `component/` for branding, layout, or new features.
- **API Logic**: Update `app/api/recruitment/route.ts` to change how applications are processed, validated, or stored (e.g., integrate with a database, email, or third-party service).
- **Styling**: Uses Tailwind CSS. Update `globals.css` or component classes for custom themes.
- **Add More Fields**: To add more fields to the application form, update the form state and UI in `app/career/[slug]/page.tsx` and handle them in the API route.
- **Internationalization**: Add i18n support if needed for multi-language job listings.

---

## Development & Local Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

- Edit any file in `app/`, `component/`, or `components/ui/` to see instant updates.
- API route changes in `app/api/recruitment/route.ts` are hot-reloaded.

---

## Deployment

- Deploy to [Vercel](https://vercel.com/), Netlify, or any platform supporting Next.js.
- For Vercel:
  1. Push your code to GitHub.
  2. Connect your repository to Vercel.
  3. Set environment variables if needed.
  4. Deploy and monitor your application.

---

## Contributing

This project is currently proprietary and not open for public contributions. For internal improvements, follow your team's code review and PR process.

---

## License

This project is proprietary to Cookspace Technologies Limited. All rights reserved.

---

## Environment Variables

The application uses environment variables for secure configuration, especially for email delivery via SMTP. Create a `.env` file in the project root with the following variables:

```
SMTP_HOST=
SMTP_PORT=587
SMTP_USERNAME=
SMTP_PASSWORD=your_smtp_password
```

- **SMTP_HOST**: The SMTP server address (e.g., Mailtrap for development/testing).
- **SMTP_PORT**: The port for SMTP (commonly 587 for TLS).
- **SMTP_USERNAME**: Your SMTP username.
- **SMTP_PASSWORD**: Your SMTP password.

> **Note:** Never commit your `.env` file or secrets to version control. Use environment variables in your deployment platform for production.

---


