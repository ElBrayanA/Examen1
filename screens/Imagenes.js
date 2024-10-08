import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button,Image,View, Switch, SafeAreaView } from 'react-native';
import {ThemeContext} from '../src/context/ThemeContext'



const Imagen = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
         <View style={styles.fixToText}>
     <Button
        title="Press me"
      />
      <Button
        title="Press me"
      />
      <Button
        title="Press me"
      />
      <Button
        title="Press me"
      />
    </View>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
      <StatusBar style="auto" />
      <Switch
        value={theme == 'light'}
        onValueChange={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: 'myColors.light',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


export default Imagen;