import "./Destinations.scss";

function Destinations(props) {

	let background = {
		backgroundImage : `url('images/destinations/${props.place.image}')`
	}

  return (
	<div className="destination-item" style={background}>
		<div className="destination-info">
			<p className='destination-place'>{props.place.name}</p>
			<p className='destination-country'>{props.place.country}</p>
		</div>
	</div>
  )
}

export default Destinations