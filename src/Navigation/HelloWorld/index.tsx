import React from 'react';
import * as RN from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HelloWorld = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RN.Text style={styles.headline}>Hello, world!</RN.Text>
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
});

export default HelloWorld;
