
"use client"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/redux/store'
import { SessionProvider } from "next-auth/react"

const CustomSesionProvider = ( { children , session } ) => {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <SessionProvider session={session}>
                { children }
            </SessionProvider>
            </PersistGate>
        </Provider>
    )
}

export default CustomSesionProvider
