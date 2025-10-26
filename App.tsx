import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  const handlePress = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧮 Kalkulator</Text>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input || '0'}</Text>
      </View>

      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button) => (
            <TouchableOpacity
              key={button}
              style={[styles.button, button === '=' ? styles.equalsButton : null]}
              onPress={() => {
                if (button === '=') {
                  handleCalculate();
                } else {
                  handlePress(button);
                }
              }}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearText}>C</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // background gelap seperti iPhone
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  displayContainer: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    minHeight: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 60,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    backgroundColor: '#333', // tombol angka gelap
    margin: 5,
    paddingVertical: 25,
    borderRadius: 50, // bulat
    alignItems: 'center',
    justifyContent: 'center',
  },
  operatorButton: {
    backgroundColor: '#ff9500', // tombol operasi oranye
  },
  equalsButton: {
    backgroundColor: '#ff9500',
    flex: 2, // "=" lebih panjang
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
  },
  clearButton: {
    backgroundColor: '#a6a6a6', // tombol C abu terang
    paddingVertical: 25,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
});

