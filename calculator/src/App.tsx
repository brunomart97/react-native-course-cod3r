import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { Home } from './screens/Home'

import { styles } from './styles'

export const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Home />
    </SafeAreaView>
  )
}
