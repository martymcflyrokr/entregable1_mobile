import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      marginTop: 55,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    input: {
      width: '80%',
      borderBottomWidth: 1,
      borderBottomColor: '#00a6fb',
      color: '#00a6fb',
    },
    listContainer: {
      flex: 1,
      backgroundColor: '#fff',
      marginVertical: 20,
  },
  itemContainer: {
      height: 80,
      justifyContent: 'center',
      backgroundColor: '#00a6fb',
      borderRadius: 5,
      marginVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
  },
  item: {
      marginHorizontal: 10,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
  });