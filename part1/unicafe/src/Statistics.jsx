import StatisticLine from "./StatisticLine"

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  average,
  percentPositive
}) => {
  if (!total) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={ good }/>
      <StatisticLine text="neutral" value={ neutral }/>
      <StatisticLine text="bad" value={ bad }/>
      <StatisticLine text="total" value={ total }/>
      <StatisticLine text="average" value={ average }/>
      <StatisticLine text="percentPositive" value={ percentPositive }/>
    </div>
  )
}

export default Statistics