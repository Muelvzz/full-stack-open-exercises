const Button = ({
  handleClick,
  feedback
}) => {
  return (
    <button onClick={ handleClick }>{ feedback }</button>
  )
}

export default Button