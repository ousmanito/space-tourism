import { Bellefair, Barlow_Condensed } from "next/font/google";

export const bellefair = Bellefair({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--bellefair",
});

export const barlow = Barlow_Condensed({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	variable: "--barlow",
});
