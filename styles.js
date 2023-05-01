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
      backgroundColor: '#eb5e28',
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
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: '#eb5e28',
  },
  selectedEvent: {
    fontSize: 14,
    color: '#eb5e28',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  });