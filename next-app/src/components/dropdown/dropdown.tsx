export interface DropdownProps {
	selectedOption: string;
	optionList: string[];
}

export default function Dropdown(props: DropdownProps) {
	return (
		<div>
			<select className="form-select">
				<option selected>{props.selectedOption}</option>
				{props.optionList.map((item, index) => {
					return <option key={index}>{item}</option>;
				})}
			</select>
		</div>
	);
}
