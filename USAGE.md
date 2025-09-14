## Usage Guide

This template is built using Next.js, Payload CMS, and Tailwind CSS. It's designed to be a minimal portfolio site that is easy to customize and deploy.

### Prerequisites

Make sure you have the following installed:

* Node.js (version 18 or higher)
* pnpm (or npm/yarn if you prefer)
* PostgreSQL (for local development)

### Installation

1. Clone the repository:

    ```bash
    git clone <your_repository_url>
    cd minimal-portfolio
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Set up your environment variables:

    Create a `.env` file in the root directory and add the following:

    ```
    DATABASE_URI=<your_postgres_connection_string>
    PAYLOAD_SECRET=<a_secure_random_string>
    ```

    **Note:** It's crucial to use a strong, randomly generated string for `PAYLOAD_SECRET` to ensure the security of your data.
    Here is an example `.env` file

    ```
    EMAIL_USER="your-email@example.com"
    EMAIL_PASS="your-email-password"
    EMAIL_RECEIVER="recipient@example.com"
    SMTP_HOST="your-smtp-host"
    SMTP_PORT=587
    EMAIL_FROM_ADDRESS="info@example.com"
    EMAIL_FROM_NAME="Example"


    PAYLOAD_SECRET=your-super-secret-key
    DATABASE_URI=postgres://postgres:root.password@localhost:5432/minimal-portfolio
    ```

    You will also need to have a PostgreSQL database running and provide the correct connection string in `DATABASE_URI`.  For local development, you can use a tool like Docker to set up a PostgreSQL instance.

### Email Configuration

To enable email functionality, you need to configure the following environment variables:

* `EMAIL_USER`: The username for your SMTP server.
* `EMAIL_PASS`: The password for your SMTP server.
* `SMTP_HOST`: The host address of your SMTP server.
* `SMTP_PORT`: The port number of your SMTP server (usually 587).

### Running the Development Server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
pnpm run build
```

### Starting the Production Server

```bash
pnpm run start
```

### Linting

```bash
pnpm run lint
```

### Resetting Migrations

```bash
pnpm run reset
```

### Environment Variables

* `DATABASE_URI`: The connection string for your PostgreSQL database.
* `PAYLOAD_SECRET`: A secret key used for encrypting sensitive data.

### Payload CMS Admin

The Payload CMS admin interface is available at `/admin` when the development server is running.  You can log in using the credentials of the first user created.

### Customization

#### Setting up the Admin User

When you run the development server for the first time, Payload CMS will prompt you to create an admin user.  This user will have full access to the CMS and be able to manage all content and settings. Make sure to keep the credentials secure.

* **Content:**  Manage content such as projects, posts, site settings, hero sections, and about information via the Payload CMS admin panel.
  * **Projects & Posts**: Create, edit and publish your projects and blog posts.  Use categories and tags to organize your content.
  * **Site Settings**: Control global site-wide settings such as default meta descriptions, social media links, and more.
  * **Hero Section**: Customize the main landing section of your site.
  * **About Information**: Edit about information on the about page.
* **Components:**  Modify React components in the `src/components` directory to customize the look and feel of the portfolio.
  * **Navbar**: Edit the navigation bar.
  * **Footer**: Edit the footer.
  * **Theme Provider**: Configure themes.
* **Styling:**  Edit the `src/app/globals.css` file to adjust the Tailwind CSS styles.
* **Payload Config:**  Modify the `payload.config.ts` file to adjust collections, globals, and other Payload CMS settings.
  * **Collections**:  These define the data structures for your content (e.g., Projects, Posts).
  * **Globals**: These are singletons that hold global site data (e.g., Site Settings, Hero).

### Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

To configure the email functionality, ensure you have set up the correct environment variables. You will also need to enable "Less secure app access" in your Gmail account settings if you are using Gmail. However, it is highly recommended to use "App Passwords" instead, as it is a more secure method.
