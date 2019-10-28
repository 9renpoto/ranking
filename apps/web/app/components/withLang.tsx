import React from 'react'
import { I18nProvider } from '@lingui/react'
import { Catalogs } from '@lingui/core'

type BaseProps = {
  language: string
  catalogs?: Catalogs
}

export function withLang<P>(Component, defaultLang = 'en') {
  return class WithLang extends React.Component<P> {
    static async getInitialProps(ctx: any) {
      const language: string = ctx.query.lang || defaultLang
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
      type Props = P & BaseProps
      const { language, catalogs, ...restProps } = this.props as Props

      return (
        <I18nProvider language={language} catalogs={catalogs}>
          <Component {...restProps} />
        </I18nProvider>
      )
    }
  }
}
