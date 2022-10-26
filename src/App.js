import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import Expense from "./Expense";
import "./App.css";

//TODO add unique keys
//TODO fix input arrangement

function App() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputs((pastValues) => ({ ...pastValues, [name]: value }));
	};

	const [expenses, setExpenses] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = Object.keys(expenses).length;
		setExpenses((prevExpenses) => ({ ...prevExpenses, [id]: inputs }));
	};

	const expElements = Object.values(expenses).map((exp) => {
		return (
			<Expense
				type={exp.type}
				description={exp.description}
				amount={exp.amount}
				date={exp.date}
			/>
		);
	});

	return (
		<div className="App">
			<Container>
				<h1>Expense Tracker</h1>
				<Form onSubmit={handleSubmit}>
					<Row className="pd-1">
						<Col md="auto">
							<InputGroup>
								<InputGroup.Text>Date</InputGroup.Text>
								<InputGroup.Text className="date-div">
									<input
										className="datePicker"
										type="date"
										name="date"
										value={inputs.date || ""}
										onChange={handleChange}
									/>
								</InputGroup.Text>
							</InputGroup>
						</Col>
						<Col md={3}>
							<Form.Select
								name="type"
								value={inputs.type || ""}
								onChange={handleChange}
							>
								<option>$ Type</option>
								<option value="Card">Card</option>
								<option value="Cash">Cash</option>
								<option value="Crypto">Crypto</option>
								<option value="Other">Other</option>
							</Form.Select>
						</Col>
						<Col md={4}>
							<InputGroup>
								<InputGroup.Text>$</InputGroup.Text>
								<Form.Control
									type="text"
									placeholder="0"
									name="amount"
									value={inputs.amount || ""}
									onChange={handleChange}
								/>
							</InputGroup>
						</Col>
					</Row>
					<Row>
						<Col md={9}>
							<Form.Control
								type="text"
								name="description"
								placeholder="Description"
								value={inputs.description || ""}
								onChange={handleChange}
							/>
						</Col>
						<Col className="d-grid" md={3}>
							<Button
								className="float-end"
								variant="primary"
								type="submit"
								name="submit"
							>
								Add Expense
							</Button>
						</Col>
					</Row>
				</Form>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Type</th>
							<th>Description</th>
							<th>Date</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody id="expense-table">{expElements}</tbody>
				</Table>
			</Container>
		</div>
	);
}

export default App;
