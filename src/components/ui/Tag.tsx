import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const tagVariants = cva("tag", {
  variants: {
    tone: {
      default: "",
      warm: "tag-warm",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

export function Tag({
  className,
  tone,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof tagVariants>) {
  return (
    <span className={cn(tagVariants({ tone }), className)} {...props}></span>
  );
}
