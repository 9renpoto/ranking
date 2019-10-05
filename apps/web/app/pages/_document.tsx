import Document, { DocumentProps, Head, Main, NextScript } from 'next/document'
import '../../../../globalStyles'

export default class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
