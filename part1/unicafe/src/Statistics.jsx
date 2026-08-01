const Statistics = ({
  good,
  neutral,
  bad,
  total,
  average,
  percentPositive
}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good: { good }</p>
      <p>neutral: { neutral }</p>
      <p>bad: { bad }</p>
      <p>all: { total }</p>
      <p>average: { average }</p>
      <p>positive: { percentPositive }</p>
    </div>
  )
}

export default Statistics