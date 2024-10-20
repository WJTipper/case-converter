"use client";
import { convertString } from "./functions";

export default function Home() {
	const inputCaseList: string[] = [
		"camel",
		"kebab",
		"pascal",
		"snake",
		"scream",
		"train",
	];
	const outputCaseList: string[] = [...inputCaseList];
	outputCaseList.push("mumble");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const inputStr = data.get("input-str") as string;
		const inputCase = data.get("input-case") as string;
		const outputCase = data.get("output-case") as string;
		convertString(inputStr, inputCase, outputCase);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="input-str">Input string</label>
				<br />
				<input id="input-str" name="input-str" type="text" />
				<br />
				<label htmlFor="input-str">Input case</label>
				<br />
				<select
					id="input-case"
					name="input-case"
					className="form-select"
				>
					<option selected>{}</option>
					{inputCaseList.map((item, index) => {
						return <option key={index}>{item}</option>;
					})}
				</select>
				<br />
				<label htmlFor="output-str">Output case</label>
				<br />
				<select
					id="output-case"
					name="output-case"
					className="form-select"
				>
					<option selected>{}</option>
					{outputCaseList.map((item, index) => {
						return <option key={index}>{item}</option>;
					})}
				</select>
				<br />
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
