import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Agrega tu evento' style={styles.input} />
        <Button title='ADD' color='#00a6fb' />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Pagar la tarjeta</Text>
          <Text style={styles.item}>Borrar</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Comprar cosas</Text>
          <Text style={styles.item}>Borrar</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Vender cosas</Text>
          <Text style={styles.item}>Borrar</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Comprar mas cosas</Text>
          <Text style={styles.item}>Borrar</Text>
        </View>
      </View>
    </View>
  );
}


