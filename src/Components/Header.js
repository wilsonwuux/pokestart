import React from 'react'
import { Container} from 'react-bootstrap'



const Header = () =>
{
    return(
        <Container >
            <Container style={{borderTopRightRadius:' 25px',borderTopLeftRadius:' 25px', border:' 2px solid red'}} className='bg bg-danger'>
                <h1 className='text-white text-center' >POKEDEX</h1>
            </Container>
            <Container style={{marginBottom :'0%'}} className='bg bg-dark'>
                <p className='text-white text-center' style={{marginTop :'0%',marginBottom :'0%'}}>O</p>
            </Container>
            <Container style={{ marginTop :'0%', borderBottomRightRadius:' 25px',borderBottomLeftRadius:' 25px', border:' 2px solid black'}} >
                <h1 className='text-center' >WUUX</h1>
            </Container>
        </Container>
    )
}

export default Header;