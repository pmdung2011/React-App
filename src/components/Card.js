import './Card.css'

function Card(props) {
  const classes = 'card ' + props.className //must have a space after card,
  //In normal HTML we would also have to separate the classes by a space:
  //<div class="myclass1 myclass2">
  return <div className={classes}>{props.children}</div>
  //Using prosp.children here to make the contents work with custom wrapper component - Card
}

export default Card
