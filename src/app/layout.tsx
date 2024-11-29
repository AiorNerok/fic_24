import type { Metadata } from "next";
import { Geist } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "providers/theme-providers";


const mainFont = Geist({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Cowboy Bebop",
  description: "Перед смертью люди думают о своем прошлом, как будто ищут доказательств, что они действительно жили.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${mainFont.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
