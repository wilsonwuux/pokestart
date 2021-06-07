import React from 'react';
import {Button,ButtonGroup} from 'react-bootstrap'

const ControlPokes=({setSlice,Slice,Newitems})=>{
    return <ButtonGroup className=' col-auto ' aria-label="Basic example">
                <Button onClick={()=>{(Newitems.length&&(Newitems.length>=5))?setSlice(Slice-10):alert('No hay mas elementos' )}} variant="danger"> 
                    <i className='fa fa-minus'></i>
                </Button>
                    <Button variant="dark"> POKEMONS </Button>
                <Button onClick={()=>{(Slice===942)?alert('Todos los datos fueron cargados'):setSlice(Slice+10)}} variant="success">
                    <i className='fa fa-plus'></i>
                </Button>
        </ButtonGroup>
}
export default ControlPokes