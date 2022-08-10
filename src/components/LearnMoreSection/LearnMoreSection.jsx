import "./LearnMoreSection.css";

function LearnMoreSection() {
	return (
		<div className="learn-more-section">
			<div className="learn-more-image">
				<img className="learn-more-image-item" src="images/learn-more-content.png" alt="Learn more image" />
			</div>
			<div className="learn-more-content">
				<div className="learn-more-title">
					<h2 className="learn-more-title-content">A new way to explore the world</h2>
				</div>
				<div className="learn-more-description">
					<p>
						For decades travelers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way
					</p>
				</div>
				<div className="learn-more-btn">
					<a className="learn-more-btn-link" href="#">Learn more</a>
				</div>
			</div>
		</div>
	)
}

export default LearnMoreSection