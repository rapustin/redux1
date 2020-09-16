// une todos los patos..
// en el store, llamamos a los reducer de nuestros patos

import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeDuks'

// combinamos nuestros patos.. (duks)

const rootReducer = combineReducers({ //toma un objeto y lo usamos para leer en el componente // aca van todos nuestros patos
    pokemones: pokeReducer            //nustros pokemones vienen de nuestro pokeReducer
    
})

//habilitar la extencion de redux en el navegador
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // oregunta si tenemos la extencion y sino ocupa el compose

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store; //devolvemos la tienda 
}