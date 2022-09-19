import { useEffect } from "react";
import { FlatList, Image, View } from "react-native";
import CustomText from "../components/customText";
import { champoions } from "../data/data-dummy";
import HeroItem from "../components/heroItem";

export default function HeroList({navigation, route}) {
    // Stack.screen으로 등록된 화면은 navigation, route porp을 받을 수 있다
    // navigation은 이동, route는 정보
    console.log(route);
    console.log(route.params);
    const {tag, role} = route.params;
    const foundChamps = champoions.filter((one) => one.tags.includes(tag));
    useEffect(() => {
        navigation.setOptions({title: role});
    }, [role])
    const pressHandle = (itemData) => {
        navigation.navigate('heroDetail', {data: itemData})
		// 이동할 name , 객체: 렌더링할 때 전달 route.params으로 전달
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