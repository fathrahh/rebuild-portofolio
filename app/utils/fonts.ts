import { Poppins, Gochi_Hand } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const gochiHand = Gochi_Hand({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--gochi-hand-font",
});
