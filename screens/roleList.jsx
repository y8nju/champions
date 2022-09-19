import { FlatList, StyleSheet, View } from "react-native";
import CustomText from "../components/customText";
import {categories} from "../data/data-dummy"
import RoleItem from "../components/roleItem";

export default function RoleList({navigation, route}) {
	const pressHandle = (tag, name) => {
		navigation.navigate('heroList', {tag: tag, role: name})
	}
	
	return (<View style={{marginTop: 10}}>
		<FlatList data={categories}
			keyExtractor={(one)=> one.id}
			numColumns={2}
			renderItem={({idx, item}) => {
				return <RoleItem data={item} onPress={pressHandle}/>
			}}
		/>
	</View>);
}