import React from 'react';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap'
import ControlPokes from './ControlPokes'
const PokeNav=({HandleFilter,setSlice,Slice,Newitems})=>{
return <div>
            <br/>
            <Navbar style={{borderRadius:'10px'}} bg="dark" variant="dark">
                <Nav className='mr-auto'>
                    <ControlPokes setSlice={setSlice} Slice={Slice} Newitems={Newitems}/>
                </Nav>
            <Form inline>
                <FormControl onChange={(e)=>HandleFilter(e.target.value,null)} type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            </Navbar>
        </div>
}
export default PokeNav