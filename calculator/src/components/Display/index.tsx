import { Text, View } from 'react-native'

import { styles } from './styles'

interface DisplayProps {
  displayValue: string
}

export const Display = ({ displayValue }: DisplayProps) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {displayValue}
      </Text>
    </View>
  )
}
