// NEXT AUTH
import { SessionProvider } from "next-auth/react";
// STYLES
import "@/styles/globals.css";
import { Layout } from "../components/layouts/index";


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}