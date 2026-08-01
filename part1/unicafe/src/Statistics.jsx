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
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={ good }/>
          <StatisticLine text="neutral" value={ neutral }/>
          <StatisticLine text="bad" value={ bad }/>
          <StatisticLine text="total" value={ total }/>
          <StatisticLine text="average" value={ average }/>
          <StatisticLine text="percentPositive" value={ `${ percentPositive }%` }/>
        </tbody>
      </table>
    </>
  )
}

export default Statistics