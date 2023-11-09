import './globals.css';
import HeaderComponent from '@/components/headerComponents/HeaderComponent';
import FooterComponent from '@/components/footer/FooterComponent';
import CustomSesionProvider from './SessionProvider';
import { getDictionary } from '@/lib/dictionary';

export default async function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <body className={'max-w-full'}>
        {/* Session provider */}
        <CustomSesionProvider>
          {/* Navbar */}
          <HeaderComponent lang={params.lang} />
          {children}
          {/* Footer */}
          <FooterComponent lang={params.lang} />
        </CustomSesionProvider>
      </body>
    </html>
  );
}
