import React, { useState } from 'react'

interface ZoomableImageProps {
  src: string
  alt?: string
  className?: string
  placeholderText?: string
}

export const ZoomableImage: React.FC<ZoomableImageProps> = ({ 
  src, 
  alt = 'Imagen', 
  className = '', 
  placeholderText = '[Imagen]' 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!src) {
    return (
      <div className={`bg-gray-200 flex flex-col items-center justify-center text-gray-500 overflow-hidden ${className}`}>
         <span className="text-sm">{placeholderText}</span>
      </div>
    )
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer object-cover ${className}`}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[60] bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
              }}
              aria-label="Cerrar imagen"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </>
  )
}
