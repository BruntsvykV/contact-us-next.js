import React from "react";
import Head from "next/head";
import Header from "@/components/pageLayout/Header";
import Footer from "@/components/pageLayout/Footer";
import favicon from "../public/next-16.svg"
import '../styles/globals.css';

const projectName = 'Contact Us Next.js';

const App = ({ Component, pageProps }: any) => {
  return (
    <div>
      <Head>
        <title>{projectName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon.src}/>
      </Head>
      <Header/>
      {(Component.getLayout || ((page: any) => page))(
        <Component {...pageProps}/>
      )}
      <Footer/>
    </div>
  )
}

export default App;
