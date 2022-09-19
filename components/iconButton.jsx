import { Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";


export default function IconButton ({onPress, name, style, size}) {
    return ( <Pressable onPress={onPress}
        style={({pressed})=> pressed ? [style, {opacity: 0.7} ]: style}>
        <AntDesign name={name} color="#fff" size={size}/>
    </Pressable> );
}