import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const changeFilterHandler = (enteredyear) => {
    setFilteredYear(enteredyear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear = {filteredYear} onChangeFilter={changeFilterHandler} />
        <ExpenseItem
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          date={props.items[3].date}
          title={props.items[3].title}
          amount={props.items[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
