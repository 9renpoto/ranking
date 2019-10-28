import { I18nProvider } from '@lingui/react'
import { Catalogs } from '@lingui/core'

type Props = {
  language: string
  catalogs?: Catalogs
}

export function withLang<P extends Props>(Component, defaultLang = 'en') {
  return class WithLang extends React.Component {
    static async getInitialProps(ctx: { query: { lang: string } }) {
      const language = ctx.query.lang || defaultLang
      const [props, catalog] = await Promise.all([
        Component.getInitialProps ? Component.getInitialProps(ctx) : {},
        import(`../locale/${language}/messages.po`).then(m => m.default)
      ])

      return {
        ...props,
        language,
        catalogs: {
          [language]: catalog
        }
      }
    }

    render() {
      const { language, catalogs, ...restProps } = this.props as P

      return (
        <I18nProvider language={language} catalogs={catalogs}>
          <Component {...restProps} />
        </I18nProvider>
      )
    }
  }
}
