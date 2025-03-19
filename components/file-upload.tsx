"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UploadIcon, CheckIcon } from "lucide-react"

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)

    // Simulate upload
    setTimeout(() => {
      setUploading(false)
    }, 2000)

    // In a real implementation, you would upload the file to your server or a storage service
    // const formData = new FormData()
    // formData.append('file', file)
    // await fetch('/api/upload', { method: 'POST', body: formData })
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
        />
        <label htmlFor="file-upload" className="cursor-pointer flex-1 border rounded-md px-3 py-2 text-sm truncate">
          {file ? file.name : "Choose file"}
        </label>
        <Button type="button" size="sm" variant="outline" onClick={handleUpload} disabled={!file || uploading}>
          {uploading ? (
            <span className="flex items-center gap-1">
              <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
              Uploading
            </span>
          ) : file ? (
            <span className="flex items-center gap-1">
              <UploadIcon className="h-4 w-4" />
              Upload
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <UploadIcon className="h-4 w-4" />
              Upload
            </span>
          )}
        </Button>
      </div>
      {file && (
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <CheckIcon className="h-3 w-3 text-green-500" />
          File selected
        </p>
      )}
    </div>
  )
}

