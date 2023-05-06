import { Text, TouchableHighlight } from 'react-native'

import { styles } from './styles'

interface ButtonProps {
  label: string
}

const handleCalculate = () => null

export const Button = ({ label }: ButtonProps) => {
  return (
    <TouchableHighlight onPress={handleCalculate}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableHighlight>
  )
}
