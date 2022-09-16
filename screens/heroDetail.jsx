import { useEffect } from "react";
import { View } from "react-native";

export default function HeroDetail({navigation, route}) {
    const {data} = route.params
    useEffect(() => {
        navigation.setOptions({title: data.name});
    }, [data.name])
    return ( <View>

    </View> );
}