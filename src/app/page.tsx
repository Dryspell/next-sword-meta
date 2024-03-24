import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Link href="/breakout">Breakout</Link>
			<Link href="/breakout-ui">Breakout UI</Link>
		</>
	);
}
