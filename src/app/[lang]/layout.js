import './globals.css';
import HeaderComponent from '@/components/headerComponents/HeaderComponent';
import FooterComponent from '@/components/footer/FooterComponent';
import CustomSesionProvider from './SessionProvider';
import Script from 'next/script';
import BackToTopButton from '@/components/buttons/BackToTopButton';
import WhatsAppButton from '@/components/buttons/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://www.eleganzabridal-lv.com/'),
  title: {
    default: 'Eleganza Bridal Las Vegas | Amazing Dresses',
    template: `%s | Eleganza Bridal Las Vegas`,
  },
  description:
    'Eleganza Bridal Las Vegas has a wide variety of bridal, evening, quinceañera dresses and much more...',
};

export default async function RootLayout({ children, params }) {
  const GTM_ID = 'GTM-KQ3PK4HG';
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={'max-w-full'}>
        {/* Session provider */}
        <CustomSesionProvider>
          {/* Navbar */}
          <HeaderComponent lang={params.lang} />
          {children}
          {/* Footer */}
          <FooterComponent lang={params.lang} />
          <BackToTopButton />
          <WhatsAppButton lang={params.lang} />
        </CustomSesionProvider>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
