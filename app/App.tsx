import { JSX } from 'react';
import { Text, View } from 'react-native';

import styles from './App.styles';

const App = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Hello World</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
            </View>
        </View>
    );
};

export default App;
