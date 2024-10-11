import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Nunito } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { cn, getTags } from "@/lib/utils";

const nunito = Nunito({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Handy Dandy",
	description: "Ryan Lahlou's collection of debatably useful tools",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.className} antialiased`}>
				<div className="bg-gray-100 dark:bg-gray-900">
					<Tabs defaultValue="MLH">
						<header className="w-full fixed top-0 bg-white dark:bg-gray-800 shadow">
							<div className="max-w-7xl mx-auto flex justify-between items-center w-full">
								<div className="flex justify-start gap-4 items-center p-3 sm:px-6 lg:px-8">
									<p className="text-5xl">🛠️</p>
									<div>
										<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
											Handy Dandy
										</h1>
										<p className="text-sm w-48 text-wrap text-gray-500 dark:text-gray-400">
											Ryan's debatably useful tools
										</p>
									</div>
								</div>
								<div className="p-3 h-full flex justify-right items-center">
									<TabsList
										className="grid w-full grid-cols-3"
									>
										<TabsTrigger key={`All-tabheader`} value={"All"}>{"All"}</TabsTrigger>
										{getTags().map((tag) => (
											<TabsTrigger key={`${tag}-tabheader`} value={tag}>{tag}</TabsTrigger>
										))}
									</TabsList>
								</div>
							</div>
						</header>

						<main className="mt-20 min-h-[calc(100vh-10.3rem)]">{children}</main>
					</Tabs>

					<footer className="w-full bottom-0 bg-white dark:bg-gray-800 shadow mt-8">
						<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
							<div className="flex justify-between items-center">
								<p className="text-sm text-gray-500 dark:text-gray-400">
									© 2024 Ryan Lahlou. View project source code{" "}
									<Link
										href="https://github.com/lryanle/handydandy"
										className="underline"
									>
										here
									</Link>
									.
								</p>
							</div>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
