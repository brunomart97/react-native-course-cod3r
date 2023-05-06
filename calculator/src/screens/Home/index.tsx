import { View } from 'react-native'
import { Button } from '../../components/Button'
import { labels } from '../../constants'

import { styles } from './styles'

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        {labels.map((label) => (
          <Button label={label} key={label} />
        ))}
      </View>
    </View>
  )
}
