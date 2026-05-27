import { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader'

const assessmentQuestions = [
  "Comprendí mejor la diversidad cultural de México.",
  "Las actividades fueron interesantes y dinámicas.",
  "Identifiqué características del norte, centro y sur del país.",
  "La información fue clara y fácil de entender.",
  "Aprendí nuevas tradiciones y costumbres mexicanas.",
  "Los juegos y actividades facilitaron mi aprendizaje.",
  "La plataforma aumentó mi interés por conocer más sobre México.",
  "Considero importante valorar la diversidad cultural del país."
];

export function SelfAssessmentPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleChange = (questionIndex: number, value: string) => {
    setAnswers({ ...answers, [questionIndex]: value });
  };

  const isComplete = Object.keys(answers).length === assessmentQuestions.length;

  return (
    <div>
      <PageHeader
        title="Autoevaluación"
        description="Lee cada afirmación y marca la opción que mejor represente tu experiencia dentro de la plataforma."
      />
      <section className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-primary/20 text-primary">
              <th className="py-4 px-4 font-heading text-lg w-1/2">Aspecto para evaluar</th>
              <th className="py-4 px-4 font-heading text-lg text-center w-1/6">Sí</th>
              <th className="py-4 px-4 font-heading text-lg text-center w-1/6">Poco</th>
              <th className="py-4 px-4 font-heading text-lg text-center w-1/6">No</th>
            </tr>
          </thead>
          <tbody>
            {assessmentQuestions.map((question, index) => (
              <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 text-slate-700">{question}</td>
                {['Sí', 'Poco', 'No'].map((option) => (
                  <td key={option} className="py-4 px-4 text-center cursor-pointer" onClick={() => handleChange(index, option)}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleChange(index, option)}
                      className="w-5 h-5 text-primary focus:ring-primary border-gray-300 cursor-pointer"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 flex justify-end">
          <button 
            disabled={!isComplete}
            onClick={() => alert("¡Gracias por tu autoevaluación!")}
            className={`rounded px-8 py-3 font-semibold text-white transition-colors ${
              isComplete ? 'bg-primary hover:bg-blue-800' : 'bg-slate-300 cursor-not-allowed'
            }`}
          >
            Enviar Respuestas
          </button>
        </div>
      </section>
    </div>
  )
}

