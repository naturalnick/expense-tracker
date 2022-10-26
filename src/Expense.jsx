import React from "react";

export default function Expense(props) {
	return (
		<tr className="expTable">
			<td width="20%">{props.date}</td>
			<td width="20%">{props.amount}</td>
			<td width="20%">{props.type}</td>
			<td width="35%">{props.description}</td>
			<td width="5%">
				<button className="delete-button" onClick={props.deleteExpense}>
					X
				</button>
			</td>
		</tr>
	);
}
