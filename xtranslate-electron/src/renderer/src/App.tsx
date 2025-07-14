import { Fragment } from 'react'
import Header from './components/header'
import useTranslateInput from './components/translate/TranslateInput'
import TranslateOutput from './components/translate/translateOutput'
import useAutoDetection from './components/translate/autoDetection'

function App(): React.JSX.Element {
  const { fromLanguage, toLanguage, switchLanguageNode } = useAutoDetection({
    className: 'my-2'
  })
  const { translateInput, translateResult } = useTranslateInput({
    fromLanguage,
    toLanguage
  })

  return (
    <div className="p-2">
      <Header />
      {translateInput}
      {switchLanguageNode}
      {translateResult.map(({ trans_result, from, type }) => {
        return (
          <Fragment key={type}>
            <TranslateOutput type={type} trans_result={trans_result} from={from} />
          </Fragment>
        )
      })}
    </div>
  )
}

export default App
