1. install zod, @prisma/client, and prisma (devDependencies)
2. Run `pnpm prisma init`
3. Add docker-compose.yml, run `docker-compose up -d`
4. Run `pnpm prisma db push`

```
services:
  postgres:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: pagelink_dev
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:

```
