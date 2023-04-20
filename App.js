import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { useState } from 'react';

export default function App() {


  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAddEvent = () => {
    if (text.length === 0 ) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setText('');
  }

  //te da el id del evento para que lo busque en toda la lista y lo muestre.
  const onHandlerEvent =  (id) => {
    setModalVisible(true);
    const selectedEvent = events.find(event => event.id === id);
    //ese elemento clickeeado es el que esta seleccionado. poor que lo quiero eliminar
    setSelectedEvent(selectedEvent);
  }

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  }

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setModalVisible(!modalVisible);
  }
 

  const renderItem = ({ item }) =>(
    //da la posibilidad de presionar un boton el touchable opacity, te habilita la opcion de onPress para poder clickear
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerEvent(item.id)}>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  )


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Agrega tu evento' 
          style={styles.input} 
          value={text}
          onChangeText={(text)=> setText(text)} 
          />
        <Button title='ADD' color='#00a6fb'
          onPress={onAddEvent} 
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          renderItem={renderItem}
          data= {events}
          keyExtractor= {(item) => item.id}
        />
        {/* {
          events.map((event) => {
            return (
              <View key={event.id} style={styles.itemContainer}>
                <Text style={styles.item}>{event.value}</Text>
                <Text style={styles.item}>Borrar</Text>
              </View>
            )
          })
        } */}
      </View>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Event Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title='Cancel'
              color='#52528C'
              onPress={() => onHandlerCancelModal()}
            />
            <Button 
              title='Delete'
              color='#52528C'
              onPress={() => onHandlerDeleteEvent(selectedEvent.id)}
            />
          </View>
        </View>
        
      </Modal>
    </View>
  );
}


