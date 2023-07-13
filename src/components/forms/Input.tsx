import React, { ChangeEventHandler } from 'react'

interface InputProps {
  name: string,
  type: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void,
  placeholder: string
}

export function Input({ name, type, value, onChange, placeholder }: InputProps) {
  return (
    <input
      name={name}
      onChange={onChange}
      value={value}
      type={type}
      className='bg-transparent text-slate-100 outline-none py-2 px-4 rounded-xl border-2 border-slate-600 transition  focus:border-slate-800'
      placeholder={placeholder}
    />
  )
}
