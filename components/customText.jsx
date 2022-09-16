import { StyleSheet, Text } from "react-native";

function CustomText({children, style, weight, type}) {
	if(!type) {
		if(weight === 300) {
			return (<Text style={[{fontFamily: 'GothicA1Light'}, style]}>{children}</Text>)
		}else if(weight === 600) {
			return (<Text style={[{fontFamily: 'GothicA1SemiBold'}, style]}>{children}</Text>)
		}else if(!weight) {
			return (<Text style={[{fontFamily: 'GothicA1Regular'}, style]}>{children}</Text>)
		}
	} else if(type==="eng") {
		if(!weight) {
			return (<Text style={[{fontFamily: 'TitilliumRegular'}, style]}>{children}</Text>)
		} else if(weight === 600) {
			return (<Text style={[{fontFamily: 'TitilliumSemiBold'}, style]}>{children}</Text>)
		}
	} else if(type==="gowun") {
		if(!weight) {
			return (<Text style={[{fontFamily: 'GowunDodumRegular'}, style]}>{children}</Text>)
		} 
	}
}

export default CustomText;