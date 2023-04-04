import Header from './components/Header/Header';
import './App.scss';
import FeaturedDestinations from './components/FeaturedDestinations/FeaturedDestinations'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  return (
    <div className="app">
    <Header/>
		<HeroSection/>
		<FeaturedDestinations/>
    </div>
  )
}

export default App
