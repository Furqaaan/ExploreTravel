import "./Footer.css"
import FooterLinks from "./FooterLinks/FooterLinks";

function Footer() {

	let destinations = ["Africa","Antarctica","Asia","Europe","America"];
	let shop = ["Destination Guides", "Pictorial & Gifts", "Special Offers", "Delivery Times", "FAQs"];
	let interests = ["Adventure Travel", "Art And Culture", "Wildlife And Nature", "Family Holidays", "Food And Drink"];

	let destinationLinks = destinations.map((item)=><FooterLinks link={item}/>);
	let shopLinks = shop.map((item) => <FooterLinks link={item} />);
	let interestsLinks = interests.map((item) => <FooterLinks link={item} />);

	return (
		<div className="footer-container">
			<div className="footer-content">
				<img src="images/logo.png" alt="Logo" />
				<p className="description">Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
				<p className="copyright">©2020 Thousand Sunny. All rights reserved</p>
			</div>
			<div className="destination-links">
				<ul>
					<h4>Destinations</h4>
					{destinationLinks}
				</ul>
			</div>
			<div className="shop-links">
				<ul>
					<h4>Shop</h4>
					{shopLinks}
				</ul>
			</div>
			<div className="interests-links">
				<ul>
					<h4>Interests</h4>
					{interestsLinks}
				</ul>
			</div>
		</div>
	)
}

export default Footer