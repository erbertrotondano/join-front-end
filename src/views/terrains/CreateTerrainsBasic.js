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
import cnpjMask from '../../../src/helpers/CnpjMask';
import registrationNumberMask from '../../../src/helpers/RegistrationNumberMask';
import ReactPhoneInput from 'react-phone-input-material-ui';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import CardTitle from '../../../src/views/nav/CardTitle';

const CreateTerrainsBasic = ({ 
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
  prop_reference,
  prop_cnpj,
  prop_value,
  prop_reurb,
	
}) => {
	const router = useRouter();

  // States
  const [number, setNumber] = useState(prop_number || '');
  const [doorNumber, setDoorNumber] = useState(prop_doorNumber || null);
  const [registrationNumber, setRegistrationNumber] = useState(prop_registrationNumber || null);
  const [ownerId, setOwnerId] = useState(prop_ownerId || null);
  const [streetId, setStreetId] = useState(prop_streetId || null);
  const [streets, setStreets] = useState([]);
  const [block, setBlock] = useState(prop_block || null);
  const [rooms, setRooms] = useState(prop_rooms || null);
  const [roomsNotes, setRoomsNotes] = useState(prop_roomsNotes || null);
  const [isHouse, setIsHouse] = useState(prop_isHouse || false);
  const [propertyType, setPropertyType] = useState(prop_propertyType || 'Residência');
  const [floors, setFloors] = useState(prop_floors || 0);
  const [terrainArea, setTerrainArea] = useState(prop_terrainArea || 0);
  const [constructedArea, setConstructedArea] = useState(prop_constructedArea || 0);
  const [quality, setQuality] = useState(prop_quality || 'Regular');
  const [ownerCpf, setOwnerCpf] = useState(router.query.ownerCpf);
  const [reference, setReference] = useState(prop_reference || '');
  const [cnpj, setCnpj] = useState(prop_cnpj || null);
  const [value, setValue] = useState(prop_value || null);
  const [reurb, setReurb] = useState(prop_reurb || 'S');
 
  const [isFormSubmitted, setFormSubmitted]= useState(false);
  const [requestMethod, setMethod] = useState(method);
  const [isMarried, setMarried] = useState(false);
  const [isCnpj, setIsCnpj] = useState(false);
  const [ownerAlreadyExists, setOwnerAlreadyExists] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [apiToken, setApiToken] = useState(null);

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
      reference: reference,
      cnpj: cnpj,
      value: value,
  	}
  	// Usado pra triggar o useEffect
    setFormSubmitted(true);
    // HTTP stuff
    const requestConfig = {headers: { Authorization: `Bearer ${apiToken}` }}
    if(requestMethod === 'POST'){
        api
          .post('terrenos', terrain, requestConfig)
          .then((response) => {
            // Se conseguir cadastrar o terreno cadastra os dados do reurb
            console.log(ownerId);
            let titulo = {
              owner_id: ownerId,
              terrain_id: response.data.id,
              reurb_type: reurb,
            }

            sendPropertyTitleRequest(titulo);

          }).catch((error) => {
            console.log(error)
          })
      } else if(requestMethod === 'PUT'){
        api
          .put(`terrenos/${ownerId}`, terrain, requestConfig)
          .then((response) => {
            // TODO
          }).catch((error) => {
            console.log(error)
          })
      }
    
    
  };

  const sendPropertyTitleRequest = (titulo) => {

      const requestConfig = {headers: { Authorization: `Bearer ${apiToken}` }}
      api
      .post('titulos', titulo, requestConfig)
      .then((response) => { 
        router.push({
          pathname: '/anexos/novo',
          // query: { terrain_number: terrain.number },
        });
        
      }).catch((error) => {
        console.log(error)
      })
  }
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
  const handleReurbChange = (e) => {
    setReurb(e.target.value);
  }

  const handleTerrainAreaChange = (e) => {
  	setTerrainArea(e.value);
  	console.log(e.value);
  }

  const handlePropertyTypeChange = (e) => {
  	setPropertyType(e.target.value);
  	setIsHouse(true)
  	if(e.target.value !== 'Residência'){
  		setIsHouse(false);
  	} else {
  		setIsHouse(true)
  	}

    if(e.target.value !== 'Comércio'){
      setIsCnpj(false);
    } else {
      setIsCnpj(true)
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

  const handleCnpjChange = (e) => {
    if(e.target.value.length <= 18){
      setCnpj(cnpjMask(e.target.value))  
    }

  }

  const handleValueChange = (e) => {
    console.log(e.value);
    setValue(e.value);
  }

  const nationalities = ['Brasileiro'];
  const propertyTypes = ['Residência', 'Comércio', 'Serviço', 'Terreno', 'Outros']
  const qualities = ['Precário', 'Regular', 'Bom', 'Luxo']
  const reurbs = ['S', 'E']
  
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

  const renderReurb = () => {
    let reurbsToRender = reurbs.map((reurb, index) => 
        (
          <MenuItem key={index} value={reurb}>{reurb}</MenuItem>
      ))
      return reurbsToRender;
  }

  const renderSubmitBtn = () => {
  		return(
  			<Button type='submit' variant='contained' size='large'>
              Finalizar cadastro
            </Button>	  
  		);            
  }

  const handleClose = () => {setOpenSnackbar(false)}
  
  useEffect(() => {
    if(window !== 'undefined'){ 
      console.log('setting api token')
      setApiToken(localStorage.getItem('token'));
    }
    const getStreets = () => {
    const requestConfig = {headers: { Authorization: `Bearer ${apiToken}` }}
    api
      .get('ruas/', requestConfig)
      .then((response) => { 
        setStreets(response.data) 
      })
      .catch((err) => { console.error('Aconteceu alguma coisa', err) })
    }
    getStreets();
    setOwnerCpf(router.query.ownerCpf);
    setOwnerId(router.query.ownerId)
  }, [apiToken]);

  return (
    <Card>
      <CardTitle title={'Dados do Terreno'} /> 
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
            <Grid item xs={4}>
            <InputLabel>CPF do Proprietário:</InputLabel>
              <TextField 
	              fullWidth 
	              disabled
	              value={ownerCpf}
              />
            </Grid>
            <Grid item xs={8}>
            <InputLabel>Ponto de Referência:</InputLabel>
              <TextField 
                fullWidth 
                label='' 
                onChange={(e) => setReference(e.target.value)}
                value={reference}
              />
            </Grid>
            <Grid item xs={3}>
            <InputLabel>Rua*:</InputLabel>
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
            <InputLabel>Tipo*:</InputLabel>
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
              <InputLabel>Quadra:</InputLabel>
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
              <InputLabel>Nº de Pavimentos:</InputLabel>
                <NumericFormat 
                  customInput={TextField}
                  fullWidth
                  label=''
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
              <InputLabel>Cômodos:</InputLabel>
                <NumericFormat 
                  customInput={TextField}
                  fullWidth
                  label=''
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
		            <Grid item xs={2}>
		              <NumericFormat 
	                  customInput={TextField}
	                  fullWidth
	                  label='Área do terreno m²'
	                  decimalScale={2}
	                  required
	                  allowNegative={false}
	                  allowLeadingZeros={false}
	                  onValueChange={handleTerrainAreaChange}
	                  value={terrainArea}
	              	/>
		            </Grid>

		            <Grid item xs={2}>
		              <NumericFormat 
	                  customInput={TextField}
	                  fullWidth
	                  label='Área construída m²'
	                  decimalScale={2}
	                  required
	                  allowNegative={false}
	                  allowLeadingZeros={false}
	                  onValueChange={handleConstructedAreaChange}
	                  value={constructedArea}
	              	/>
		            </Grid>
                <Grid item xs={3}>
                  <NumericFormat 
                    customInput={TextField}
                    fullWidth
                    label='Valor Venal'
                    decimalScale={2}
                    required
                    prefix='R$ '
                    allowNegative={false}
                    allowLeadingZeros={false}
                    onValueChange={handleValueChange}
                    value={value}
                  />
                </Grid>
                <Grid item xs={2}>
                    <Select
                      label='Tipo de Reurb'
                      required
                      fullWidth
                      displayEmpty={true}
                      renderValue={reurb => reurb?.length ? Array.isArray(reurb) ? reurb.join(', ') : reurb : 'Tipo Reurb*'}
                      id='form-layouts-separator-select-civil_state'
                      labelId='form-layouts-separator-select-label-civil_state'
                      onChange={handleReurbChange}
                      value={reurb} 
                    >
                      {renderReurb()}
                    </Select>
                </Grid>
                {isCnpj && 
                  <Grid item xs={3}>
                    <TextField 
                    fullWidth 
                    minRows={3}
                    label='CNPJ' 
                    placeholder='00.000.000/0001-00' 
                    onChange={handleCnpjChange}
                    value={cnpj}
                    />
                  </Grid>
                }
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

export default CreateTerrainsBasic
