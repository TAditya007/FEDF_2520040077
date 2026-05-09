import { useState } from 'react'
import MatrixInput from './MatrixInput'
import Result from './Result'

export default function App() {
  const [rows, setRows] = useState(2)
  const [cols, setCols] = useState(2)
  const [matrixA, setMatrixA] = useState([[0,0],[0,0]])
  const [matrixB, setMatrixB] = useState([[0,0],[0,0]])
  const [result, setResult] = useState(null)

  const handleSizeChange = () => {
    const newA = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    )
    const newB = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    )
    setMatrixA(newA)
    setMatrixB(newB)
    setResult(null)
  }

  const handleSum = () => {
    const sum = matrixA.map((row, i) =>
      row.map((val, j) => val + matrixB[i][j])
    )
    setResult(sum)
  }

  return (
    <div className="container">
      <h1>Matrix Addition</h1>

      <div className="size-inputs">
        <label>
          Rows:
          <input
            type="number"
            min="1"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
          />
        </label>
        <label>
          Columns:
          <input
            type="number"
            min="1"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
          />
        </label>
        <button onClick={handleSizeChange}>Set Size</button>
      </div>

      <div className="matrices">
        <MatrixInput label="Matrix A" matrix={matrixA} setMatrix={setMatrixA} />
        <MatrixInput label="Matrix B" matrix={matrixB} setMatrix={setMatrixB} />
      </div>

      <button onClick={handleSum}>Add Matrices</button>
      {result && <Result matrix={result} />}
    </div>
  )
}
