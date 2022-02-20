import Head from "next/head";
import { Box,Text } from "@chakra-ui/react";
import { Children } from "react/cjs/react.production.min";


const Layout = ({children})=>{

    return (
        
    <>
    <Head>
        <title>
           Real Estate
        </title>
    </Head>

    <Box maxWidth={'1280'} m="auto">
        <header>
        Navbar
        </header>

        <main>
        {children}
        </main>

        <footer>Footer</footer>
    </Box>
    </>
    )

}


export default Layout