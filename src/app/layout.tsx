import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Level Up",
  description: "Projeto Level Up",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
