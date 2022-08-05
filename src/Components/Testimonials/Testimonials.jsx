import "./Testimonials.css"

function Testimonials() {

	let ratings = [];	
	let startRatings = () => {
	for (let i = 0; i < 5; i++)
		ratings.push(<img src="images/star.png" />);
	}

	startRatings();

	return (
	<div className="testimonials-container">
		<h3>Testimonials</h3>
		<div className="testimonials-wrapper">
			<div className="testimonials-content">
				<div className="testimonials-ratings">
					{ratings}
				</div>
				<div className="testionials-description">
					<p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
				</div>
				<div className="testimonials-author">
					<p className="author-name">Edward Newgate</p>
					<p className="author-company">Founder Circle</p>
				</div>
			</div>
			<div className="testimonials-author-image">
				<img src="images/testimonials.png" alt="testimonials author"/>
			</div>
		</div>
	</div>
	)
}

export default Testimonials