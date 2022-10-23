import React from "react";
import Title from "./ExpenseTitle";
import Form from "./ExpenseForm";
import Table from "./ExpenseTable";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Title />
			<Form />
			<Table />
		</div>
	);
}

export default App;
