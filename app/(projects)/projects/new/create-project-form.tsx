"use client";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { api } from "@/app/(trpc)/query-client";
import { SubmitButton } from "@/components/submit-button";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(3),
});

export function CreateProjectForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const createProject = api.project.create.useMutation();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createProject.mutateAsync(values);
    router.push("/projects");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Acme Inc" {...field} />
              </FormControl>
              <FormDescription>
                This is your public project name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isLoading={createProject.isPending}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
