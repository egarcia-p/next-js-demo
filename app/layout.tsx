import { Metadata } from 'next';
import { montserrat } from './ui/fonts';
import './ui/global.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
      <footer className='py-10 flex justify-center items-center'>
        Hecho con :heart: por la gente de Vercel
      </footer> 
    </html>
  );
}
