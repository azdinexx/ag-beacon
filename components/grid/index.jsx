import { View, Text, StyleSheet } from 'react-native';

function Grid({ children }) {
  return <View style={styles.grid}>{children}</View>;
}

export default Grid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    gap: 10,
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
