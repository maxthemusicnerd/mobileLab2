import { useEffect, useState } from 'react';
import { View, Text} from 'react-native';

const CallAPI = () => {

    const [stuff, setStuff] = useState<string>("");
    useEffect(() => {const makeCall = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts/1"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = response.json();

                //HERE IS WHERE U CAN EDIT THE STRING AND STUFF
                setStuff(prev => prev = JSON.stringify(data));
                console.log(stuff);
            } catch(error) {
                alert(error);
                console.log(error + "HELLO HELLO HELLO");
                throw error;
            }
        }
        makeCall();
    }, []);

    return (
        <View>
            <Text>{stuff}</Text>
        </View>
    );
}

export default CallAPI;