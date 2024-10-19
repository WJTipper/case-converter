"use client";

export default function Home() {
	const caseList: string[] = ["mumble", "scream"];

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const inputStr = data.get("inputStr");
		const inputCase = data.get("inputCase");
		const outputCase = data.get("outputCase");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="input-str">Input string</label>
				<br />
				<input id="input-str" name="inputStr" type="text" />
				<br />
				<label htmlFor="input-str">Input case</label>
				<br />
				<select
					id="input-case"
					name="inputCase"
					className="form-select"
				>
					<option selected>{}</option>
					{caseList.map((item, index) => {
						return <option key={index}>{item}</option>;
					})}
				</select>
				<br />
				<label htmlFor="output-str">Output case</label>
				<br />
				<select
					id="output-case"
					name="outputCase"
					className="form-select"
				>
					<option selected>{}</option>
					{caseList.map((item, index) => {
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
