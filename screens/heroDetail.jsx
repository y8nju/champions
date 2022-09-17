import { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import CustomText from "../components/customText";

export default function HeroDetail({navigation, route}) {
    const {data} = route.params
    console.log(data)
    useEffect(() => {
        navigation.setOptions({title: data.name});
    }, [data.name])
    return ( <View style={{flex: 1}}>
        <ImageBackground source={{uri: data.fullImage}} style={styles.detailArea} resizeMode="cover">
            <View style={styles.textArea}>
                <CustomText type={"gowun"} style={[styles.whiteText, {fontSize: 20}]}>{data.title}</CustomText>
                <CustomText weight={600} style={[styles.whiteText, {fontSize: 30, marginBottom: 12}]}>{data.name}</CustomText>
                <CustomText style={[styles.whiteText, {lineHeight: 17}]}>{data.blurb}</CustomText>
            </View>
        </ImageBackground>
    </View> );
}
const styles = StyleSheet.create({
    detailArea: {
        flex:1, 
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingBottom: 32
    },
    textArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    whiteText: {
        color: 'white', 
    }
})