import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, TextInput} from 'react-native';

function App(): JSX.Element {
  const [text, setText] = useState('');

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.textInput}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
});

export default App;
