
import './globals.css'; // <-- das muss da sein!
import Navbar from './components/Navbar';
import Footer from "./components/Footer";


export const metadata = {
  title: 'Baltic Dragons',
  description: 'Norddeutsches Drachenbootteam',
  icons: {
    icon: '/baltics-logo-light.png', // oder /favicon.svg / .png
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
      <Navbar />

      {children}
      <Footer />
      </body>
    </html>
  );
}

