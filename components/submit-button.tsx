import { LoaderCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  isLoading: boolean;
};

export function SubmitButton({
  isLoading,
  children,
}: PropsWithChildren<SubmitButtonProps>) {
  return (
    <div>
      <Button type="submit" disabled={isLoading}>
        <div className={cn(isLoading && "invisible")}>{children}</div>
        <LoaderCircleIcon
          className={cn(
            "invisible absolute size-4 animate-spin",
            isLoading && "visible"
          )}
        />
      </Button>
    </div>
  );
}
