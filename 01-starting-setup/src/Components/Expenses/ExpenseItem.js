import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    props.title = "updated!";
  }
  return (
    <Card className="expense-item">
      <ExpenseDate dateInfo = {props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click Me</button>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;
