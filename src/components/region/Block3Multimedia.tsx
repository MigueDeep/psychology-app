import React from 'react'
import { ZoomableImage } from '../ui/ZoomableImage'

interface Block3MultimediaProps {
  data: {
    gallery360: string[]
    landscapes: string[]
    crafts: string[]
    miniVideos: string[]
  }
}

export const Block3Multimedia: React.FC<Block3MultimediaProps> = ({ data }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#020042] mb-2">BLOQUE 3 — Multimedia</h2>
      </div>

      <div className="space-y-8">

        {/* Galería general */}
        <div>
          <h3 className="font-semibold text-lg text-[#307ffe] border-b pb-2 mb-4">Galería de Imágenes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.landscapes.map((src, i) => (
              <div key={`land-${i}`} className="h-24 rounded flex flex-col justify-center items-center overflow-hidden">
                <ZoomableImage src={src} className="w-full h-full" placeholderText={`[Paisaje ${i+1}]`} />
              </div>
            ))}
            {data.crafts.map((src, i) => (
              <div key={`craft-${i}`} className="h-24 rounded flex flex-col justify-center items-center overflow-hidden">
                <ZoomableImage src={src} className="w-full h-full" placeholderText={`[Artesanía ${i+1}]`} />
              </div>
            ))}
          </div>
        </div>

        {/* Mini videos */}
        <div>
          <h3 className="font-semibold text-lg text-[#307ffe] border-b pb-2 mb-4">Mini Videos (Danzas, Fiestas, Música)</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.miniVideos.map((src, i) => (
              <div key={`video-${i}`} className="aspect-video rounded overflow-hidden">
                <iframe
                  src={src}
                  title={`Mini Video ${i+1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
