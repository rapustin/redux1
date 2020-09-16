import axios from 'axios';

// constantes o estado ( lista para consumir desde react )

const dataInicial = {
    array: [],
    offset: 0
}

//types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO' //type que desde nuestro switch viajara al array
const OBTENER_POKEMONES_SIGUIENTE = 'OBTENER_POKEMONES_SIGUIENTE'

// reducer ( aceptar la lista y la envia a una constante o estado )

export default function pokeReducer(state = dataInicial , action) {
    switch(action.type){ //basicamente es una condicional de cambio.. swichea entre opciones // los types tambien los declaramos
        case OBTENER_POKEMONES_EXITO:
            return  {
                ...state, array: action.payload
            }
        case OBTENER_POKEMONES_SIGUIENTE:
            return {
                ...state, array: action.payload.array, offset: action.payload.offset
            }
            default:
                return state
    }
}

// Acciones ( La accion va a consu
export const obtenerPokemonesAccion = () => async (dispatch, getState) => { //en la primer funcion de flecha recibimos los parametros a enviar // y la segunda funcion necesita uyn dispatch que activa el reducer y con getState obtenemos la data inicial

    const {offset} = getState().pokemones
    

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }

}


export const siguientePokemonAccion = (numero) => async (dispatch, getState) => {

    const {offset} = getState().pokemones
    const siguiente = offset + numero

    try { //prueba
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_SIGUIENTE,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}