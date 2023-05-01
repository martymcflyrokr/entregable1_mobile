import { Button, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CustomModal, Events, Input } from './components/index';

import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setText('');
  }

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find(event => event.id === id);
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



  return (
    <View style={styles.container}>
      <Input 
        buttonColor='#eb5e28'
        buttonTitle='Add'
        onChangeText={(text) => setText(text)}
        onHandlerButton={onAddEvent}
        placeholder='Ingresa tu evento' 
        value={text}
      />
      <Events events={events} onSelectItem={onHandlerEvent} />
      <CustomModal 
        isVisible={modalVisible} 
        animationType='slide' 
        onCancel={onHandlerCancelModal} 
        onDelete={onHandlerDeleteEvent} 
        selectedEvent={selectedEvent}  
      />
    </View>
  );
}
