import './HeroSection.scss';

export default function HeroSection() {
  return (
	<div className="hero-section">
		<div className="hero-content">
			<div className="hero-title">
				<h1 className="hero-title-content">Explore and <br/>Travel</h1>
			</div>
			<div className="hero-form-title">
				<h4 className="hero-form-title-content">Holiday finder</h4>
				<div className="rectangle-bar"></div>
			</div>
			<div className="hero-form">
				<select className="hero-form-selection location-input">
					<option value="">Location </option>
				</select>
				<select className="hero-form-selection activity-input">
					<option value="">Activity </option>
				</select>
				<select className="hero-form-selection grade-input">
					<option value="">Grade </option>
				</select>
				<select className="hero-form-selection date-input">
					<option value="">Date </option>
				</select>
			</div>
			<div className="hero-btn">
				<a className="hero-btn-link" href="#">Explore</a>
			</div>
		</div>
		<div className="hero-image">
			<img className="hero-image-item" src="images/hero-image.jpg" alt="hero image" />
		</div>
	</div>
  )
}
