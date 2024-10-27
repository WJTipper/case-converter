"use client";
import { useState } from "react";
import { convertString } from "@/functions/convert-string";
import { validateInputs } from "@/functions/validate-inputs";

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

	const [errorMessage, setErrorMessage] = useState("");
	const [outputString, setOutputString] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		setErrorMessage(
			validateInputs(
				data.get("input-str") as string,
				data.get("input-case") as string,
				data.get("output-case") as string
			)
		);
		console.log(errorMessage);
		if (errorMessage == "") {
			setOutputString(
				convertString(
					data.get("input-str") as string,
					data.get("input-case") as string,
					data.get("output-case") as string
				)
			);
		} else {
			setOutputString("");
		}
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
			{errorMessage != "" && (
				<div>
					<br />
					Error:
					<br />
					{errorMessage}
				</div>
			)}
			{outputString != "" && (
				<div>
					<br />
					Result:
					<br />
					{outputString}
				</div>
			)}
		</div>
	);
}
