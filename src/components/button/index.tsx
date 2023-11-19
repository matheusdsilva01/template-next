import { ButtonHTMLAttributes } from "react"
import { tv } from "tailwind-variants"

type ButtonProps = {
  fullWidth?: boolean
  rounded?: boolean
  variant?: "primary" | "secondary" | "tertiary"
} & ButtonHTMLAttributes<HTMLButtonElement>

const button = tv({
  base: "px-4 py-2",
  variants: {
    variant: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-gray-500 hover:bg-gray-600 text-white",
      tertiary: "bg-white hover:bg-gray-100 text-gray-800",
    },
    fullWidth: {
      true: "w-full",
    },
    rounded: {
      true: "rounded-full",
    },
  },
})

const Button = ({
  children,
  rounded,
  fullWidth,
  variant = "primary",
  className,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      {...otherProps}
      className={button({
        fullWidth,
        rounded,
        variant,
        class: className,
      })}
    >
      {children}
    </button>
  )
}

export default Button
