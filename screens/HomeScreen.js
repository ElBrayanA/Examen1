import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
      paddingTop: 90,
    },
    tinyLogo: {
      width: 1000,
      height: 1000,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

const HomeScreen = () => {

    return (
        <View>
            <Text
                style={{
                    fontSize: 24,
                    textAlign: "center",
                }}
            >Cristiano Ronaldo</Text>
            <Image
             style={styles.tinyLogo}
            source={{
                uri: 'https://images.ecestaticos.com/mXiaMzhISsDQH7Ki2YqTyi3XcCc=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F36a%2Fe15%2F4ac%2F36ae154acded8663e9bd0402a78ab17f.jpg',
        }}
      />
        </View>
    );
    
}

export default HomeScreen;

