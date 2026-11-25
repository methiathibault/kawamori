import { invoke } from "@tauri-apps/api/core"
import type React from "react"
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

export default function App(): React.JSX.Element {
	const [greetMsg, setGreetMsg] = useState("")
	const [name, setName] = useState("")

	const greet = async (): Promise<void> => {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		setGreetMsg(await invoke("greet", { name }))
	}

	return (
		<main className="container">
			<h1>Welcome to Tauri + React</h1>

			<div className="row">
				<a href="https://vite.dev" target="_blank" rel="noopener">
					<img src="/vite.svg" className="logo vite" alt="Vite logo" />
				</a>
				<a href="https://tauri.app" target="_blank" rel="noopener">
					<img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<p>Click on the Tauri, Vite, and React logos to learn more.</p>

			<form
				className="row"
				onSubmit={(e: React.SubmitEvent<HTMLFormElement>): void => {
					e.preventDefault()
					greet()
				}}
			>
				<input
					id="greet-input"
					onChange={(
						e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
					): void => setName(e.currentTarget.value)}
					placeholder="Enter a name..."
				/>
				<button type="submit">Greet</button>
			</form>
			<p>{greetMsg}</p>
		</main>
	)
}
