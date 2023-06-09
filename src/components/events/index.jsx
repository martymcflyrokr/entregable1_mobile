import { FlatList, View } from "react-native";

import EventItem from "./item";
import React from "react";
import { styles } from "./styles";

const Events = ({ events, onSelectItem }) => {
    const renderItem = ({ item }) => (
        <EventItem item={item} onSelectItem={onSelectItem} />
    );

    const keyExtractor = (item) => item.id;

    return (
        <FlatList 
          renderItem={renderItem}
          data={events}
          keyExtractor={keyExtractor}
          alwaysBounceVertical={false}
        />
    )
};

export default Events;