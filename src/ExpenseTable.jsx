import React from "react";
import Table from "react-bootstrap/Table";
import ExpenseRow from "./ExpenseRow";
import "./App.css";

export default function ExpenseTable(props) {
	const expenseElements = Object.values(props.expenses).map((expense) => {
		return (
			<ExpenseRow
				key={expense.id}
				date={expense.date}
				amount={expense.amount}
				type={expense.type}
				description={expense.description}
				deleteExpense={() => props.handleDelete(expense.id)}
			/>
		);
	});
	return (
		<Table className="expense-table" striped hover>
			<thead>
				<tr>
					<th width="20%">Date</th>
					<th width="20%">Amount</th>
					<th width="20%">Type</th>
					<th width="35%">Description</th>
					<th width="5%"> </th>
				</tr>
			</thead>
			<tbody>{expenseElements}</tbody>
		</Table>
	);
}
