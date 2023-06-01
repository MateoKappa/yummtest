import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header/header";
// import { TailwindIndicator } from "./tailwindIndicator";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yummy",
  description: "Mykonos Yummy Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
