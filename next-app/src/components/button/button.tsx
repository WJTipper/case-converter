export interface ButtonProps {
	text: string;
}

export default function Button(props: ButtonProps) {
	return (
		<div>
			<button type="button" className="btn btn-primary">
				{props.text}
			</button>
		</div>
	);
}
