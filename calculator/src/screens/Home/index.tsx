import { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Button } from '../../components/Button'
import { Display } from '../../components/Display'
import { labels } from '../../constants'

import { styles } from './styles'

export const Home = () => {
  const [displayValue, setDisplayValue] = useState<string>('0')
  const [calculate, setCalculate] = useState<boolean>(false)

  useEffect(() => {
    try {
      const currentResult: number = eval(displayValue)
      setDisplayValue(String(currentResult))
      setCalculate(false)
    } catch (error) {
      cleanMemory()
    }
  }, [calculate])

  const addDigit = (buttonDigit: string) => {
    setDisplayValue(
      displayValue === '0' ? buttonDigit : `${displayValue}${buttonDigit}`
    )
  }

  const operationAction = (buttonOperation: string) => {
    if (buttonOperation === '=') {
      setCalculate(true)
      return
    }

    setDisplayValue(`${displayValue}${buttonOperation}`)
  }

  const cleanMemory = () => {
    setDisplayValue('0')
    setCalculate(false)
  }

  return (
    <View style={styles.container}>
      <Display displayValue={displayValue} />

      <View style={styles.buttons}>
        {labels.map((label) => (
          <Button
            label={label}
            handleCalculate={
              label.action === 'clear'
                ? () => cleanMemory()
                : label.action === 'digit'
                ? () => addDigit(label.labelValue)
                : () => operationAction(label.labelValue)
            }
            key={label.labelValue}
          />
        ))}
      </View>
    </View>
  )
}
