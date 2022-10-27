import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import Expense from "./Expense";
import "./App.css";

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
		let id = new Date().getTime().toString(); //id for unique key
		id = id.substring(3);
		setExpenses((prevExpenses) => {
			return { ...prevExpenses, [id]: inputs };
		});
		setInputs({});
	};

	useEffect(() => {
		localStorage.setItem("expenses", JSON.stringify(expenses));
	}, [expenses]);

	const expenseElements = Object.values(expenses).map((expense) => {
		console.log(expense.id);
		return (
			<Expense
				key={expense.id}
				date={expense.date}
				amount={expense.amount}
				type={expense.type}
				description={expense.description}
				deleteExpense={() => deleteExpense(expense.id)}
			/>
		);
	});

	function deleteExpense(id) {
		setExpenses((prevExpenses) => {
			//flatmap destructures arrays and removes empty arrays, probably not best option for deleting
			return Object.values(prevExpenses).flatMap((expense) => {
				return expense.id === id ? [] : expense;
			});
		});
	}

	return (
		<div className="App">
			<Container>
				<h1>Expense Tracker</h1>
				<Form onSubmit={handleSubmit}>
					<Row className="center">
						<Col md={5} className="pb-2">
							<InputGroup className="date-group mx-auto">
								<InputGroup.Text>Date</InputGroup.Text>
								<InputGroup.Text className="date-div">
									<input
										className="datePicker"
										type="date"
										name="date"
										value={inputs.date || ""}
										onChange={handleChange}
										required
									/>
								</InputGroup.Text>
							</InputGroup>
						</Col>
						<Col md={3} className="pb-2">
							<InputGroup>
								<InputGroup.Text>$</InputGroup.Text>
								<Form.Control
									type="text"
									placeholder="0"
									name="amount"
									value={inputs.amount || ""}
									onChange={handleChange}
									required
								/>
							</InputGroup>
						</Col>
						<Col md={4} className="pb-2">
							<Form.Select
								name="type"
								value={inputs.type || ""}
								onChange={handleChange}
								required
							>
								<option value="">Payment Type</option>
								<option value="Card">Card</option>
								<option value="Cash">Cash</option>
								<option value="Crypto">Crypto</option>
								<option value="Other">Other</option>
							</Form.Select>
						</Col>
					</Row>
					<Row>
						<Col md={9} className="pb-2">
							<Form.Control
								type="text"
								name="description"
								placeholder="Description"
								value={inputs.description || ""}
								onChange={handleChange}
								required
							/>
						</Col>
						<Col className="d-grid pb-2" md={3}>
							<Button variant="primary" type="submit" name="submit">
								Add Expense
							</Button>
						</Col>
					</Row>
				</Form>

				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Date</th>
							<th>Amount</th>
							<th>Type</th>
							<th>Description</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody id="expense-table">{expenseElements}</tbody>
				</Table>
			</Container>
		</div>
	);
}

export default App;
