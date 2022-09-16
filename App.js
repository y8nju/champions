import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import RoleList from './screens/roleList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeroList from './screens/heroList';
import HeroDetail from './screens/heroDetail';

const Stack = createNativeStackNavigator();
/* 
	원할한 navigation 효과를 위해 react native 에서는
*/

export default function App() {
	const [fontLoaded] = useFonts({
		'TitilliumRegular': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
		'TitilliumSemiBold': require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
		'GothicA1Light': require('./assets/fonts/GothicA1-Light.ttf'),
		'GothicA1Regular': require('./assets/fonts/GothicA1-Regular.ttf'),
		'GothicA1SemiBold': require('./assets/fonts/GothicA1-SemiBold.ttf'),
		'GowunDodumRegular': require('./assets/fonts/GowunDodum-Regular.ttf')
	})
	if(!fontLoaded) {
		return <></>
	}
	return (<>
		<StatusBar style="dark" />
		<NavigationContainer>
    <Stack.Navigator>
			<Stack.Screen name="roleList" component={RoleList} options={{title: "전체 역할군", headerTitleStyle: {fontFamily: "GowunDodumRegular"}}}/>
			<Stack.Screen name="heroList" component={HeroList} options={{title: "챔피언", headerTitleStyle: {fontFamily: "GowunDodumRegular"}}}/>
			<Stack.Screen name="heroDetail" component={HeroDetail} options={{title: "Hero", headerTitleStyle: {fontFamily: "GowunDodumRegular"}}}/>
		</Stack.Navigator>
	</NavigationContainer>
	</>);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
