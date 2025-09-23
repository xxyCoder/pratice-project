import type {Metadata} from "next"
import type {ReactNode} from "react"
import {Geist, Geist_Mono} from "next/font/google"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "xxyCoder-test",
	description: "test nextjs",
}

type RootLayoutProps = LayoutProps<"/"> & {
	team?: ReactNode
	analyze?: ReactNode
}

export default function RootLayout({children, team, analyze}: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<div className="flex items-center justify-center">
					{team}
					{analyze}
				</div>
			</body>
		</html>
	)
}
