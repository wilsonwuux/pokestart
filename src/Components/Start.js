import React,{useEffect, useState} from 'react';
import {Container} from 'react-bootstrap'
import {GetPokes} from '../Services/CallApis'
import CardPokes from './PokeContent'
const Start=()=>{
    const [pokes,setPokes]=useState([])

useEffect(()=>{
    GetPokesFetch()
},[])

const GetPokesFetch =async()=>{
    let Datapokes= await GetPokes()
    setPokes(Datapokes)
}
    return <Container>
                <CardPokes pokes={pokes}/>
            </Container>
}

export default Start