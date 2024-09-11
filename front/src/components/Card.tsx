"use client"

import { MouseEventHandler, PropsWithChildren } from "react"

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<div className="absolute inset-0 z-10 bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "/>
				<div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"/>
			</div>

			{children}
		</div>
	)
}
