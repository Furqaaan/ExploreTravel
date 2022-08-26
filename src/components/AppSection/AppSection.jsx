import "./AppSection.scss";

function AppSection() {
  return (
	<div className="app-section">
		<div className="app-section-content">
			<div className="app-section-title">
				  <h3 className="app-section-title-content">Guides by Thousand<br/>Sunny</h3>
			</div>
			<div className="app-section-description">
				<p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
			</div>
			<div className="app-section-btn">
				<a className="app-section-btn-link" href="#">Download</a>
			</div>
		</div>
		<div className="app-section-image">
			<img src='images/download-app.png' alt="Download app"/>
		</div>
	</div>
  )
}

export default AppSection