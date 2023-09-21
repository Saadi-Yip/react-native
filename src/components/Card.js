import React from "react";
import { Button, Text, View } from "react-native";

const Card = ( props ) => {
  console.warn(props);
  return (
    <View>
      <Text>{props.name}</Text>
      <Button title = "Press" onPress={()=>props.setName('ahsan Shabbir')}></Button>
    </View>
  );
};

export default Card;
