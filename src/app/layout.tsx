import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Motion - Show & Tell',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
