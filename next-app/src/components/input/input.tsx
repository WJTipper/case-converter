export interface InputProps {
	id: string;
	labelText: string;
}

export default function Input(props: InputProps) {
	return (
		<div>
			<label htmlFor={props.id}>{props.labelText}</label>
			<input id={props.id} type="text" />
		</div>
	);
}
