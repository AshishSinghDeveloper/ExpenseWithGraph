import {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css"

const NewExpense = (props) => {
  const [formedit, setFormEdit] = useState(false);
  const saveExpenseDataHandler = (ExpenseData) => {
    const enteredExpenseData = {
      ...ExpenseData,
      id: Math.random().toString(),
    }
    props.onAddNewExpense(enteredExpenseData);
    setFormEdit(false);
  }
  const startEditHandler = () => {
    setFormEdit(true);
  }
  const stopEditHandler = () => {
    setFormEdit(false);
  }
  return (
    <div className="new-expense">
      {!formedit && <button onClick={startEditHandler}>Add New Expense</button>} 
      {formedit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditHandler} />}
    </div>
  )
}

export default NewExpense;