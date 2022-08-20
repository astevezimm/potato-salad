import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico?v=2" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap"
                      rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                      crossOrigin="anonymous" />
            </Head>
            <body>
                <Main />
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                    crossOrigin="anonymous" />
                <NextScript />
            </body>
        </Html>
    )
}