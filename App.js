import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import SoundField from './components/SoundField';
import TextEdit from './components/TextEdit';
import Grid from './components/grid';
import Address from './components/Address';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style='auto' />
      <TextEdit />
      <SoundField />
      <Address />
      <Grid>
        <View style={styles.child}>
          <Text>1</Text>
        </View>
        <View style={styles.child}>
          <Text>2</Text>
        </View>

        <View style={styles.child}>
          <Text>3</Text>
        </View>

        <View style={styles.child}>
          <Text>4</Text>
        </View>
      </Grid>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    flexDirection: 'column',
  },
  child: {
    width: '48%', // Adjust based on desired spacing and number of items per row
    height: 100, // Set a fixed height for each item
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
