import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Baltic Dragons | Norddeutsches Drachenbootteam',
  description: 'Erlebe Drachenbootsport an der Ostsee mit den Baltic Dragons. Jetzt mehr erfahren!',
  icons: {
    icon: '/baltics-logo-light.png',
  },
  openGraph: {
    title: 'Baltic Dragons | Norddeutsches Drachenbootteam',
    description: 'Erlebe Drachenbootsport an der Ostsee mit den Baltic Dragons. Jetzt mehr erfahren!',
    url: 'https://www.baltic-dragons.de', // echte Domain
    type: 'website',
    images: [
      {
        url: '/baltics-logo-light.png',
        alt: 'Baltic Dragons Logo',
      },
    ],
    locale: 'de_DE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
