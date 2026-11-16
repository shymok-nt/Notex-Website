import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notex — Düşüncelerine alan aç.",
  description: "Notex ile notlarını, el yazılarını ve PDF'lerini tek bir sakin çalışma alanında buluştur. Windows için tasarlandı.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
