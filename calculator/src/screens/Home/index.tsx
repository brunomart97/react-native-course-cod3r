import { useState } from 'react'
import { View } from 'react-native'
import { Button } from '../../components/Button'
import { Display } from '../../components/Display'
import { labels } from '../../constants'

import { styles } from './styles'

export const Home = () => {
  const [displayValue, setDisplayValue] = useState('0')

  const addDigit = (
    digit: string,
    setDisplayValue: (displayValue: string) => void
  ) => {
    setDisplayValue(digit)
  }

  const cleanMemory = (setDisplayValue: (displayValue: string) => void) => {
    setDisplayValue('0')
  }

  const setOperation = () => {}

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
                ? () => addDigit(label.labelValue, setDisplayValue)
                : () => setOperation()
            }
            key={label.labelValue}
          />
        ))}
      </View>
    </View>
  )
}
