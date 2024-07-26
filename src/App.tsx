import styled from "styled-components"
import { ExpensesTable } from "./ExpensesTable"

function App() {
  return (
    <StyledApp>
      <h1 id="expenses-header">Expenses</h1>
      <ExpensesTable />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  margin: auto;

  #expenses-header {
    border-bottom: 1px solid black;
    width: 100%;
    font-size: 3rem;
    padding-left: 20px;
  }
`
export default App
