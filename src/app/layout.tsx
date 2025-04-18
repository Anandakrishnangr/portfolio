// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ananda Krishnan GR | Portfolio",
  description: "Welcome to my portfolio website showcasing work and experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>
      <div className="h-dvh overflow-y-scroll snap-y snap-mandatory">
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
