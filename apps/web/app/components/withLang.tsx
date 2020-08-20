import { Catalogs } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { NextPageContext } from 'next'
import React from 'react'

type BaseProps = {
  language: string
  catalogs?: Catalogs
}

interface Context extends NextPageContext {}

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: Context) => Promise<P>
}

export function withLang<P>(Component: StatelessPage, defaultLang = 'en') {
  return class WithLang extends React.Component<P> {
    static async getInitialProps(ctx: Context) {
      const language =
        typeof ctx.query.lang === 'string'
          ? ctx.query.lang
          : ctx.query.lang
          ? ctx.query.lang[0]
          : defaultLang
      const [props, catalog] = await Promise.all([
        Component.getInitialProps ? Component.getInitialProps(ctx) : {},
        import(`../locale/${language}/messages.po`).then((m) => m.default),
      ])

      return {
        ...props,
        language,
        catalogs: {
          [language]: catalog,
        },
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
