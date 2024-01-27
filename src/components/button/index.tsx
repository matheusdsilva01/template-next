import { ButtonHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

const button = tv({
  base: "px-4 py-2 text-lg md:text-2xl",
  variants: {
    variant: {
      contained: "!text-white border-none",
      outlined: "border-4 !bg-white",
    },
    color: {
      blue: "bg-blue-500 text-blue-500 border-blue-500",
      red: "bg-red-500 text-red-500 border-red-500",
      green: "bg-green-500 text-green-500 border-green-500",
    },
    fullWidth: {
      true: "w-full",
    },
    rounded: {
      true: "rounded-2xl",
    },
  },
  defaultVariants: {
    variant: "contained",
    color: "red",
  },
})

const Button = ({ children, ...otherProps }: ButtonProps) => {
  const getVariantsProps = (obj: {}) => {
    const propsVariants: {} = Object.fromEntries(
      Object.entries(obj).filter(prop =>
        button.variantKeys.some(variant => variant === prop[0]),
      ),
    )
    const componentProps: {} = Object.fromEntries(
      Object.entries(obj).filter(
        prop => !button.variantKeys.some(variant => variant === prop[0]),
      ),
    )
    return [propsVariants, componentProps]
  }
  const [propsVariants, componentProps] = getVariantsProps(otherProps)

  return (
    <button {...componentProps} className={button(propsVariants)}>
      {children}
    </button>
  )
}

export default Button
