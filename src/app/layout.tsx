import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "CookUp",
  description: "Cookup is a dynamic web app that specializes in creating personalized recipes based on user preferences. It leverages a user-friendly interface to offer customized meal suggestions tailored to individual tastes, dietary restrictions, and available ingredients. With Cookup, users can easily input their culinary preferences and receive unique, delicious recipes designed to enhance their cooking experience.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      <TopNav />
        {children}
        </body>
    </html>
  );
}
