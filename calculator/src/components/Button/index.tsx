import { Text, TouchableHighlight } from 'react-native'
import type { Label } from '../../typings/Label'

import { styles } from './styles'

interface ButtonProps {
  label: Label
  handleCalculate: () => void
}

export const Button = ({ label, handleCalculate }: ButtonProps) => {
  return (
    <TouchableHighlight onPress={handleCalculate}>
      <Text
        style={[
          styles.defaultButton,
          styles[label.type],
          label.action === 'operation' && styles.operationButton
        ]}
      >
        {label.labelValue}
      </Text>
    </TouchableHighlight>
  )
}
