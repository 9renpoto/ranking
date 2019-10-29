import Router from 'next/router'
import { I18n } from '@lingui/react'
import { t, Trans } from '@lingui/macro'
import { FormEvent } from 'react'
import { MessageDescriptor } from '@lingui/core'

const availableLanguageNames: { [key: string]: MessageDescriptor } = {
  en: t`English`,
  ja: t`Japanese`
}

const availableLanguages = Object.keys(availableLanguageNames)

export default () => {
  function onSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    Router.push({
      pathname: window.location.pathname,
      query: { lang: (evt.currentTarget.lang as any).value }
    })
  }

  return (
    <I18n>
      {({ i18n }) => (
        <form onSubmit={onSubmit}>
          <select
            key={i18n.language}
            name='lang'
            defaultValue={availableLanguages.find(
              lang => lang !== i18n.language
            )}
          >
            {availableLanguages.map(lang => (
              <option key={lang} value={lang} disabled={i18n.language === lang}>
                {i18n._(availableLanguageNames[lang])}
              </option>
            ))}
          </select>
          <button>
            <Trans>Switch language</Trans>
          </button>
        </form>
      )}
    </I18n>
  )
}
