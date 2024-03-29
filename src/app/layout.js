import "../styles/styles.css";
import { Handjet } from 'next/font/google/'

export const metadata = {
  title: "Angela Francisco",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
