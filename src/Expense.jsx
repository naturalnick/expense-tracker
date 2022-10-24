export default function Expense(props) {
	return (
		<tr>
			<td>{props.type}</td>
			<td>{props.description}</td>
			<td>{props.amount}</td>
			<td>{props.date}</td>
		</tr>
	);
}
