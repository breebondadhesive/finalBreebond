import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import LoadingScreen from '@/components/LoadingScreen';

export const metadata: Metadata = {
  title: 'BreeBond LLP | Premium Tile Adhesives',
  description: 'Trust BREEBOND for adhesives that bond beyond expectation. Manufacturer of premium tile adhesives.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Poppins:wght@700&family=Source+Code+Pro&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-body antialiased bg-background">
        <LoadingScreen />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
