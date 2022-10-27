import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

export default function Expense(props) {
	return (
		<tr className="expense-row">
			<td>{props.date}</td>
			<td>{props.amount}</td>
			<td>{props.type}</td>
			<td>{props.description}</td>
			<td>
				<Button variant="danger" onClick={props.deleteExpense}>
					X
				</Button>
			</td>
		</tr>
	);
}
