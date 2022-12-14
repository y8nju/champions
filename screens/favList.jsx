import {useContext, useEffect} from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import CustomText from "../components/customText";
import FavItem from '../components/favItem';
import AppContext from '../context/appContext';
import { champoions } from '../data/data-dummy';


export default function  Favorites({navigation, route}) {
    const { favorites } = useContext(AppContext);
    const favChams = champoions.filter((one)=> favorites.includes(one.id));
    console.log('list', favChams)
    const pressHandle = (itemData) => {
        navigation.navigate('heroDetail', {data: itemData})
    }
    useEffect(()=> {
        navigation.setOptions({title: `즐겨찾기(${favChams.length})` });
    })

    return ( <View style={styles.favListArea}>
		<FlatList data={favChams}
			keyExtractor={(one)=> one.index}
			renderItem={({item}) => {
				return <FavItem data={item} onPress={pressHandle} />
			}}
            numColumns={3}
		/>
    </View> );
}
const styles = StyleSheet.create({
    favListArea: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 32
    }
})