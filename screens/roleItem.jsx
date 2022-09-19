import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import CustomText from "../components/customText";

const roleIcon = {
	Assassin: require('../assets/icons/Assassin.jpg'),
	Fighter: require('../assets/icons/Fighter.jpg'),
	Mage: require('../assets/icons/Mage.jpg'),
	Marksman: require('../assets/icons/Marksman.jpg'),
	Support: require('../assets/icons/Support.jpg'),
	Tank: require('../assets/icons/Tank.jpg'),
}
export default function RoleItem ({data, onPress}) {
	const iconName= roleIcon[data.name];
	return ( <View style={styles.itemArea}>
		<Pressable android_ripple={{color: '#111', foreground: true}} style={styles.layer} onPress={()=> onPress(data.name, data.role)}>
			<Image source={iconName} resizeMode="cover" style={{flex:1, width:'100%'}} />
			<View style={styles.innerArea}>
				<CustomText style={styles.text} type={"gowun"}>{data.role}</CustomText>
				<Text style={styles.text}> / </Text>
				<CustomText style={[styles.text]} type={"gowun"}>{data.name}</CustomText>
			</View>
		</Pressable>
			<View style={styles.deco}></View>
	</View> );
}
const styles = StyleSheet.create({
	itemArea: {
		flex: 1,
		height: 230,
		justifyContent: "center",
		position: 'relative',
		margin: 8,
		marginTop: 12,
		overflow: 'hidden',
	},
	layer: {
		flex: 1,
		zIndex: 10,
	},
	innerArea: {
		flexDirection: 'row',
		justifyContent: "flex-end",
		backgroundColor: "#061c25",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
	text: {
		fontSize: 18,
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
	}
})