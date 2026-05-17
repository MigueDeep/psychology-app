import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Block1Intro } from '../components/region/Block1Intro'
import { Block2Info } from '../components/region/Block2Info'
import { Block3Multimedia } from '../components/region/Block3Multimedia'
import { Block4Quiz } from '../components/region/Block4Quiz'
import { regionsData } from '../data/regions/regionsData'

export function RegionPage() {
  const { name } = useParams<{ name: string }>()
  const navigate = useNavigate()
  
  const regionName = name?.toLowerCase() || ''
  const regionData = regionsData[regionName as keyof typeof regionsData]

  const [currentBlock, setCurrentBlock] = useState<number>(1)

  useEffect(() => {
    if (regionName) {
      const savedBlock = localStorage.getItem(`region-${regionName}-progress`)
      if (savedBlock) {
        setCurrentBlock(parseInt(savedBlock, 10))
      } else {
        setCurrentBlock(1)
      }
    }
  }, [regionName])

  // Nos aseguramos que al montar el componente (y al entrar a una nueva región) la página scrollee hasta arriba.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [regionName, currentBlock])

  const saveProgress = (blockNumber: number) => {
    if (regionName) {
      localStorage.setItem(`region-${regionName}-progress`, blockNumber.toString())
    }
  }

  const handleNext = () => {
    if (currentBlock < 4) {
      const nextBlock = currentBlock + 1
      setCurrentBlock(nextBlock)
      saveProgress(nextBlock)
    }
    if (currentBlock === 4) {
      console.log(`Usuario finalizó la región ${regionName}`)
      // Si el usuario finaliza el bloque 4, podemos limpiar su progreso para esa región
      localStorage.removeItem(`region-${regionName}-progress`)
      navigate('/')
    }
  }

  const handlePrev = () => {
    if (currentBlock > 1) {
      const prevBlock = currentBlock - 1
      setCurrentBlock(prevBlock)
      saveProgress(prevBlock)
    }
  }

  if (!regionData) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Región no encontrada</h2>
        <button onClick={() => navigate('/')} className="bg-[#020042] text-white px-4 py-2 rounded">
          Volver al Inicio
        </button>
      </div>
    )
  }

  const progressPercentage = (currentBlock / 4) * 100

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Cover Section */}
      <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-8 shadow-md">
        {/* Background Image */}
        {regionData.block1.landscapes?.[0] ? (
          <img 
            src={regionData.block1.landscapes[0] as string} 
            alt={`Región ${name}`} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-[#020042]"></div>
        )}
        
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30"></div>

        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 z-10 p-2 text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transition-all flex items-center justify-center"
          title="Regresar al inicio"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        {/* Cover Content (Title and Progress) */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 capitalize drop-shadow-md">
            Región {name}
          </h1>

          {/* Progress Bar */}
          <div className="w-full bg-white/30 rounded-full h-2.5 backdrop-blur-sm">
            <div 
              className="bg-[#307ffe] h-2.5 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(48,127,254,0.5)]" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Blocks */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[400px]">
        {currentBlock === 1 && <Block1Intro data={regionData.block1} />}
        {currentBlock === 2 && <Block2Info data={regionData.block2} />}
        {currentBlock === 3 && <Block3Multimedia data={regionData.block3} />}
        {currentBlock === 4 && <Block4Quiz data={regionData.block4} />}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrev}
          disabled={currentBlock === 1}
          className={`px-6 py-2 rounded font-semibold ${
            currentBlock === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#020042] text-white hover:bg-[#030066] transition-colors'
          }`}
        >
          Anterior
        </button>
        <span className="text-gray-500 font-medium">
          Paso {currentBlock} de 4
        </span>
        <button
          onClick={handleNext}
          className="px-6 py-2 rounded font-semibold bg-[#307ffe] text-white hover:bg-[#2068e2] transition-colors"
        >
          {currentBlock === 4 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  )
}
