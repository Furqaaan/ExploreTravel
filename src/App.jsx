import './App.scss'
import FeaturedDestinations from './components/FeaturedDestinations/FeaturedDestinations'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  return (
    <div className="app">
		<HeroSection/>
		<FeaturedDestinations/>
    </div>
  )
}

export default App
