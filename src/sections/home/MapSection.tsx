
import { RegionsCards } from '@components/map/RegionsCards';
import MexicoMap from '../../assets/map-mx.png';

export const MapSection = () => {
  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sma mt-8">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">Descubre nuestras actividades</h2>
        <p className="mt-4 text-lg text-gray-600">Descubre la belleza de México con nuestro mapa interactivo. Haz clic en las diferentes regiones y conocer sus culturas únicas, puntos de interés y atractivos.</p>
        <div className="mt-6 flex justify-between md:items-center md:flex-row flex-col gap-4">
          <div className="flex justify-center">
            <img src={MexicoMap} alt="Interactive Map of Mexico" className="w-[50rem] rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"/>
        </div>
        <RegionsCards />

        </div>
    </section>
    )
}
