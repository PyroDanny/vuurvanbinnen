import { useId } from "react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & { label: string };

export function Input({ label, className, ...props }: InputProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <input id={id} className={cn("input", className)} {...props} />
    </div>
  );
}
