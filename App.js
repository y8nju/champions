import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RoleList from './screens/roleList';
import HeroList from './screens/heroList';
import HeroDetail from './screens/heroDetail';
import Favorites from './screens/favList';

import { Provider } from 'react-redux';
import store from './redux/index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Menu() {
	return (<Drawer.Navigator 
		screenOptions={{
			headerTintColor: "#fff",
			headerStyle: {backgroundColor: '#061c25'},
			headerTitleStyle: {fontFamily: "GowunDodumRegular"}, 
			drawerInactiveTintColor: "#fff",
			drawerStyle: {
				backgroundColor: '#061c25', 
			},
			drawerActiveBackgroundColor:  '#52676e',
			drawerActiveTintColor: '#fff'
		}}>
		<Drawer.Screen name="roleList" component={RoleList} 
			options={{title: "챔피언", headerTitleStyle: {fontFamily: "GowunDodumRegular"}, 
				drawerIcon: ({color})=> <Ionicons name='list' size={20} color={color}/>}} />
		<Drawer.Screen name="favorites" component={Favorites} 
			options={{title: "즐겨찾기", headerTitleStyle: {fontFamily: "GowunDodumRegular"}, 
				drawerIcon: ({color})=> <Ionicons name='star' size={20} color={color}/>}} />
	</Drawer.Navigator>);
}
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
			{/* favoritList 관리는 useContext로 함 */}
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='roleList'
					screenOptions={{
						headerTintColor: "white",
						headerStyle: {backgroundColor: '#061c25'},
						headerTitleStyle: {fontFamily: "GowunDodumRegular"}, 
						animation: 'slide_from_right'
					}}>
					<Stack.Screen name="menu" component={Menu} options={{headerShown: false}} />
					<Stack.Screen name="heroList" component={HeroList} options={{title: "챔피언"}}/>
					<Stack.Screen name="heroDetail" component={HeroDetail} options={{title: "Hero"}}/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
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
