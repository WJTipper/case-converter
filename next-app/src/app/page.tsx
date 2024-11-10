"use client";
import { useState } from "react";
import { convertString } from "@functions/convert-string";
import { validateInputs } from "@functions/validate-inputs";

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
		const inputHasError = validateInputs(
			data.get("input-str") as string,
			data.get("input-case") as string,
			data.get("output-case") as string
		);

		if (inputHasError == "") {
			setOutputString(
				convertString(
					data.get("input-str") as string,
					data.get("input-case") as string,
					data.get("output-case") as string
				)
			);
			setErrorMessage("");
		} else {
			setOutputString("");
			setErrorMessage(inputHasError);
		}
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="row g-3">
				<div className="row g-3">
					<div className="col-md-6">
						<label htmlFor="input-str" className="form-label">
							Input string
						</label>
						<input
							id="input-str"
							name="input-str"
							type="text"
							className="form-control"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<label htmlFor="input-str" className="form-label">
						Input case
					</label>
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
				</div>
				<div className="col-md-6">
					<label htmlFor="output-str" className="form-label">
						Output case
					</label>
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
				</div>
				{errorMessage != "" && (
					<div className="col-6">
						<div className="p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">
							<strong>Error:</strong>
							<br />
							{errorMessage}
						</div>
					</div>
				)}
				<div className="col-12">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
			<br />
			<div className="row g-3">
				<div className="col-6">
					<div>
						{outputString != "" && (
							<div className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
								<strong>Success!</strong>
								<br />
								Result:
								<br />
								{outputString}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
