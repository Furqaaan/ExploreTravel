import "./FeaturedDestinations.css"
import Destinations from '../Destinations/Destinations';

function FeaturedDestinations() {

	let destinations = [
		{
			name: "Raha Ampat",
			country: "Indonesia",
			image: "raja-ampat.png"
		},
		{
			name: "Fanjingshan",
			country: "China",
			image: "fanjingshan.png"
		},
		{
			name: "Vevey",
			country: "Switzerland",
			image: "vevey.png"
		},
		{
			name: "Skadar",
			country: "Montenegro",
			image: "skadar.png"
		}
	];

	let featuredDestinations = destinations.map((item,index) => {
		return <Destinations place={item} />;
	});

  return (
	<div className="featured-section">
		<div className="featured-section-header">
			<h3 className="featured-section-header-content">Featured destinatons</h3>
			<a className="featured-section-header-link" href="#">View all &gt;</a>
		</div>
		<div className="featured-section-gallery">
			{featuredDestinations}
		</div>
	</div>
  )
}

export default FeaturedDestinations