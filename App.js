import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {

  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gen, setGen] = useState('male');
  const [pro, setPro] = useState(0);

  function calculate() {
    let res = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let grams2 = grams - weight/10 * time;

    if (gen === 'male') {
      res = grams2 / (weight * 0.7);
    }
    else {
      res = grams2 / (weight * 0.6);
    }

    if (res <= 0)  {
      res = 0;
    }
    
    setPro(res);
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={{fontSize: 30, marginBottom: 10 }}>Alcometer</Text>
        <Text>Weight</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="Enter weight" value={weight} onChangeText={text => setWeight(text)}></TextInput>
      </View>

        <Text>Bottles</Text>
        <DropDownPicker items={[
              { label: '1 bottles', value: 1 },
              { label: '2 bottles', value: 2 },
              { label: '3 bottles', value: 3 },
              { label: '4 bottles', value: 4 },
              { label: '5 bottles', value: 5 },
              { label: '6 bottles', value: 6 },
              { label: '7 bottles', value: 7 },
              { label: '8 bottles', value: 8 },
              { label: '9 bottles', value: 9 },
            ]}
              containerStyle={{ height: 40 }}
              defaultValue={bottles}
              onChangeItem={item => setBottles(item.value)}
              style={styles.dropdown}
              zIndex={5000}
            >
            </DropDownPicker>

            <Text style={{marginTop: 10}}>Time</Text>
            <DropDownPicker items={[
              { label: '1 hours', value: 1 },
              { label: '2 hours', value: 2 },
              { label: '3 hours', value: 3 },
              { label: '4 hours', value: 4 },
              { label: '5 hours', value: 5 },
              { label: '6 hours', value: 6 },
              { label: '7 hours', value: 7 },
              { label: '8 hours', value: 8 },
              { label: '9 hours', value: 9 },
            ]}
              containerStyle={{ height: 40 }}
              defaultValue={time}
              onChangeItem={item => setTime(item.value)}
              style={styles.dropdown}
              zIndex={5000}
            >
            </DropDownPicker>

          <View style={styles.field}>
            <Text style={{marginBottom: 5}}>Gender</Text>
          <RadioForm
            radio_props={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' }
            ]}
            onPress={(value) => {setGen(value)}}
          >
          </RadioForm>
          </View>

        <View style={styles.field}>
          <Text>Promilles</Text>
          <Text style={{marginBottom: 10}}>{pro.toFixed(2)}</Text>

        
        <Button onPress={calculate} title="Calculate"></Button>
        <StatusBar style="auto" />
        </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginRight: 20,
    marginLeft: 10,
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
  },
  dropdown: {
    zIndex: 1000,
  },
  field: {
    marginTop: 10,
  }
});
