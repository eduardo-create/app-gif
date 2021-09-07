import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }


    //mando mediante las prop el valor del input al componente gif, donde quiero que se rendericen las entradas 
    const handleSubmit = (e) => {
        e.preventDefault();

        //validar que el campo no este vacio
        if( inputValue.trim().length > 2){
            setCategories( cat => [ inputValue, ...cat ]);
            setInputValue('');
        }
       

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
             />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}