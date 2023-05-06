import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  buttonText: {
    fontSize: 40,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  }
})
