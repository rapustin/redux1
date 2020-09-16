import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion } from '../redux/pokeDuks';

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.array)
    

    return (
        <div>
            listado de pokemones
            <button onClick={() => dispatch(obtenerPokemonesAccion()) } >Get Pokemones</button>
            <button onClick={() => dispatch(siguientePokemonAccion(20)) } >Siguientes 20</button>
            <ul>
                {
                    pokemones.map(poke => (
                        <li key={poke.name}> {poke.name} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
