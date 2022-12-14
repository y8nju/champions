import { useEffect, useState, useContext } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import CustomText from "../components/customText";
import IconButton from "../components/iconButton";
import AppContext from "../context/appContext";

export default function HeroDetail({navigation, route}) {
    /* App.js에서 value로 넘긴 favorite */
    const {favorites, addFavorite, removeFavorite} = useContext(AppContext);
    const {data} = route.params;
    console.log(data);
    const [tags, setTags] = useState();

    const defaultVaule  = favorites.includes(data.id);
    const [checked, setChecked] = useState(defaultVaule);
    const pressHandle = () => {
        if(checked) {
            removeFavorite(data.id)
            setChecked(false);
        } else {
            addFavorite(data.id)
            setChecked(true);
        }
    }
    useEffect(() => {
        navigation.setOptions({title: data.name,  headerRight: ()=> <IconButton  name={checked ? "star" : "staro" } size={18} onPress={pressHandle}/> });
        const tagArr = [];
        data.tags.forEach((one)=> {
            switch(one) {
                case "Tank":
                    tagArr.push("탱커");
                    break;
                case "Fighter":
                    tagArr.push("전사");
                    break;
                case "Assassin":
                tagArr.push("암살자");
                break;
                case "Mage":
                tagArr.push("마법사");
                break;
                case "Marksman":
                tagArr.push("원거리 딜러");
                break;
                case "Support":
                tagArr.push("서포터");
                break;
            }
        })
        setTags(tagArr);
    }, [data.name, checked]);
    return ( <View style={{flex: 1}}>
        <ImageBackground source={{uri: data.fullImage}} style={styles.detailArea} resizeMode="cover">
            <View style={styles.tagsArea}>
                {tags?.map((one, idx) => <CustomText key={idx} style={styles.tagBox}>{one}</CustomText>)}
            </View>
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
        paddingVertical: 32
    },
    tagsArea: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    tagBox: {
        borderWidth: 1, 
        borderColor: '#fff',
        color: '#fff',
        backgroundColor: '#00000066',
        marginLeft: 8,
        paddingHorizontal: 6,
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