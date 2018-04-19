import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import '../components/globalStyles'

export default class MyDocument extends Document {
  public static getInitialProps ({ renderPage }: any) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  public render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
