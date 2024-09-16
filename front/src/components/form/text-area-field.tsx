/* eslint-disable react/display-name */
import React, { forwardRef, LegacyRef } from "react"

type TextAreaFieldProps = React.HTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
  name?: string
  disabled?: boolean
}

const TextAreaField = forwardRef(({ label, error, ...props }: TextAreaFieldProps, ref: LegacyRef<HTMLTextAreaElement>) => {
  const id = props.id || props.name || label.toLowerCase().replace(/ /g, "-")

  return (
    <div className="flex flex-col gap-2">
      <label className={`text-sm font-bold ${error ? "text-red-500" : "text-gray-700"}`} htmlFor={id}>{label}</label>
      <textarea
        id={id}
        ref={ref}
        className={`border bg-gray-20 rounded p-2 focus:border-green-dark resize-none h-40
          focus:shadow-blur focus:shadow-color-green-dark-20 focus:outline-none
          ${error ? "border-red-500" : "border-gray-300"}
          ${props.disabled ? "text-gray-500 cursor-not-allowed" : ""}
          `}
        {...props}
      />
      {error && <span className="text-red-500 text-sm -mt-2 ml-2">{error}</span>}
    </div>
  )
})

export default TextAreaField