import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import { homePage } from '@/constants/meta';
import cn from '@/utils/classNames';
import Footer from '@/components/shared/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: homePage.metaTitle,
  description: homePage.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('bg-background text-foreground', montserrat.className)}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
