'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface RichTextEditorProps {
  initialValue?: string
  onChange: (content: string) => void
}

export default function RichTextEditor({ initialValue = '', onChange }: RichTextEditorProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (content: string) => {
    setValue(content)
    onChange(content)
  }

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['blockquote', 'code-block'],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'align': [] }],
          ['link', 'image'],
          ['clean']
        ],
      }}
    />
  )
}

