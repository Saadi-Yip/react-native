 
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  console.log(session);
  return ( 
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider> 
  )
}

