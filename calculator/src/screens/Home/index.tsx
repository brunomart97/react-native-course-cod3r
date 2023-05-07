import { useState } from 'react'
import { View } from 'react-native'
import { Button } from '../../components/Button'
import { Display } from '../../components/Display'
import { labels } from '../../constants'

import { styles } from './styles'

export const Home = () => {
  const [displayValue, setDisplayValue] = useState('0')

  return (
    <View style={styles.container}>
      <Display displayValue={displayValue} />

      <View style={styles.buttons}>
        {labels.map((label) => (
          <Button label={label} key={label} />
        ))}
      </View>
    </View>
  )
}
