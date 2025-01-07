"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeClosed } from "lucide-react"

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    const [visible, setVisible] = React.useState(false)
    return (
      <div className="flex relative">
        <input
          type={visible ? "text" : "password"}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        <button className="absolute right-0 h-full flex items-center justify-center pr-3" onClick={() => setVisible(prev => !prev)}>
          {visible ?
            <Eye size={18}/>
            :
            <EyeClosed size={18}/>
          }
        </button>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
