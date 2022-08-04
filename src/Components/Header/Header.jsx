import "./Header.css";

function Header() {
	return (
		<div className="header-container">
			<img src="images/logo.png" alt="explore travel logo" />
			<ul>
				<li className="active"><a href="#">Home</a></li>
				<li><a href="#">Destinations</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Partner</a></li>
				<li className='secondary-btn'><a href="#">Login</a></li>
				<li className='primary-btn'><a href="#">Register</a></li>
			</ul>
		</div>
	);
}

export default Header;