import { useEffect, useState, useContext } from "react";
import { View, Pressable, Image, StyleSheet , Dimensions} from "react-native";
import AppContext from "../context/appContext";
import CustomText from "./customText";
import IconButton from "../components/iconButton";

const Width = Dimensions.get('window').width; 

export default function FavItem({data, onPress}) {
    const {favorites, removeFavorite} = useContext(AppContext);

    const defaultVaule  = favorites.includes(data.id);
    const [checked, setChecked] = useState(defaultVaule);
	const pressHandle = () => {

	}
	return (<View style={styles.itemArea}>
		<Pressable  android_ripple={{color: '#111', foreground: true}} 
			onPress={()=> onPress(data)} style={{flex: 1}}>
			<Image source={{uri: data.simpleImage}} style={{flex: 1, width: '100%'}}/>
			<View style={styles.innerArea}>
			<CustomText style={styles.text} type={"gowun"}>{data.name}</CustomText>
			</View>
		</Pressable>
		<IconButton  name={checked ? "star" : "staro" } size={14} onPress={pressHandle} style={styles.chkIcon}/>
		<View style={styles.deco}></View>
	</View> );
}
const styles = StyleSheet.create({
	itemArea: {
		width: (Width-48 -24)/ 3,
		height: 100,
		margin: 4,
		position: 'relative',
		overflow: 'hidden',
	},
	innerArea: {
		alignItems: "flex-end",
		backgroundColor: "#061c25",
		paddingVertical: 6,
		paddingHorizontal: 10,
	},
	text: {
		fontSize: 14,
		color: "#fff",
	},
	deco: {
		width: 20, 
		height: 20, 
		position:"absolute", 
		top: -10, 
		right: -10, 
		zIndex: 15,
		backgroundColor: "#f2f2f2", 
		transform: [{ rotate: "45deg" }],
	},
	chkIcon: {
		position:"absolute", 
		top: 0, 
		left: 0
	}

})