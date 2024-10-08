import React from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';



const Imagen = () => {
  return (
    
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
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


export default Imagen;