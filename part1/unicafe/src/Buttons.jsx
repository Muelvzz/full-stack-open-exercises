import Button from "./Button"

const Buttons = ({
  handleGood,
  handleNeutral,
  handleBad
}) => {
  return (
    <div>
      <Button handleClick={ handleGood } feedback="Good"/>
      <Button handleClick={ handleNeutral } feedback="Neutral"/>
      <Button handleClick={ handleBad } feedback="Bad"/>
    </div>
  )
}

export default Buttons