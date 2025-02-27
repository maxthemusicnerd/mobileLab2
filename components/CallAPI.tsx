import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CallAPI = () => {
    const [stuff, setStuff] = useState<string>("");

    useEffect(() => {
        const makeCall = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();

                const formattedText = Object.entries(data)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join(",\n");

                setStuff(formattedText);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        };
        makeCall();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{stuff}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontSize: 16,
        textAlign: "left",
    },
});

export default CallAPI;
