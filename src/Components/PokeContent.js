import React,{useState} from 'react';
import {Container,Row,Card,Col,Modal,Form} from 'react-bootstrap'
import NavBar from './NavBar'

const CardPokes = ({pokes})=>{
const [Slice,setSlice]=useState(12);
const [filter,setFilter]=useState('');
const [show, setShow] = useState(false);
const [Color,setColor]=useState(0);
const [BgColor,setBgColor]=useState('');
const [weekColor,setWeekColor]=useState('');
const [DataPokemonContent,setDatapokemonContent]=useState(0);
const handleClose = () => setShow(false);
const handleShow = (element) => {
    setShow(true)
    setDatapokemonContent(element)
}

let items = pokes;
let Newitems = items.slice(0,Slice);

const HandleFilter=(e)=>{
    setFilter(e)
}

const FilterContent=()=>{
    if(filter==''){return <GetDataPokes/>}
    else{return <GetFilterPokes namePoke={filter}/>}
}

const GetFilterPokes= ({namePoke})=>{
    let data = items;
    let count=1
    const Newpokes=[]
    for(let i=0;i<=data.length -1;i++){
        if(data[i].id==count){
            if(data[i].id==count++){
                Newpokes.push(data[i])
            }
        }
    } 
    return <Container className='m-0 row justify-content-center' >{Newpokes.map((element,index)=>(namePoke.toUpperCase()==element.name.toUpperCase()||namePoke==element.id)?<Card 
    onClick={()=>handleShow(element)}
    className='btn col-auto'
    key={index} style={{ 
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius:'25px',
    marginTop:'0px', 
    height:"7rem", 
    width: '18rem',
    display:'inline-block',
    margin:'4px'}}>
            <Row>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text> # {element.number} </Card.Text>
                        </Col>
                        <Col>
                            <Card.Img style={{ height:"5rem", width: '5rem',}} variant="top" src={element.ThumbnailImage} />
                        </Col>
                    </Row>
                </Card.Body>
            </Row>
        </Card>:''
    )}
    </Container>
}

const GetDataPokes=()=>{
let data = Newitems;
let count=1;
const Newpokes=[];
    for(let i=0;i<=data.length -1;i++){
        if(data[i].id==count){
            if(data[i].id==count++){
                Newpokes.push(data[i])
            }
        }
    } 
return <Container className='m-0 row justify-content-center' >
{Newpokes.map((element,index)=>{
    return<Card onClick={(e)=>handleShow(element)}
    className='btn col-auto'
    key={index} style={{ 
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius:'25px',
    marginTop:'0px', 
    height:"7rem", 
    width: '18rem',
    display:'inline-block',
    margin:'4px'}}>
            <Row>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text> # {element.number} </Card.Text>
                        </Col>
                        <Col>
                            <Card.Img style={{ height:"5rem", width: '5rem'}} variant="top" src={element.ThumbnailImage} />
                        </Col>
                    </Row>
                </Card.Body>
            </Row>
        </Card>
        })}
    </Container>
}

const TypesPokemon =['steel',	
    'water',	
    'bug',	
    'dragon',	
    'electric',	
    'ghost',	
    'fire',	
    'fairy',	
    'ice',	
    'fighting',	
    'normal',	
    'grass',
    'psychic',	
    'rock',
    'dark',	
    'ground',	
    'poison',	
    'flying']

const TypesColorPokemon =['#A8A8C0',	
    '#3899F8',	
    '#A8B820',	
    '#7860E0',	
    '#F8D030',	
    '#6060B0',	
    '#F05030',	
    '#E79FE7',	
    '#58C8E0',	
    '#A05038',	
    '#A8A090',	
    '#78C850',
    '#F870A0',	
    '#B8A058',
    '#7A5848',	
    '#E9D6A4',	
    '#B058A0',	
    '#98A8F0']

const StyleContentType=(pokeContent,pokeType,ColorTypes)=>{
    pokeType.map((element,index)=>{
        if(pokeContent.type && element ==pokeContent.type[0]){
            setColor(index)
        }
    })
    setBgColor(ColorTypes[Color])
}

const DataPokesContent=({PokemonContent})=>{
    console.log(PokemonContent)
    StyleContentType(PokemonContent,TypesPokemon,TypesColorPokemon)
    return <Modal size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <h3 className='mr-4'>
                    #{PokemonContent.number}
                </h3>
                <h3 className='mr-4'>
                    {PokemonContent.name}
                </h3>
                <h6>
                    <Container className='text-center mb-2'>
                        Tipo
                    </Container>
                        <Row >{
                            PokemonContent.type.map((element)=>{
                            let NewColorTypes=[]
                            const array1 = TypesPokemon;
                            const found = array1.find((type)=> type == element.toLowerCase());
                            const indice = array1.indexOf(found);
                            NewColorTypes.push(TypesColorPokemon[indice])
                            return <div className='col-auto text-center' >
                                    <p>
                                        {NewColorTypes.map((color)=><p 
                                        className='col-auto text-center' style={{
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                        borderRadius:'25px',
                                        height:"2rem", 
                                        backgroundColor:`${color}`}} >{element}
                                        </p>)}
                                    </p>
                                </div>
                            })}
                        </Row>
                </h6>
            </Modal.Header>
                <Modal.Body style={{backgroundColor:`${BgColor}`}} >
                    <Row className='justify-content-center'>
                        <Col className='col-auto' >
                            <Card.Img style={{borderRadius:'100px',backgroundColor:'white', height:"9rem", width: '9rem'}} variant="top" src={PokemonContent.ThumbnailImage} />
                        </Col>
                            <Col className='col-auto' >
                            <p>ESPECIAL:</p>
                            <p>ALTURA:</p>
                            <p>PESO:</p> 
                        </Col>
                        <Col className='col-auto' >
                            <Form.Control readOnly value={PokemonContent.abilities}/>
                            <Form.Control readOnly value={PokemonContent.height}/>
                            <Form.Control readOnly value={PokemonContent.weight}/>
                        </Col>
                    </Row>
                </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Container className='text-center'>
                    <h3>DEBILIDAD</h3>
                </Container>
                    <Row >{
                        PokemonContent.weakness.map((element)=>{
                            let NewColorTypes=[]
                            const array1 = TypesPokemon;
                            const found = array1.find((type)=> type == element.toLowerCase());
                            const indice = array1.indexOf(found);
                            NewColorTypes.push(TypesColorPokemon[indice])
                            return <div className='col-auto text-center' >
                            <p>
                                {NewColorTypes.map((color)=><p className='col-auto text-center' style={{
                                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                    borderRadius:'25px',
                                    height:"2rem", 
                                    backgroundColor:`${color}`}} >{element}</p>)}
                            </p>
                            </div>
                        })}
                    </Row>
            </Modal.Footer>
        </Modal>
}

console.log(Newitems)
    return <Container className='m-0 row justify-content-center' >
    <NavBar HandleFilter={HandleFilter} setSlice={setSlice} Slice={Slice} Newitems={Newitems}/>
         {(DataPokemonContent==0)?'':<DataPokesContent PokemonContent={DataPokemonContent}/> }
            <Row>
                <br/>
            </Row>
        <FilterContent/>
    </Container>
}

export default CardPokes 
