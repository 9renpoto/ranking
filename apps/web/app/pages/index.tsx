import { Trans } from '@lingui/macro'
import LangSwitcher from '../components/LangSwitcher'
import { withLang } from '../components/withLang'

export default withLang(() => (
  <div>
    <Trans>Hello</Trans>
    <LangSwitcher />
  </div>
))
