function ExpenseDate(props) {
  const month = props.dateInfo.toLocaleString("en-US", { month: "long" });
  const day = props.dateInfo.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dateInfo.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
