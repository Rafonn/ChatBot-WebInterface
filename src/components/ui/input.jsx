import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex items-center w-full rounded-md border border-input bg-transparent shadow-xs transition-[color,box-shadow]",
        "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
        className
      )}
    >
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none bg-transparent px-4 py-0 outline-none",
          "placeholder:text-muted-foreground file:text-foreground",
          "focus:ring-0"
        )}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";

export { Input };