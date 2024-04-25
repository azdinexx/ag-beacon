import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pen } from '../../assets/icones/Pen';

function TextEdit() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Pen style={styles.svg} />
      </View>
    </View>
  );
}

export default TextEdit;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 30,
    marginBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    width: 20,
    height: 20,
    color: '#42a5f5',
  },
  border: {
    borderWidth: 1,
    borderColor: '#42a5f5',
    padding: 10,
    borderRadius: 15,
  },
});
