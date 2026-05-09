
export default function Result({ matrix }) {
  return (
    <div className="result">
      <h2>Result</h2>
      {matrix.map((row, i) => (
        <div key={i} className="row">
          {row.map((val, j) => (
            <span key={j} className="cell">{val}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
