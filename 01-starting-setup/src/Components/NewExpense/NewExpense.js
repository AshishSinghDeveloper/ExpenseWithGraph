import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css"

const NewExpense = (props) => {
  const saveExpenseDataHandler = (ExpenseData) => {
    const enteredExpenseData = {
      ...ExpenseData,
      id: Math.random().toString()
    }
    props.onAddNewExpense(enteredExpenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData= {saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;