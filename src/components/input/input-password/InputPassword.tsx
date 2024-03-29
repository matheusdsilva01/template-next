"use client"
import { InputHTMLAttributes, useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { tv } from "tailwind-variants"
import { inputBase } from "../input-base"

type InputProps = {
  fullWidth?: boolean
  label?: string
  labelStyle?: string
} & InputHTMLAttributes<HTMLInputElement>

const input = tv({
  extend: inputBase,
})
const wrapper = tv({
  base: "flex flex-col p-2 relative",
  variants: {
    fullWidth: { true: "w-full" },
  },
})

const InputPassword = ({
  fullWidth,
  label,
  labelStyle,
  className,
  ...otherProps
}: InputProps) => {
  const [type, setType] = useState("password" || otherProps.type)
  return (
    <div className={wrapper({ fullWidth })}>
      {label && (
        <label htmlFor={label} className={labelStyle + " mb-2"}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={label}
        className={input({ class: className })}
        {...otherProps}
      />
      <div className="absolute bottom-5 right-4 select-none">
        {type === "password" ? (
          <EyeOffIcon onClick={() => setType("text")} />
        ) : (
          <EyeIcon onClick={() => setType("password")} />
        )}
      </div>
    </div>
  )
}

export default InputPassword
