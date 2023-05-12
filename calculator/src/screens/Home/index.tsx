import { useState } from 'react'
import { View } from 'react-native'
import { Button } from '../../components/Button'
import { Display } from '../../components/Display'
import { labels } from '../../constants'

import { styles } from './styles'

export const Home = () => {
  const [displayValue, setDisplayValue] = useState<string>('0')
  const [currentValue, setCurrentValue] = useState<number>(0)
  const [operation, setOperation] = useState<string>()
  const [result, setResult] = useState<number>(0)

  const addDigit = (digit: string) => {
    if (digit === '.' && displayValue.includes('.')) {
      return
    }

    setDisplayValue(displayValue === '0' ? digit : `${displayValue}${digit}`)
  }

  const cleanMemory = (setDisplayValue: (displayValue: string) => void) => {
    setDisplayValue('0')
  }

  const setOperation1 = () => {}

  return (
    <View style={styles.container}>
      <Display displayValue={displayValue} />

      <View style={styles.buttons}>
        {labels.map((label) => (
          <Button
            label={label}
            handleCalculate={
              label.action === 'clear'
                ? () => cleanMemory(setDisplayValue)
                : label.action === 'digit'
                ? () => addDigit(label.labelValue)
                : () => setOperation1()
            }
            key={label.labelValue}
          />
        ))}
      </View>
    </View>
  )
}
