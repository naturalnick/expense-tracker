import React from "react";
import "./App.css";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import DatePicker from "react-date-picker";

let expenses = [];

function App() {
	const [inputs, setInputs] = useState("");

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
	};

	return (
		<div className="App">
			<h1>Expense Tracker</h1>
			<Container>
				<Form onSubmit={handleSubmit}>
					<Row>
						<Col className="p-2" sm={4}>
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
						<Col className="p-2" sm={8}>
							<Form.Control
								type="text"
								name="description"
								placeholder="Description"
								value={inputs.description || ""}
								onChange={handleChange}
							/>
						</Col>
					</Row>
					<Row>
						<Col className="p-2" md={3} sm={5}>
							<InputGroup>
								<InputGroup.Text id="basic-addon1">$</InputGroup.Text>
								<Form.Control
									type="text"
									placeholder="0"
									name="amount"
									value={inputs.amount || ""}
									onChange={handleChange}
								/>
							</InputGroup>
						</Col>
						<Col className="p-2 centered" md={6} sm={7}>
							<InputGroup>
								<InputGroup.Text id="basic-addon1">
									Date{" "}
								</InputGroup.Text>
								<InputGroup.Text id="basic-addon1">
									<DatePicker
										name="date"
										value={inputs.date || ""}
										onChange={handleChange}
									/>
								</InputGroup.Text>
							</InputGroup>
						</Col>
						<Col className="p-2" md={3} sm={12}>
							<Button variant="primary" type="submit">
								Add Expense
							</Button>
						</Col>
					</Row>
				</Form>
			</Container>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Form</th>
						<th>Description</th>
						<th>Date</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Card</td>
						<td>Groceries</td>
						<td>10/22</td>
						<td>$100</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default App;
