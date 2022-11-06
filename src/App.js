import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import "./App.css";

//TODO Fix mobile presentation

function App() {
	const [expenses, setExpenses] = useState(() => {
		const localData = localStorage.getItem("expenses");
		return localData ? JSON.parse(localData) : {};
	});

	function handleSubmit(e, date, amount, type, desc) {
		e.preventDefault();
		let id = new Date().getTime().toString().substring(3); //id for unique key
		setExpenses((prevExpenses) => {
			return {
				...prevExpenses,
				[id]: {
					id: id,
					date: date,
					amount: amount,
					type: type,
					desc: desc,
				},
			};
		});
	}

	useEffect(() => {
		localStorage.setItem("expenses", JSON.stringify(expenses));
	}, [expenses]);

	function handleDelete(id) {
		setExpenses((prevExpenses) => {
			return Object.values(prevExpenses).filter((expense) => {
				return expense.id !== id;
			});
		});
	}

	return (
		<div className="App">
			<Container>
				<h1>Expense Tracker</h1>
				<ExpenseForm handleSubmit={handleSubmit} />
				<ExpenseTable handleDelete={handleDelete} expenses={expenses} />
			</Container>
		</div>
	);
}

export default App;
