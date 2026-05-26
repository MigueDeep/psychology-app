import React from 'react'
import { ZoomableImage } from '../ui/ZoomableImage'

interface Block2InfoProps {
  data: {
    culture: { description: string; traditions: string[]; clothing: string; music: string[]; customs: string[]; images: string[]; videos: string[] }
    gastronomy: { description: string; dishes: string[]; ingredients: string[]; images: string[]; videos: string[] }
    languages: { description: string; peoples: string[]; languages: string[]; facts: string[]; images: string[]; videos: string[] }
    economy: { description: string; activities: string[]; images: string[]; videos: string[] }
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
        <p className="text-gray-700 leading-relaxed mb-6">
          {data.culture.description}
        </p>

        <div className="flex flex-col gap-8">
          {/* 1. Contenido */}
          <div className="space-y-4 text-gray-700">
            <div><strong className="text-[#020042]">Tradiciones:</strong>
              <ul className="list-disc list-inside mt-2">
                {data.culture.traditions.map((tradition, i) => (
                  <li key={`trad-${i}`} className="text-gray-700">{tradition}</li>
                ))}
              </ul>
            </div>
            <div><strong className="text-[#020042]">Vestimenta:</strong> {data.culture.clothing || 'N/A'}</div>
            <div><strong className="text-[#020042]">Música:</strong>
              <ul className="list-disc list-inside mt-2">
                {data.culture.music.map((item, i) => (
                  <li key={`music-${i}`} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            <div><strong className="text-[#020042]">Costumbres:</strong>
              <ul className="list-disc list-inside mt-2">
                {data.culture.customs.map((custom, i) => (
                  <li key={`custom-${i}`} className="text-gray-700">{custom}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Fotos */}
          {data.culture.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.culture.images.map((src, i) => (
                <ZoomableImage key={`cult-img-${i}`} src={src} className="h-48 w-full object-cover rounded shadow-sm" placeholderText={`[Imagen Cultura ${i + 1}]`} />
              ))}
            </div>
          )}

          {/* 3. Video */}
          {data.culture.videos.length > 0 && (
            <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-sm relative">
              {data.culture.videos[0] ? (
                <iframe
                  className="w-full h-full absolute top-0 left-0"
                  src={data.culture.videos[0]}
                  title="Video Cultura"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-sm text-white">[Video Cultura]</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* B) Gastronomía */}
      <section className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold text-2xl text-[#307ffe] mb-4 border-b border-gray-100 pb-2">
          B) Gastronomía
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          {data.gastronomy.description}
        </p>
        <div className="flex flex-col gap-8">
          {/* 1. Contenido */}
          <div className="space-y-4 text-gray-700">
            <div><strong className="text-[#020042]">Platillos típicos:</strong> {data.gastronomy.dishes.join(', ') || 'N/A'}</div>
            <div><strong className="text-[#020042]">Ingredientes principales:</strong> {data.gastronomy.ingredients.join(', ') || 'N/A'}</div>
          </div>

          {/* 2. Fotos */}
          {data.gastronomy.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.gastronomy.images.map((src, i) => (
                <ZoomableImage key={`gas-img-${i}`} src={src} className="h-48 w-full object-cover rounded shadow-sm" placeholderText={`[Imagen Comida ${i + 1}]`} />
              ))}
            </div>
          )}

          {/* 3. Video */}
          {data.gastronomy.videos.length > 0 && (
            <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-sm relative">
              {data.gastronomy.videos[0] ? (
                <iframe
                  className="w-full h-full absolute top-0 left-0"
                  src={data.gastronomy.videos[0]}
                  title="Video Gastronomía"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-sm text-white">[Prep. Comida]</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* C) Lenguas y pueblos */}
      <section className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold text-2xl text-[#307ffe] mb-4 border-b border-gray-100 pb-2">
          C) Lenguas y pueblos
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          {data.languages.description}
        </p>
        <div className="flex flex-col gap-8">
          {/* 1. Contenido */}
          <div className="space-y-4 text-gray-700">
            <div><strong className="text-[#020042]">Pueblos originarios:</strong>
              <ul className="list-disc list-inside mt-2">
                {data.languages.peoples.map((people, i) => (
                  <li key={`people-${i}`} className="text-gray-700">{people}</li>
                ))}
              </ul>
            </div>
            <div><strong className="text-[#020042]">Lenguas indígenas:</strong> {data.languages.languages.join(', ') || 'N/A'}</div>
            <div><strong className="text-[#020042]">Datos curiosos:</strong> {data.languages.facts.join('. ') || 'N/A'}</div>
          </div>

          {/* 2. Fotos */}
          {data.languages.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.languages.images.map((src, i) => (
                <ZoomableImage key={`lang-img-${i}`} src={src} className="h-48 w-full object-cover rounded shadow-sm" placeholderText={`[Imagen Pueblos ${i + 1}]`} />
              ))}
            </div>
          )}

          {/* 3. Video */}
          {data.languages.videos.length > 0 && (
            <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-sm relative">
              {data.languages.videos[0] ? (
                <iframe
                  className="w-full h-full absolute top-0 left-0"
                  src={data.languages.videos[0]}
                  title="Video Lenguas y Pueblos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-sm text-white">[Video Pueblos]</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* D) Economía */}
      <section className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h3 className="font-bold text-2xl text-[#307ffe] mb-4 border-b border-gray-100 pb-2">
          D) Economía actual
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          {data.economy.description}
        </p>

        <div><strong className="text-[#020042]">Actividades económicas:</strong>
          <ul className="list-disc list-inside mt-2">
            {data.economy.activities.map((activity, i) => (
              <li key={`activity-${i}`} className="text-gray-700">{activity}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8 mt-3">

          {/* 2. Fotos */}
          {data.economy.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.economy.images.map((src, i) => (
                <ZoomableImage key={`eco-img-${i}`} src={src} className="h-48 w-full object-cover rounded shadow-sm" placeholderText={`[Imagen Economía ${i + 1}]`} />
              ))}
            </div>
          )}

          {/* 3. Video */}
          {data.economy.videos.length > 0 && (
            <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-sm relative">
              {data.economy.videos[0] ? (
                <iframe
                  className="w-full h-full absolute top-0 left-0"
                  src={data.economy.videos[0]}
                  title="Video Economía"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-sm text-white">[Video Economía]</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
