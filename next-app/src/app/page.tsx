import Button from "@/components/button/button";
import Dropdown from "@/components/dropdown/dropdown";
import Input from "@/components/input/input";

export default function Home() {
	return (
		<form>
			<Input id={"input-string"} labelText={"Input string:"} />
			<br />
			<Dropdown
				selectedOption="Input case"
				optionList={["option1", "option2"]}
			/>
			<br />
			<Dropdown
				selectedOption="Output case"
				optionList={["option1", "option2"]}
			/>
			<br />
			<Button text={"Submit"} />
		</form>
	);
}
