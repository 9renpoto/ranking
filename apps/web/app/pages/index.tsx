import { Trans } from '@lingui/react'
import { withLang } from '../components/withLang'
import LangSwitcher from '../components/LangSwitcher'

export default withLang(() => (
  <div>
    <Trans>Hello</Trans>
    <LangSwitcher />
  </div>
))
