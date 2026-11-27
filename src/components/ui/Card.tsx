import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva("card", {
  variants: {
    tone: {
      default: "",
      warm: "card-warm",
    },
    interactive: {
      true: "card-hover",
      false: "",
    },
    media: {
      true: "card-media",
      false: "",
    },
  },
  defaultVariants: {
    tone: "default",
    interactive: false,
    media: false,
  },
});

type CardProps = React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants>;

export function Card({
  tone,
  interactive,
  media,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ tone, interactive, media }), className)}
      {...props}
    ></div>
  );
}

export function CardBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("card-body", className)} {...props}></div>;
}
