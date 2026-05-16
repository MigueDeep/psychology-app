import { RegionsCardsData } from '@data/home'
import { useNavigate } from 'react-router-dom'

export const RegionsCards = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center flex-col">
      {RegionsCardsData.map((region, index) => (
        <div
          key={index}
          className={`p-6 md:p-8 m-2 rounded-xl cursor-pointer border border-blue-100 bg-white shadow-sm transition-colors duration-300 hover:text-white ${region.hoverColor}`}
          onClick={() => navigate(region.navigateTo)}
        >
          <h3 className="text-xl md:text-2xl font-bold">{region.name}</h3>
        </div>
      ))}
    </div>
  )
}