import React from "react";
import Button from "react-bootstrap/Button";
import "./ExpenseRow.css";

export default function ExpenseRow({
	date,
	amount,
	type,
	desc,
	deleteExpense,
}) {
	return (
		<tr className="expense-row">
			<td className="date">{date}</td>
			<td className="amount">{`$ ${amount}`}</td>
			<td>{type}</td>
			<td>{desc}</td>
			<td className="delete">
				<Button variant="danger" onClick={deleteExpense}>
					X
				</Button>
			</td>
		</tr>
	);
}
