import { Button, Modal, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete}) => {
    return (
        <Modal visible={isVisible} animationType={animationType}>
        <View style={styles.container}>
          <Text style={styles.title}>Detalle del evento</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.detailMessage}>Estas seguro de cancelar el evento?</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title='Cancelar'
              color='#eb5e28'
              onPress={onCancel}
            />
            <Button 
            title='Eliminar'
            color='#eb5e28'
            onPress={() => onDelete(selectedEvent.id)}
            />
          </View>
        </View>
      </Modal>
    )
};

export default CustomModal;