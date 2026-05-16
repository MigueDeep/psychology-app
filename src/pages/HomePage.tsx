import { FeatureGrid } from '../sections/home/FeatureGrid'
import { HeroSection } from '../sections/home/HeroSection'
import { MapSection } from '../sections/home/MapSection'

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeatureGrid />
      <MapSection />
    </div>
  )
}
