import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const oddval = localFont({
  src: [
    {
      path: './static-fonts/Oddval-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './static-fonts/Oddval-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './static-fonts/Oddval-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './static-fonts/Oddval-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './static-fonts/Oddval-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './static-fonts/Oddval-Bold.ttf',
      weight: '800',
      style: 'normal',
    }
  ],
})

export const metadata: Metadata = {
  title: "Groom.me",
  description: "З турботою про ваших хвостиків!",
  icons: {
    icon: '/doggo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oddval.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
