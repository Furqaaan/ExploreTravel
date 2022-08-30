import "./Header.scss";

function Header() {
	return (
		<div className="header-container">
			<img src="images/logo.png" alt="explore travel logo" />
			<ul className="header-container-list">
				<li className="active"><a className="header-container-links" href="#">Home</a></li>
				<li><a className="header-container-links" href="#">Destinations</a></li>
				<li><a className="header-container-links" href="#">About</a></li>
				<li><a className="header-container-links" href="#">Partner</a></li>
				<li className='secondary-btn'><a className='btn-link' href="#">Login</a></li>
				<li className='primary-btn'><a className='btn-link' href="#">Register</a></li>
			</ul>
		</div>
	);
}

export default Header;