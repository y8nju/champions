import React, {useState} from 'react';
const AppContext = React.createContext({
    favorit: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});
export function AppContextProvider ({children}) {
    const [favorites, setFavorites] = useState([]);
	
	const addFavorite = (id) => {
		setFavorites((curr) => [...curr, id]);
	}
	const removeFavorite = (id) => {
		setFavorites((curr) => curr.filter((one) => one !== id))
	}
    return (<AppContext.Provider value={{favorites, addFavorite, removeFavorite}}>
        {children}
    </AppContext.Provider>)
}
export default AppContext;