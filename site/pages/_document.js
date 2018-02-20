import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          {/* link rel="stylesheet href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.14/semantic.css" */}
          <link rel="stylesheet" href="/static/css/semantic.min.css" />
          <link rel="stylesheet" href="/static/css/global.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}