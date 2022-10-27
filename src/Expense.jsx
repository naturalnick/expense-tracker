import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

export default function Expense(props) {
	return (
		<tr className="expTable">
			<td width="20%">{props.date}</td>
			<td width="20%">{props.amount}</td>
			<td width="20%">{props.type}</td>
			<td width="35%">{props.description}</td>
			<td width="5%">
				<Button
					variant="danger"
					className="delete-button"
					onClick={props.deleteExpense}
				>
					X
				</Button>
			</td>
		</tr>
	);
}
