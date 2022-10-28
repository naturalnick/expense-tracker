import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import "./App.css";

//TODO Fix mobile presentation

function App() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		const id = new Date().getTime().toString(); //id for unique key
		setInputs((pastValues) => ({
			...pastValues,
			[name]: value,
			id: id,
		}));
	};

	const [expenses, setExpenses] = useState(() => {
		const localData = localStorage.getItem("expenses");
		return localData ? JSON.parse(localData) : {};
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		let id = new Date().getTime().toString().substring(3); //id for unique key
		setExpenses((prevExpenses) => {
			return { ...prevExpenses, [id]: inputs };
		});
		setInputs({});
	};

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
				<ExpenseForm
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					expense={inputs}
				/>
				<ExpenseTable handleDelete={handleDelete} expenses={expenses} />
			</Container>
		</div>
	);
}

export default App;
