import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-indigo-600 text-primary-foreground [a&]:hover:bg-indigo-600/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        black:
          "border-transparent bg-black-ivory text-white-cascaron [a&]:hover:bg-black-ivory/90",
        colorless:
          "border-transparent bg-colorless text-primary-foreground [a&]:hover:bg-colorless/90",
        darkness:
          "border-transparent bg-darkness text-primary-foreground [a&]:hover:bg-darkness/90",
        dragon:
          "border-transparent bg-dragon text-primary-foreground [a&]:hover:bg-dragon/90",
        fighting:
          "border-transparent bg-fighting text-primary-foreground [a&]:hover:bg-fighting/90",
        fire: "border-transparent bg-fire text-primary-foreground [a&]:hover:bg-fire/90",
        grass:
          "border-transparent bg-grass text-primary-foreground [a&]:hover:bg-grass/90",
        lightning:
          "border-transparent bg-lightning text-primary-foreground [a&]:hover:bg-lightning/90",
        metal:
          "border-transparent bg-metal text-primary-foreground [a&]:hover:bg-metal/90",
        psychic:
          "border-transparent bg-psychic text-primary-foreground [a&]:hover:bg-psychic/90",
        plant:
          "border-transparent bg-plant text-primary-foreground [a&]:hover:bg-plant/90",
        water:
          "border-transparent bg-water text-primary-foreground [a&]:hover:bg-water/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className, "rounded-full")}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
