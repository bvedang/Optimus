# Optimus

Next.js application with TypeScript and App Router.

## Prerequisites

- Node.js 18+
- Docker & Docker Compose

## Database Setup

Start the Postgres database:

```bash
docker compose up -d
```

The database will be available at `postgresql://postgres:postgres@localhost:5432/optimus`

Stop the database:

```bash
docker compose down
```

To remove the database volume:

```bash
docker compose down -v
```

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
