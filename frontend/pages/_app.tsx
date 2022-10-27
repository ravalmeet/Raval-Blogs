import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

import NextNProgress from 'nextjs-progressbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <div className='bg-[#0A182E] '>
            <div className="container mx-auto font-sans  ">
                <NextNProgress color="#53BD95" />
                <Navbar />
                <main className=" pb-32">
                    <Component {...pageProps} />
                </main>
                <Footer/>
            </div>
            </div>
        </>
    );
}

export default MyApp;
