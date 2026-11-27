import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva("icon-badge", {
  variants: {
    tone: {
      default: "",
      warm: "icon-badge-warm",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

export function Badge({
  className,
  tone,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ tone }), className)} {...props}></span>
  );
}
