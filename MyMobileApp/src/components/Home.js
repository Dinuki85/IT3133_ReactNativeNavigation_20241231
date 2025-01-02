import { useNavigation } from '@react-navigation/native';
import { styleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function Home(){
    return(
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.ScrollView}>
                <View>
                    
                </View>
            </ScrollView>
        </PaperProvider>
    )
}