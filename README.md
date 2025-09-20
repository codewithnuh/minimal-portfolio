## Minimal Portfolio Template

This is a template for a minimal portfolio website built with [Next.js](https://nextjs.org/), [Payload CMS](https://payloadcms.com/), and [Tailwind CSS](https://tailwindcss.com/). It's designed to be easy to customize and deploy.

### Features

*   **Modern Tech Stack:** Next.js 15 (with Turbopack), Payload CMS 3.0, Tailwind CSS 4.0.
*   **Content Management:** Manage your projects, blog posts, and site settings with Payload CMS.
*   **Responsive Design:** Looks great on all devices.
*   **Themeable:** Easily customize the color scheme and typography.
*   **Easy to Deploy:** Deploy to Vercel with a single command.

### Prerequisites

Make sure you have the following installed:

*   Node.js (version 20 or higher)
*   pnpm (or npm/yarn if you prefer)
*   PostgreSQL (for local development)

### Installation

1.  Clone the repository:

    ```bash
    git clone <your_repository_url>
    cd minimal-portfolio
    ```

2.  Install dependencies:

    ```bash
    pnpm install
    ```

3.  Set up your environment variables:

    Create a `.env` file in the root directory by copying the example:

    ```bash
    cp .env.example .env
    ```

    Then, update the `.env` file with your own values.

### Environment Variables

*   `DATABASE_URI`: The connection string for your PostgreSQL database.
*   `PAYLOAD_SECRET`: A secret key used for encrypting sensitive data.
*   `UPLOADTHING_TOKEN`: Your UploadThing API token for file uploads.
*   `SMTP_HOST`: The hostname of your SMTP server.
*   `SMTP_PORT`: The port of your SMTP server.
*   `SMTP_USER`: The username for your SMTP server.
*   `SMTP_PASS`: The password for your SMTP server.
*   `EMAIL_RECEIVER`: The email address where contact form messages will be sent.

### Development

To start the development server, run:

```bash
pnpm run dev
```

This will start the Next.js development server with Turbopack. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

To build the site for production, run:

```bash
pnpm run build
```

This will first run database migrations and then build the Next.js application.

### Production

To start the production server, run:

```bash
pnpm run start
```

### Linting

To lint the codebase, run:

```bash
pnpm run lint
```

### Database Migrations

This project uses Payload CMS migrations to manage the database schema.

*   To create a new migration, run:

    ```bash
    pnpm run migrate:create
    ```

*   To apply all pending migrations, run:

    ```bash
    pnpm run migrate
    ```

*   To check the status of migrations, run:

    ```bash
    pnpm run migrate:status
    ```

### Deployment

This project is optimized for deployment to [Vercel](https://vercel.com/). To deploy, you can use the Vercel CLI:

```bash
pnpm run build:vercel
```

### Customization

*   **Content:** Manage content such as projects, posts, site settings, hero sections, and about information via the Payload CMS admin panel at `/admin`.
*   **Components:** Modify React components in the `src/components` directory.
*   **Styling:** Adjust the Tailwind CSS styles in `src/app/(frontend)/globals.css`.
*   **Payload Config:** Modify the `src/payload.config.ts` file to adjust collections, globals, and other Payload CMS settings.