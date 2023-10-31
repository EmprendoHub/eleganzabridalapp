"use client"
import './globals.css'
import HeaderComponent from '@/components/headerComponents/HeaderComponent'
import FooterComponent from '@/components/footer/FooterComponent'
import CustomSesionProvider from './SessionProvider'
import { getServerSession } from 'next-auth'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/redux/store'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>
        {/* Redux Provider Wrapper */}
        <Provider store={store}>
          <PersistGate persistor={persistor}>
                {/* Session provider */}
                <CustomSesionProvider>
                    {/* Navbar */}
                <HeaderComponent />
                {children}
                {/* Footer */}
                <FooterComponent />
                </CustomSesionProvider>
            </PersistGate>
        </Provider>
        
      </body>
    </html>
  )
}
