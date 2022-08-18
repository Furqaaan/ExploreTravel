import "./Trending.css"
import Story from "../Story/Story";

function Trending() {

	let trending = [
		{
			title: "The many benefits of taking a healing holiday",
			description: "‘Helaing holidays’ are on the rise to help maximise your health and happines...",
			image: "holidays.png"
		},
		{
			title: "The best Kyoto restaurant to try Japanese food",
			description: "From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...",
			image: "food.png"
		},
		{
			title: "Skip Chichen Itza and head to this remote Yucatan",
			description: "It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...",
			image: "explore.png"
		},
		{
			title: "Surf’s up at these beginner spots around the world",
			description: "If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...",
			image: "surf.png"
		},
	];

	let trendingSection = trending.map((item, index) => {
		return <Story story={item} />;
	});

	return (
	<div className="trending-container">
		<div className="trending-section-header">
			<h3 className="trending-section-heading">Trending stories</h3>
			<a className="trending-container-link" href="#">View all &gt;</a>
		</div>
		<div className="trending-section-gallery">
			{trendingSection}
		</div>
	</div>
	)
}

export default Trending