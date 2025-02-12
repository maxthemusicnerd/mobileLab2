
import vacations from '../constants/list_items.ts';
import { StyleSheet, Text, View, Button, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { useState } from 'react';



const Lab4 = () => {
    const [checkmark, setCheckmark] = useState('');
    const handlePress = () => {
        setCheckmark(prevCheckmark => prevCheckmark === '' ? "\u2705": '')
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={vacations}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={handlePress}>
                        <Text style={styles.location}>{item.location}</Text>
                        <Text style={styles.details}>{checkmark}</Text>
                        <Text style={styles.details}>Price: ${item.price}</Text>
                        <Text style={styles.details}>Avg Temp: {item.average_yearly_temperature}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#37F093',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    card: {
      backgroundColor: "white",
      padding: 15,
      marginVertical: 8,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    location: {
      fontSize: 18,
      fontWeight: "bold",
    },
    details: {
      fontSize: 14,
      color: "gray",
    },
  });

export default Lab4;