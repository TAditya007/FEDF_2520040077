
export default function MatrixInput({ label, matrix, setMatrix }) {
  const handleChange = (i, j, value) => {
    const newMatrix = matrix.map((row, rowIndex) =>
      row.map((col, colIndex) =>
        rowIndex === i && colIndex === j ? Number(value) : col
      )
    )
    setMatrix(newMatrix)
  }

  return (
    <div className="matrix">
      <h2>{label}</h2>
      {matrix.map((row, i) => (
        <div key={i} className="row">
          {row.map((val, j) => (
            <input
              key={j}
              type="number"
              value={val}
              onChange={(e) => handleChange(i, j, e.target.value)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
