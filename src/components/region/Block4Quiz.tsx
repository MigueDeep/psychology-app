import React, { useState } from 'react'

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

interface Block4QuizProps {
  data: {
    questions: Question[]
  }
}

export const Block4Quiz: React.FC<Block4QuizProps> = ({ data }) => {
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleOptionClick = (index: number) => {
    if (showResult) return
    setSelectedOption(index)
    setShowResult(true)
    
    if (index === data.questions[currentQ].correctAnswer) {
      setScore(s => s + 1)
    }
  }

  const handleNext = () => {
    if (currentQ < data.questions.length - 1) {
      setCurrentQ(c => c + 1)
      setSelectedOption(null)
      setShowResult(false)
    } else {
      setFinished(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQ(0)
    setSelectedOption(null)
    setShowResult(false)
    setScore(0)
    setFinished(false)
  }

  if (data.questions.length === 0) {
    return <div className="text-center p-8 text-gray-500">No hay preguntas configuradas para esta región.</div>
  }

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-blue-50 rounded-xl space-y-4">
        <h3 className="text-2xl font-bold text-[#020042]">¡Completaste el quiz!</h3>
        <p className="text-lg text-gray-700">Tu puntuación: <span className="font-bold text-[#307ffe]">{score}</span> de {data.questions.length}</p>
        <button 
          onClick={restartQuiz}
          className="px-6 py-2 bg-[#020042] text-white rounded hover:bg-[#030066] transition-colors mt-4"
        >
          Reintentar
        </button>
      </div>
    )
  }

  const q = data.questions[currentQ]

  return (
    <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#020042] mb-2">BLOQUE 4 — Actividades y Juegos</h2>
        <p className="text-gray-600">Actividad — “¿Qué tanto sabes?”</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-500">Pregunta {currentQ + 1} de {data.questions.length}</span>
          <span className="text-sm font-semibold text-gray-500">Puntos: {score}</span>
        </div>
        
        <h3 className="text-xl font-medium text-gray-800 mb-6">{q.question}</h3>

        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            let btnClass = "w-full text-left px-4 py-3 rounded-lg border transition-colors duration-200 "
            if (!showResult) {
              btnClass += "border-gray-300 hover:border-[#307ffe] hover:bg-blue-50"
            } else {
              if (idx === q.correctAnswer) {
                btnClass += "bg-green-100 border-green-500 text-green-800"
              } else if (idx === selectedOption) {
                btnClass += "bg-red-100 border-red-500 text-red-800"
              } else {
                btnClass += "border-gray-200 text-gray-400"
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                disabled={showResult}
                className={btnClass}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {showResult && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-[#307ffe] text-white rounded hover:bg-[#2068e2] transition-colors font-medium"
            >
              {currentQ < data.questions.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
