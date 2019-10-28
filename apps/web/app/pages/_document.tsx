import Document, { DocumentProps, Main, NextScript } from 'next/document'

export default class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <html>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
