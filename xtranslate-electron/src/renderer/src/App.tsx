import { Fragment } from 'react'
import Header from './components/Header'
import useTranslateInput from './components/Translate/TranslateInput'
import TranslateOutput from './components/Translate/TranslateOutput'

function App(): React.JSX.Element {
  const { translateInput, translateResult } = useTranslateInput()
  return (
    <div className="p-2">
      <Header />
      {translateInput}
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
