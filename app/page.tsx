"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='flex flex-col items-center'>
				<Image
					src={"/logo.jpg"}
					width={500}
					height={500}
					alt='global english'
				/>
				<Link href='/login'>
					<Button>Iniciar sesión</Button>
				</Link>
			</div>
		</main>
	);
}
