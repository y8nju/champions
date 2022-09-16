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
		<Pressable android_ripple={{color: '#111'}} style={styles.layer} onPress={()=> onPress(data.name, data.role)}>
			<ImageBackground source={iconName} resizeMode="cover" style={{flex:1}} />
			<View style={styles.innerArea}>
				<CustomText style={styles.text} type={"gowun"}>{data.role}</CustomText>
				<Text style={styles.text}> / </Text>
				<CustomText style={[styles.text]} type={"gowun"}>{data.name}</CustomText>
			</View>
			<View style={styles.deco}></View>
		</Pressable>
	</View> );
}
const styles = StyleSheet.create({
	itemArea: {
		margin: 8,
		marginTop: 12,
		elevation: 1,
		flex: 1,
		justifyContent: "center",
		height: 230,
	},
	layer: {
		flex:1,
		flexDirection: "column",
		position: "relative",
		backgroundColor: "#000"
	},
	innerArea: {
		flexDirection: "row",
		justifyContent: "flex-end",
		textAlign: "center",
		backgroundColor: "#061c25",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
	text: {
		color: "#fff",
		fontSize: 18
	},
	deco: {
		position:"absolute", 
		width: 20, 
		height: 20, 
		top: -10, 
		right: -10, 
		transform: [{ rotate: "45deg" }],
		backgroundColor: "#f2f2f2", 
	}
})