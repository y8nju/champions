import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CustomText from "../components/customText";
import {Dimensions} from 'react-native';
const Width = Dimensions.get('window').width; 

export default function HeroItem ({data, onPress}) {

	return (<View style={styles.itemArea}>
		<Pressable style={styles.layer} android_ripple={{color: "#111", foreground: true}} onPress={()=> onPress(data)}>
			<Image source={{uri: data.simpleImage}} style={{flex: 1, width: '100%'}} />
			<View>
				<View style={styles.innerArea}>
					<CustomText style={styles.text} type={"gowun"}>{data.name}</CustomText>
				</View>
			</View>
		</Pressable>
		<View style={styles.deco}></View>
	</View>  );
}
const styles = StyleSheet.create({
	itemArea: {
		flex: 1,
		width: (Width-32) / 2,
		height: 200,
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
		alignItems: "flex-end",
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