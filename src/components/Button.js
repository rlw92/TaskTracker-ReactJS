

function Button(props) {


  return (
    <button className="btn" onClick={props.onClick} style={{backgroundColor:props.color}}>{props.title}</button>
  )

}

Button.defaultProps = {
  color: "steelblue"
}

export default Button