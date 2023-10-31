
import { SessionProvider } from "next-auth/react"

const CustomSesionProvider = ( { children , session } ) => {
    return (
        <SessionProvider session={session}>
            { children }
        </SessionProvider>
    )
}

export default CustomSesionProvider
