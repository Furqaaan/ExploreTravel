import "./Story.css"

function Story(props) {
  return (
	<div className="trending-story-item">
		<img src={`images/trending/${props.story.image}`} alt='trending stories' />
		<h4>{props.story.title}</h4>
		<p>{props.story.description}</p>
		<a href="#">Read more</a>
	</div>
  )
}

export default Story