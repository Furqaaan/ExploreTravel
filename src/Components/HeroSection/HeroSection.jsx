import './HeroSection.css';

export default function HeroSection() {
  return (
	<div className="hero-section">
		<div className="hero-content">
			<div className="hero-title">
				<h1>Explore and <br/>Travel</h1>
			</div>
			<div className="hero-form-title">
				<h4>Holiday finder</h4>
				<div className="rectangle-bar"></div>
			</div>
			<div className="hero-form">
				<select className="location-input">
					<option value="">Location </option>
				</select>
				<select className="activity-input">
					<option value="">Activity </option>
				</select>
				<select className="grade-input">
					<option value="">Grade </option>
				</select>
				<select className="date-input">
					<option value="">Date </option>
				</select>
			</div>
			<div className="hero-btn">
				<a href="#">Explore</a>
			</div>
		</div>
		<div className="hero-image">
			<img src="images/hero-image.jpg" alt="hero image" />
		</div>
	</div>
  )
}
