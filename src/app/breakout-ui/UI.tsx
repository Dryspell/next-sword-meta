import React from "react";
import { Accessor, Setter } from "./utils";
import { GameState } from "./breakout-ui";
import { Engine } from "excalibur";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UI({
	gameState,
	setGameState,
	game,
	actions,
}: {
	gameState: GameState;
	setGameState: Setter<GameState>;
	game: Engine;
	actions: { generateRandomBrick: () => void };
}) {
	const [inputValue, setInputValue] = React.useState("");

	return (
		<>
			<div
				className="grid-cols-2 gap-2"
				style={{ position: "absolute", right: 0, top: "55%" }}
			>
				<button
					style={{
						padding: "1rem",
						margin: "1rem",
						borderRadius: "0.5rem",
						backgroundColor: "#2e026d",
						color: "white",
						border: "none",
					}}
					onClick={() => {
						setGameState((prev) => {
							prev.score = prev.score + 1;
							return prev;
						});
					}}
				>
					{`Score: ${gameState.score}`}
				</button>
				<button
					style={{
						padding: "1rem",
						borderRadius: "0.5rem",
						backgroundColor: "#2e026d",
						color: "white",
						border: "none",
					}}
					onClick={() => {
						setGameState((prev) => {
							prev.lives = prev.lives + 1;
							return prev;
						});
					}}
				>
					{`Lives: ${gameState.lives}`}
				</button>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="myInput">
						{inputValue ?? "Type Something..."}
					</Label>
					<Input
						type="myInput"
						id="myInput"
						placeholder="Type Something..."
						// value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						style={{ color: "black" }}
					/>
				</div>

				<button
					style={{
						padding: "1rem",
						borderRadius: "0.5rem",
						backgroundColor: "#2e026d",
						color: "white",
						border: "none",
					}}
					onClick={() => {
						actions.generateRandomBrick();
					}}
				>
					Generate Brick
				</button>
			</div>
		</>
	);
}
