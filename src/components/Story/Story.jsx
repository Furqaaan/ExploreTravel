import "./Story.scss"

function Story(props) {
  return (
	<div className="trending-story-item">
		<img className="trending-story-image" src={`images/trending/${props.story.image}`} alt='trending stories' />
		<h4 className="trending-story-title">{props.story.title}</h4>
		<p className="trending-story-content">{props.story.description}</p>
		<a className="trending-story-read-more" href="#">Read more</a>
	</div>
  )
}

export default Story