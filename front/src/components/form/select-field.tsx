import { normalizeString } from "@utils/string"
import React, { forwardRef, LegacyRef, useCallback, useRef } from "react"

export type Option<T> = {
  value: T
  label: string
}

type SelectFieldProps<T> = Omit<React.HTMLAttributes<HTMLInputElement>, 'onSelect'> & {
  label: string
  options: Option<T>[]
  onSelect: (option: Option<T>) => void
  error?: string
  name?: string
  disabled?: boolean
}

export default function SelectField<T>({ label, options, error, onSelect, ...props }: SelectFieldProps<T>) {
  const id = props.id || props.name || label.toLowerCase().replace(/ /g, "-")
  const [focusedOption, setFocusedOption] = React.useState<number | null>(null)
  const [text, setText] = React.useState("")

  const inputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter((option) => normalizeString(option.label).includes(normalizeString(text)))

  return (
    <div
      className="relative flex flex-col gap-2 [&:focus-within>ul]:flex"
      onKeyDown={(e) => {
        if (e.key === "ArrowDown") {
          setFocusedOption((prev) => (prev === null ? 0 : Math.min(prev + 1, filteredOptions.length - 1)))
        } else if (e.key === "ArrowUp") {
          setFocusedOption((prev) => (prev === null ? 0 : Math.max(prev - 1, 0)))
        }
      }}
    >

      <label className={`text-sm font-bold ${error ? "text-red-500" : "text-gray-700"}`} htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={inputRef}
        type="text"
        autoComplete="off"
        className={`border bg-gray-20 rounded p-2 focus:border-green-dark
          focus:shadow-blur focus:shadow-color-green-dark-20 focus:outline-none
          ${error ? "border-red-500" : "border-gray-300"}
          ${props.disabled ? "text-gray-500 cursor-not-allowed" : ""}
          `}
        {...props}
        onChange={(e) => {
          props.onChange?.(e)
          setText(e.target.value)
          setFocusedOption(null)
        }}
      />
      {error && <span className="text-red-500 text-sm -mt-2 ml-2">{error}</span>}

      <ul className="hidden flex-col absolute bottom-0 translate-y-full bg-white w-full shadow">
        {filteredOptions.map((option, index) => (
          <li
            key={index}
            tabIndex={-1}
            className={`pl-2 overflow-hidden text-ellipsis text-nowrap cursor-pointer border h-8 leading-8
              hover:bg-green-dark-20
              ${focusedOption === index ? 'bg-green-dark-20' : ''}
              `}
            onClick={() => {
              onSelect(option)
              setText(option.label)
              inputRef.current!.value = option.label
              inputRef.current!.parentElement!.nextElementSibling?.getElementsByTagName('input')[0]?.focus?.()
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>

    </div>
  )
}
