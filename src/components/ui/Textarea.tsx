import { useId } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.ComponentProps<"textarea"> & { label: string };

export function Textarea({ label, className, ...props }: TextareaProps) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 font-semibold">
        {label}
      </label>
      <textarea id={id} className={cn("input", className)} {...props} />
    </div>
  );
}
