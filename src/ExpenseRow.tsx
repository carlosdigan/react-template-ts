type Expense = {
  id: number
  merchant: string
  amount: number
  description: string
  date: string
  category: "training" | "travel" | "meal"
  status: "string"
}

export type Expenses = Expense[]
type Props = {
  expense: Expense
}

function ExpenseRow({ expense }: Props) {
  return (
    <>
      <div>{formatDate(expense.date)}</div>
      <div>{expense.merchant}</div>
      <div>£{expense.amount}</div>
      <div>{expense.category}</div>
      <div>{expense.description}</div>
      <div>{expense.status}</div>
    </>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { month: "short", day: "2-digit" }
  return new Intl.DateTimeFormat("en-US", options).format(date)
}

export { ExpenseRow }
