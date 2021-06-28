import React from 'react';
import * as RN from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getCounter, add} from '@Redux/Stores/Common';

const HelloWorld = () => {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <RN.Text style={styles.headline}>Hello, world!</RN.Text>
      <RN.Text style={styles.counter}>{counter}</RN.Text>
      <RN.Button title="+" onPress={() => dispatch(add())} />
    </SafeAreaView>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  headline: {
    fontWeight: 'bold',
    fontSize: 32,
  },

  counter: {
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default HelloWorld;
