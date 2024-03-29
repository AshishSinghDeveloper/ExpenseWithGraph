import {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummy_expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 4),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses]=useState(dummy_expense);

  const addNewExpenseHandler = enteredData => {
    setExpenses((prevState)=> {
      return[
        enteredData,
        ...prevState        
      ]
    })
  };

  return (    
    <div>
      <NewExpense onAddNewExpense = {addNewExpenseHandler}/>
      <Expenses items={expenses}></Expenses>

    </div>
  );
}

export default App;
