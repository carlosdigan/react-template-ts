import { useEffect, useState } from "react"
import styled from "styled-components"
import { ExpenseRow, Expenses } from "./ExpenseRow"

function ExpensesTable() {
  const [expenses, setExpenses] = useState<Expenses>([])

  useEffect(() => {
    const getExpensesData = async () => {
      const response = await fetch("https://expenses-backend-mu.vercel.app/expenses", {
        headers: {
          "Content-Type": "application/json",
          Username: "carlos.digan",
        },
      })

      const expensesData = (await response.json()) as Expenses
      setExpenses(expensesData)
    }
    getExpensesData()
  }, [])

  return (
    <StyledExpensesTable>
      <div className="grid-header">Date</div>
      <div className="grid-header">Merchant</div>
      <div className="grid-header">Amount</div>
      <div className="grid-header">Category</div>
      <div className="grid-header">Description</div>
      <div className="grid-header">Status</div>
      {expenses.map((expense) => (
        <ExpenseRow key={expense.id} expense={expense} />
      ))}
    </StyledExpensesTable>
  )
}

const StyledExpensesTable = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;

  .grid-header {
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 5px;
  }
`
export { ExpensesTable }
