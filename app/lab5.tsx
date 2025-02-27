import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import CallAPI from '../components/CallAPI';

const Lab5 = () => {
    const [showAPI, setShowAPI] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setShowAPI(!showAPI)}>
                <Text style={styles.buttonText}>
                    {showAPI ? "Submit" : "Submit"}
                </Text>
            </TouchableOpacity>
            {showAPI && <CallAPI />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Lab5;
