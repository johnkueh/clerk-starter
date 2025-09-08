# Development Guidelines

## Core Principles

- TypeScript strict mode, no `any` types or assertions
- Immutable data, pure functions, functional programming
- Schema-first with Zod, never redefine schemas
- Small incremental changes, self-documenting code

## Tech Stack

Next.js 15, TypeScript, Better Auth, PostgreSQL/Prisma, tRPC, Tailwind CSS v4, Radix UI, pnpm

## Key Conventions

### TypeScript

- Prefer `type` over `interface`
- Domain-specific branded types
- Schema-first: define Zod schemas → derive types
- Static imports only (no inline `await import()`)

### Code Style

- **Always use function declarations over const** (e.g., `function foo() {}` not `const foo = () => {}`)
  - Exception: src/components/ui directory (Shadcn components use arrow functions)
  - Exception: src/hooks directory
  - Exception: inline callbacks/event handlers within components
  - Exception: when assigning the result of a function call (e.g., `const result = someFunction()`)
- Early returns, no nested conditionals
- Options objects for parameters
- camelCase functions, PascalCase types/components
- kebab-case files

### React/Forms

- Always use react-hook-form with zodResolver
- Use mutation's `isPending` for loading states
- Toast notifications with sonner

### API/tRPC

```typescript
// Router
export const userRouter = router({
  update: procedure.input(updateUserSchema).mutation(async ({ input, ctx }) => {
    if (!ctx.user) throw new TRPCError({ code: "UNAUTHORIZED" });
    return updateUser(ctx.user.id, input);
  }),
});

// Component
const updateUser = api.user.update.useMutation();
const onSubmit = form.handleSubmit(async (data) => {
  await updateUser.mutateAsync(data);
});
```

### Testing

- Vitest + Fishery factories
- Integration tests for tRPC routers
- Cleanup after tests

## Commands

```bash
pnpm check          # lint + typecheck
pnpm test           # run tests
pnpm prisma:push    # update database
```

## OpenAI Integration

Always use `responses.parse` with `zodTextFormat` per `/server/services/openai-api-guide.md`

## DRY = Don't Repeat Knowledge

Not about similar code, but about duplicated business logic

## When Working with Claude

- Think deeply before edits
- Follow existing patterns
- Ensure `pnpm check` passes
- Small, incremental changes
- No marketing language in PRs
