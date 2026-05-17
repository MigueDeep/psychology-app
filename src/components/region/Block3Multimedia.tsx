import React from 'react'
import { ZoomableImage } from '../ui/ZoomableImage'

interface Block3MultimediaProps {
  data: {
    gallery360: string[]
    landscapes: string[]
    crafts: string[]
    miniVideos: {
      dances: string[]
      festivals: string[]
      music: string[]
    }
  }
}

export const Block3Multimedia: React.FC<Block3MultimediaProps> = ({ data }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#020042] mb-2">BLOQUE 3 — Multimedia</h2>
      </div>

      <div className="space-y-8">
        {/* Gallery 360
        <div>
          <h3 className="font-semibold text-lg text-[#307ffe] border-b pb-2 mb-4">Fotos 360°</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.gallery360.map((src, i) => (
              <div key={i} className="h-40 rounded-lg flex items-center justify-center border border-dashed border-gray-400 overflow-hidden">
                 <ZoomableImage src={src} className="w-full h-full" placeholderText={`[Foto 360 ${i+1}]`} />
              </div>
            ))}
            {data.gallery360.length === 0 && <p className="text-gray-500 text-sm">No hay fotos 360 disponibles.</p>}
          </div>
        </div> */}

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
            {data.miniVideos.dances.map((_, i) => (
              <div key={`dance-${i}`} className="h-32 bg-gray-800 rounded flex items-center justify-center text-white text-sm">
                [Video Danza {i+1}]
              </div>
            ))}
            {data.miniVideos.festivals.map((_, i) => (
              <div key={`fest-${i}`} className="h-32 bg-gray-800 rounded flex items-center justify-center text-white text-sm">
                [Video Fiesta {i+1}]
              </div>
            ))}
            {data.miniVideos.music.map((_, i) => (
              <div key={`music-${i}`} className="h-32 bg-gray-800 rounded flex items-center justify-center text-white text-sm">
                [Video Música {i+1}]
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
