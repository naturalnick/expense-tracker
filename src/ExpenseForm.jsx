import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

export default function ExpenseRow(props) {
	return (
		<Form onSubmit={props.handleSubmit}>
			<Row>
				<Col md={4} className="pb-2">
					<InputGroup className="date-group mx-auto">
						<InputGroup.Text>Date</InputGroup.Text>
						<Form.Control
							className="date-div"
							type="date"
							name="date"
							value={props.expense.date || ""}
							onChange={props.handleChange}
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
							name="amount"
							value={props.expense.amount || ""}
							onChange={props.handleChange}
							required
						/>
					</InputGroup>
				</Col>
				<Col md={4} className="pb-2">
					<Form.Select
						name="type"
						value={props.expense.type || ""}
						onChange={props.handleChange}
						required
					>
						<option value="">Payment Type</option>
						<option value="Card">Card</option>
						<option value="Cash">Cash</option>
						<option value="Check">Cash</option>
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
						value={props.expense.description || ""}
						onChange={props.handleChange}
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
