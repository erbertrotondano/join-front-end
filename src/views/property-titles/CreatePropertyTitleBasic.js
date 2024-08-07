// ** React Imports
import api from "../../../src/services/api";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { NumericFormat } from 'react-number-format';
import cpfMask from '../../../src/helpers/CpfMask';
import isCpfValid from '../../../src/helpers/CpfValidator';
import registrationNumberMask from '../../../src/helpers/RegistrationNumberMask';
import ReactPhoneInput from 'react-phone-input-material-ui';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const CreatePropertyTitleBasic = ({ 
	id, 
	method = 'POST',
	prop_number, 
	prop_doorNumber,
	prop_registrationNumber,
	prop_ownerId,
	prop_streetId,
	prop_block,
	prop_rooms,
	prop_roomsNotes,
	prop_isHouse,
	prop_propertyType,
	prop_floors,
	prop_terrainArea,
	prop_constructedArea,
	prop_quality,
	
}) => {
	const router = useRouter();

  // States
  const [number, setNumber] = useState(prop_number || null);
  const [doorNumber, setDoorNumber] = useState(prop_doorNumber || null);
  const [registrationNumber, setRegistrationNumber] = useState(prop_registrationNumber || null);
  const [ownerId, setOwnerId] = useState(prop_ownerId || null);
  const [streetId, setStreetId] = useState(prop_streetId || null);
  const [streets, setStreets] = useState([]);
  const [block, setBlock] = useState(prop_block || null);
  const [rooms, setRooms] = useState(prop_rooms || null);
  const [roomsNotes, setRoomsNotes] = useState(prop_roomsNotes || null);
  const [isHouse, setIsHouse] = useState(prop_isHouse || false);
  const [propertyType, setPropertyType] = useState(prop_propertyType || 'Casa');
  const [floors, setFloors] = useState(prop_floors || 0);
  const [terrainArea, setTerrainArea] = useState(prop_terrainArea || 0);
  const [constructedArea, setConstructedArea] = useState(prop_constructedArea || 0);
  const [quality, setQuality] = useState(prop_quality || 'Regular');
  const [ownerCpf, setOwnerCpf] = useState(router.query.ownerCpf);

 
  const [isFormSubmitted, setFormSubmitted]= useState(false);
  const [requestMethod, setMethod] = useState(method);
  const [isMarried, setMarried] = useState(false);
  const [ownerAlreadyExists, setOwnerAlreadyExists] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  	const terrain = {
  		number: number,
			door_number: doorNumber,
			registration_number: registrationNumber,
			owner_id: ownerId,
			street_id: streetId,
			streets: streets,
			block: block,
			rooms: rooms,
			rooms_notes: roomsNotes,
			isHouse: isHouse,
			property_type: propertyType,
			floors: floors,
			terrain_area: terrainArea,
			constructed_area: constructedArea,
			quality: quality,
  	}
  	// Usado pra triggar o useEffect
    setFormSubmitted(true);
    // HTTP stuff
    if(requestMethod === 'POST'){
        api
          .post('terrenos', terrain)
          .then((response) => {
            router.push({
              pathname: '/titulos',
              query: { terrain_number: terrain.number },
            });
          }).catch((error) => {
            console.log(error)
          })
      } else if(requestMethod === 'PUT'){
        api
          .put(`terrenos/${ownerId}`, terrain)
          .then((response) => {
            // router.push({
            //   pathname: '/products',
            //   // query: { isProductRecentlyUpdated: true },
            // });
          }).catch((error) => {
            console.log(error)
          })
      }
    
    
  };

  const handleNumberChange = (e) => {
    setNumber(e.value);
  };

  const handleDoorNumberChange = (e) => {
    setDoorNumber(e.value);
  };

  const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(registrationNumberMask(e.target.value));
  };

  const handleCpfChange = (e) => {
    setCpf(cpfMask(e.target.value))
  };

  const handleStreetChange = (e) => {
  	setStreetId(e.target.value);
  }

  const handleTerrainAreaChange = (e) => {
  	setTerrainArea(e.value);
  	console.log(e.value);
  }

  const handlePropertyTypeChange = (e) => {
  	setPropertyType(e.target.value);
  	setIsHouse(true)
  	if(e.target.value !== 'Casa'){
  		setIsHouse(false);
  	} else {
  		setIsHouse(true)
  	}
  	
  }

  const handleConstructedAreaChange = (field) => {
  	setConstructedArea(field.value)
  	
  	//TODO: 
  	// if(constructedArea > terrainArea){
  	// 	console.log('era pra ter snackbar')
  	// 	setErrorMsg('A Área Construída não pode ser maior que a Área do Terreno');
  	// 	setOpenSnackbar(true);
  	// }
  }

  const handleFloorChange = (e) => {
  	setFloors(e.value);
  }

  const handleRoomsChange = (e) => {
  	setRooms(e.value);	
  }

  const handleQualityChange = (e) => {
  	setQuality(e.target.value)
  }

  const nationalities = ['Brasileiro'];
  const propertyTypes = ['Terreno', 'Casa', 'Comércio', 'Outro']
  const qualities = ['Precário', 'Regular', 'Bom', 'Ótimo']
  
  const renderStreets = () => {
  	let streetsToRender = streets.map((street, index) => (
  			<MenuItem key={index} value={street.id}>{street.name}</MenuItem>
  		))
  	return streetsToRender;
  }
	const renderPropertyTypes = () => {
  	let propertyTypesToRender = propertyTypes.map((type, index) => (
  			<MenuItem key={index} value={type}>{type}</MenuItem>
  		))
  	return propertyTypesToRender;
  }

  const renderQualities = () => {
  	let qualitiesToRender = qualities.map((quality, index) => 
        (
          <MenuItem key={index} value={quality}>{quality}</MenuItem>
      ))
      return qualitiesToRender;
  }

  const renderSubmitBtn = () => {
  	if(ownerAlreadyExists){
  		return(
  			<Button type='submit' variant='contained' size='large'>
              Prosseguir para dados do terreno 
            </Button>	  
  		);
  	} else {
  		return (
  			<Button type='submit' variant='contained' size='large'>
              Cadastrar Proprietário
            </Button>
		)
  	}
                
  }

  const handleClose = () => {setOpenSnackbar(false)}
  
  useEffect(() => {
        const getStreets = () => {
        api
          .get('ruas/')
          .then((response) => { 
            setStreets(response.data) 
          })
          .catch((err) => { console.error('Aconteceu alguma coisa', err) })
      }
      getStreets();
      setOwnerCpf(router.query.ownerCpf);
      console.log(router);
  }, []);

  return (
    <Card>
      <CardHeader title='Dados do Reurb' titleTypographyProps={{ variant: 'h6' }}/>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={4}>
			 				<TextField 
	              fullWidth 
	              required
	              label='Número de Inscrição' 
	              onChange={handleRegistrationNumberChange}
	              value={registrationNumber}
              />
            </Grid>
            <Grid item xs={2}>
              <NumericFormat 
                  customInput={TextField}
                  fullWidth
                  label='Nº de Lote'
                  decimalScale={0}
                  required
                  placeholder='Somente números'
                  allowNegative={false}
                  allowLeadingZeros={false}
                  onValueChange={handleNumberChange}
                  value={number}
              />
            </Grid>
             <Grid item xs={2}>
             	<NumericFormat 
                  customInput={TextField}
                  fullWidth
                  label='Nº de Porta'
                  decimalScale={0}
                  required
                  placeholder='Somente números'
                  allowNegative={false}
                  allowLeadingZeros={false}
                  onValueChange={handleDoorNumberChange}
                  value={doorNumber}
              />
            </Grid>
            <Grid item xs={4}>
             	<Select
                  label='Situação do Imóvel'
                  required
                  fullWidth
                  displayEmpty={true}
									renderValue={quality => quality?.length ? Array.isArray(quality) ? quality.join(', ') : quality : 'Situação*'}
                  id='form-layouts-separator-select-civil_state'
                  labelId='form-layouts-separator-select-label-civil_state'
                  onChange={handleQualityChange}
                  value={quality} 
                >
                  {renderQualities()}
                </Select>
            </Grid>
            <Grid item xs={12}>
            <InputLabel>CPF do Proprietário:</InputLabel>
              <TextField 
	              fullWidth 
	              disabled
	              value={ownerCpf}
              />
            </Grid>
            
            <Grid item xs={3}>
                <Select
                  label='Rua'
                  required
                  fullWidth
                  displayEmpty={true}
									// renderValue={streetId => streetId?.length ? Array.isArray(streetId) ? streetId.join(', ') : streetId : 'Rua*'}
                  id='form-layouts-separator-select-civil_state'
                  labelId='form-layouts-separator-select-label-civil_state'
                  onChange={handleStreetChange}
                  value={streetId} 
                >
                  {renderStreets()}
                </Select>
            </Grid>
            <Grid item xs={3}>
                <Select
                  label='Tipo de Imóvel'
                  required
                  fullWidth
                  displayEmpty={true}
									// renderValue={streetId => streetId?.length ? Array.isArray(streetId) ? streetId.join(', ') : streetId : 'Rua*'}
                  id='form-layouts-separator-select-civil_state'
                  labelId='form-layouts-separator-select-label-civil_state'
                  onChange={handlePropertyTypeChange}
                  value={propertyType} 
                >
                  {renderPropertyTypes()}
                </Select>
            </Grid>
            <Grid item xs={2}>
                <TextField 
	              fullWidth 
	              required
	              label='Quadra' 
	              placeholder='Ex: RC10' 
	              onChange={(e) => setBlock(e.target.value)}
	              value={block}
	              />
            </Grid>
            <Grid item xs={2}>
                <NumericFormat 
                  customInput={TextField}
                  fullWidth
                  label='Nº Pavimentos'
                  decimalScale={0}
                  required
                  placeholder='Somente números'
                  allowNegative={false}
                  allowLeadingZeros={false}
                  onValueChange={handleFloorChange}
                  value={floors}
              	/>
            </Grid>
            <Grid item xs={2}>
                <NumericFormat 
                  customInput={TextField}
                  fullWidth
                  label='Cômodos'
                  decimalScale={0}
                  required
                  placeholder='Somente números'
                  allowNegative={false}
                  allowLeadingZeros={false}
                  onValueChange={handleRoomsChange}
                  value={rooms}
              	/>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
	              <Grid container spacing={5}>
	                <Grid item xs={12}>
		              <TextField 
		              fullWidth 
		              multiline
		              minRows={3}
		              label='Observações dos cômodos' 
		              placeholder='Ex: 2 quartos, 1 sala, 2 banheiros' 
		              onChange={(e) => setRoomsNotes(e.target.value)}
		              value={roomsNotes}
		              />
		            </Grid>
		            <Grid item xs={6}>
		              <NumericFormat 
	                  customInput={TextField}
	                  fullWidth
	                  label='Área do terreno em metros quadrados'
	                  decimalScale={2}
	                  required
	                  allowNegative={false}
	                  allowLeadingZeros={false}
	                  onValueChange={handleTerrainAreaChange}
	                  value={terrainArea}
	              	/>
		            </Grid>

		            <Grid item xs={6}>
		              <NumericFormat 
	                  customInput={TextField}
	                  fullWidth
	                  label='Área construída em metros quadrados'
	                  decimalScale={2}
	                  required
	                  allowNegative={false}
	                  allowLeadingZeros={false}
	                  onValueChange={handleConstructedAreaChange}
	                  value={constructedArea}
	              	/>
		            </Grid>

		           </Grid>
              </FormControl>
			</Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                {renderSubmitBtn()}
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Snackbar
			  open={openSnackbar}
			  autoHideDuration={3000}
			  onClose={handleClose}>
					<MuiAlert 
					onClose={handleClose} 
					severity="error"
					elevation={1} 
					variant="filled" 
					>
         		{errorMsg}
        	</MuiAlert>
			</Snackbar>
    </Card>
  )
}

export default CreatePropertyTitleBasic
