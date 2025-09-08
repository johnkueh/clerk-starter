# Add Prisma to Next.js App

---

## 🚀 Quick Start

This project includes a pre-configured Prisma setup with PostgreSQL. Follow these steps to set up your database.

## 1. Installation

Install the required packages:

```bash
pnpm add zod @prisma/client
pnpm add -D prisma
```

## 2. Initialize Prisma

```bash
pnpm prisma init
```

## 3. Start PostgreSQL Database

The docker-compose.yml file is already configured in the prisma folder. Start the database:

```bash
pnpm db:up
```

## 4. Push Schema to Database

```bash
pnpm prisma db push
```
