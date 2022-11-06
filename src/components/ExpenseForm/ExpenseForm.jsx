import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./ExpenseForm.css";

export default function ExpenseRow({ expense, handleSubmit }) {
	const [date, setDate] = useState("");
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState("");
	const [desc, setDesc] = useState("");

	function clearForm() {
		setDate("");
		setAmount(0);
		setType("");
		setDesc("");
	}

	return (
		<Form
			onSubmit={(e) => {
				handleSubmit(e, date, amount, type, desc);
				clearForm();
			}}
		>
			<Row>
				<Col md={4} className="pb-2">
					<InputGroup className="date-group mx-auto">
						<InputGroup.Text>Date</InputGroup.Text>
						<Form.Control
							className="date-div"
							type="date"
							name="date"
							value={date || ""}
							onChange={(e) => {
								setDate(e.target.value);
							}}
							required
						/>
					</InputGroup>
				</Col>
				<Col md={4} className="pb-2">
					<InputGroup>
						<InputGroup.Text>$</InputGroup.Text>
						<Form.Control
							type="number"
							placeholder="0.00"
							step=".01"
							name="amount"
							value={amount || ""}
							onChange={(e) => {
								setAmount(e.target.value);
							}}
							required
						/>
					</InputGroup>
				</Col>
				<Col md={4} className="pb-2">
					<Form.Select
						name="type"
						value={type || ""}
						onChange={(e) => {
							setType(e.target.value);
						}}
						required
					>
						<option value="">Payment Type</option>
						<option value="Card">Card</option>
						<option value="Cash">Cash</option>
						<option value="Check">Check</option>
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
						value={desc || ""}
						onChange={(e) => {
							setDesc(e.target.value);
						}}
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
	);
}
