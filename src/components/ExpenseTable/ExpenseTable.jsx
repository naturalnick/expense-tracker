import React from "react";
import Table from "react-bootstrap/Table";
import ExpenseRow from "../ExpenseRow/ExpenseRow";
import "./ExpenseTable.css";

export default function ExpenseTable({ expenses, handleDelete }) {
	const expenseElements =
		expenses.length === 0 ? (
			<tr>
				<td colSpan="5">Enter an expense above...</td>
			</tr>
		) : (
			Object.values(expenses).map((expense) => {
				return (
					<ExpenseRow
						key={expense.id}
						{...expense}
						deleteExpense={() => handleDelete(expense.id)}
					/>
				);
			})
		);
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
