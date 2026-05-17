import React from 'react'
import { ZoomableImage } from '../ui/ZoomableImage'

interface Block2InfoProps {
  data: {
    culture: { traditions: string[]; clothing: string; music: string; customs: string; images: string[]; videos: string[] }
    gastronomy: { dishes: string[]; ingredients: string[]; images: string[]; videos: string[] }
    languages: { peoples: string[]; languages: string[]; facts: string[]; images: string[]; videos: string[] }
    economy: { text: string; images: string[]; videos: string[] }
  }
}

export const Block2Info: React.FC<Block2InfoProps> = ({ data }) => {
  return (
    <div className="flex flex-col space-y-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#020042] mb-2">BLOQUE 2 — “Conoce la Región”</h2>
      </div>

      {/* A) Cultura */}
      <section className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold text-2xl text-[#307ffe] mb-4 border-b border-gray-100 pb-2">
          A) Cultura
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 text-gray-700">
            <div><strong className="text-[#020042]">Tradiciones:</strong> {data.culture.traditions.join(', ') || 'N/A'}</div>
            <div><strong className="text-[#020042]">Vestimenta:</strong> {data.culture.clothing || 'N/A'}</div>
            <div><strong className="text-[#020042]">Música:</strong> {data.culture.music || 'N/A'}</div>
            <div><strong className="text-[#020042]">Costumbres:</strong> {data.culture.customs || 'N/A'}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {data.culture.images.map((src, i) => (
              <ZoomableImage key={`cult-img-${i}`} src={src} className="h-32 w-full rounded shadow-sm" placeholderText={`[Imagen Cultura ${i+1}]`} />
            ))}
            {data.culture.videos.map((src, i) => (
              <div key={`cult-vid-${i}`} className="h-32 w-full bg-gray-900 rounded flex items-center justify-center overflow-hidden relative shadow-sm">
                {src ? (
                  <video src={src} controls className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-white">[Video Cultura {i+1}]</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B) Gastronomía */}
      <section className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold text-2xl text-[#307ffe] mb-4 border-b border-gray-100 pb-2">
          B) Gastronomía
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 text-gray-700">
            <div><strong className="text-[#020042]">Platillos típicos:</strong> {data.gastronomy.dishes.join(', ') || 'N/A'}</div>
            <div><strong className="text-[#020042]">Ingredientes principales:</strong> {data.gastronomy.ingredients.join(', ') || 'N/A'}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {data.gastronomy.images.map((src, i) => (
              <ZoomableImage key={`gas-img-${i}`} src={src} className="h-32 w-full rounded shadow-sm" placeholderText={`[Imagen Comida ${i+1}]`} />
            ))}
            {data.gastronomy.videos.map((src, i) => (
              <div key={`gas-vid-${i}`} className="h-32 w-full bg-gray-900 rounded flex items-center justify-center overflow-hidden relative shadow-sm">
                {src ? (
                  <video src={src} controls className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-white">[Prep. Comida {i+1}]</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C) Lenguas y pueblos */}
      <section className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold text-2xl text-[#307ffe] mb-4 border-b border-gray-100 pb-2">
          C) Lenguas y pueblos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 text-gray-700">
            <div><strong className="text-[#020042]">Pueblos originarios:</strong> {data.languages.peoples.join(', ') || 'N/A'}</div>
            <div><strong className="text-[#020042]">Lenguas indígenas:</strong> {data.languages.languages.join(', ') || 'N/A'}</div>
            <div><strong className="text-[#020042]">Datos curiosos:</strong> {data.languages.facts.join('. ') || 'N/A'}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {data.languages.images.map((src, i) => (
              <ZoomableImage key={`lang-img-${i}`} src={src} className="h-32 w-full rounded shadow-sm" placeholderText={`[Imagen Pueblos ${i+1}]`} />
            ))}
            {data.languages.videos.map((src, i) => (
              <div key={`lang-vid-${i}`} className="h-32 w-full bg-gray-900 rounded flex items-center justify-center overflow-hidden relative shadow-sm">
                {src ? (
                  <video src={src} controls className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-white">[Video Pueblos {i+1}]</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D) Economía */}
      <section className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold text-2xl text-[#307ffe] mb-4 border-b border-gray-100 pb-2">
          D) Economía actual
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-gray-700 leading-relaxed">
            {data.economy.text || 'N/A'}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {data.economy.images.map((src, i) => (
              <ZoomableImage key={`eco-img-${i}`} src={src} className="h-32 w-full rounded shadow-sm" placeholderText={`[Imagen Economía ${i+1}]`} />
            ))}
            {data.economy.videos.map((src, i) => (
              <div key={`eco-vid-${i}`} className="h-32 w-full bg-gray-900 rounded flex items-center justify-center overflow-hidden relative shadow-sm">
                {src ? (
                  <video src={src} controls className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-white">[Video Economía {i+1}]</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
