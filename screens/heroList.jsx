import { useEffect } from "react";
import { FlatList, Image, View } from "react-native";
import CustomText from "../components/customText";
import { champoions } from "../data/data-dummy";
import HeroItem from "./heroItem";
// Stack.screen, navigation, route porp을 받을 수 있다
export default function HeroList({navigation, route}) {
    // navigation은 이동, route는 정보
    const {tag, role} = route.params;
    console.log(route.params)
    const foundChamps = champoions.filter((one) => one.tags.includes(tag));
    useEffect(() => {
        navigation.setOptions({title: role});
    }, [role])
    const pressHandle = (itemData) => {
        navigation.navigate('heroDetail', {data: itemData})
    }
    const makeChampItem = (itemData) => {
        const {item} = itemData;
        return <HeroItem data={item} onPress={pressHandle}/>
    }
    return ( <View style={{flex: 1}}>
        <FlatList data={foundChamps}
        renderItem={makeChampItem}
        numColumns={2}/>
    </View> );
}