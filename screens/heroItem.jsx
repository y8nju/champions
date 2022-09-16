import { Image, Pressable, StyleSheet, View } from "react-native";
import CustomText from "../components/customText";
import {Dimensions} from 'react-native';
const Width = Dimensions.get('window').width; 

export default function HeroItem ({data, onPress}) {

	return (<View style={styles.itemArea}>
		<Pressable style={styles.layer} android_ripple={{color: "#000"}} onPress={()=> onPress(data)}>
			<View style={{flex:1}}>
				<Image source={{uri: data.simpleImage}} style={{flex: 1}} />
				<View style={styles.innerArea}>
					<CustomText style={styles.text} type={"gowun"}>{data.name}</CustomText>
				</View>
				<View style={styles.deco}></View>
			</View>
		</Pressable>
	</View>  );
}
const styles = StyleSheet.create({
	itemArea: {
		width: (Width-32) / 2,
		margin: 8,
		marginTop: 12,
		elevation: 4,
		justifyContent: "center",
		height: 200,
	},
	layer: {
		flex:1,
		flexDirection: "column",
		position: "relative",
		backgroundColor: "#fff"
	},
	innerArea: {
		alignItems: "flex-end",
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