/**
 * @file Handles server side rendering of the page. A wrapper for _app.js
 * @author Drew Hoffer, Joel Malleck, Trent Thompson
*/



// Installed imports
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import React from "react"



/**
 * A custom document for server side rendering.
 * @class
 */
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#000000" />
                    {/* Fonts and icons */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
                    />
                    <link
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
  
    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  
    const initialProps = await Document.getInitialProps(ctx);
  
    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement(),
        ],
    };
};
