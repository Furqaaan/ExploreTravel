import './App.scss'
import LearnMoreSection from './components/LearnMoreSection/LearnMoreSection';
import Header from './components/Header/Header';
import FeaturedDestinations from './components/FeaturedDestinations/FeaturedDestinations'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  return (
    <div className="app">  
    <Header/>
		<HeroSection/>
    <LearnMoreSection/>
		<FeaturedDestinations/>
    </div>
  )
}

export default App
