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
import ReactPhoneInput from 'react-phone-input-material-ui';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const CreateOwnerBasic = ({ 
	id, 
	name, 
	cpf, 
	rg, 
	nationality, 
	ssp, 
	mothersName, 
	fathersName, 
	job, 

	owner,

	husbandNameState, 
	husbandCpfState, 
	husbandRgState, 
	husbandNationalityState, 
	husbandSspState, 
	husbandMothersNameState, 
	husbandFathersNameState, 

	phone, 
	civilState, 
	method = 'POST' 
}) => {
  // States
  // const [productName, setName] = useState(name || '');
  const [ownerId, setOwnerId] = useState(id || null);
  const [ownerName, setOwnerName] = useState(name || '');
  const [ownerCpf, setCpf] = useState(cpf || '');
  const [ownerRg, setRg] = useState(rg || '');
  const [ownerSsp, setOwnerSsp] = useState(ssp || '');
  const [ownerMothersName, setOwnerMothersName] = useState(mothersName || '');
  const [ownerFathersName, setOwnerFathersName] = useState(fathersName || '');
  const [ownerJob, setOwnerJob] = useState(job || '');
  const [ownerPhone, setOwnerPhone] = useState(phone || null);
  const [selectedNationality, setSelectedNationality] = useState(nationality || '');
  const [selectedCivilState, setSelectedCivilState] = useState(civilState || '');

  const [husbandName, setHusbandName] = useState(husbandNameState || '');
  const [husbandCpf, setHusbandCpf] = useState(husbandCpfState || '');
  const [husbandRg, setHusbandRg] = useState(husbandRgState || '');
  const [selectedHusbandNationality, setSelectedHusbandNationality] = useState(husbandNationalityState || '');
  const [husbandSsp, setHusbandSsp] = useState(husbandSspState || '');
  const [husbandMothersName, setHusbandMothersName] = useState(husbandMothersNameState || '');
  const [husbandFathersName, setHusbandFathersName] = useState(husbandFathersNameState || '');

  const [isFormSubmitted, setFormSubmitted]= useState(false);
  const [requestMethod, setMethod] = useState(method);
  const [isMarried, setMarried] = useState(false);
  const [ownerAlreadyExists, setOwnerAlreadyExists] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);


  const router = useRouter();
  const ref = useRef(null);
  // const inputRef = useRef(null);

  const setOwner = (ownerData) => {
  	setOwnerAlreadyExists(true);
  	setMethod('PUT')
  	console.log(ownerData);
  	setOwnerName(ownerData.name)
		setCpf(ownerData.cpf)
		setRg(ownerData.rg)
		setOwnerSsp(ownerData.ssp)
		setOwnerMothersName(ownerData.mother_name)
		setOwnerFathersName(ownerData.father_name)
		setOwnerJob(ownerData.job)
		setOwnerPhone(ownerData.phone)
		setSelectedNationality(ownerData.nationality)
		setSelectedCivilState(ownerData.civil_state)
		if(ownerData.civil_state == 'Casado(a)'){
			console.log('CASADO')
			setMarried(true);
			setHusbandName(ownerData.husband_name)
			setHusbandCpf(ownerData.husband_cpf)
			setHusbandRg(ownerData.husband_rg)
			setSelectedHusbandNationality(ownerData.nationality)
			setHusbandSsp(ownerData.husband_ssp)
			setHusbandMothersName(ownerData.husband_mother_name)
			setHusbandFathersName(ownerData.husband_father_name)	
		}
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isCpfValid(ownerCpf)){
    	// Usado pra triggar o useEffect
	    setFormSubmitted(true);
	    
	    // HTTP stuff
	    if(requestMethod === 'POST'){
	        api
	          .post('proprietarios', owner)
	          .then((response) => {
	          	/// Set SNACKBAR to say it successfully saved the data
	            // router.push({
	            //   pathname: '/proprietarios',
	            //   query: { isOwnerRecentlyInserted: true },
	            // });
	          }).catch((error) => {
	            console.log(error)
	          })
	      } else if(requestMethod === 'PUT'){
	        api
	          .put(`proprietarios/${ownerId}`, owner)
	          .then((response) => {
	            // router.push({
	            //   pathname: '/products',
	            //   // query: { isProductRecentlyUpdated: true },
	            // });
	          }).catch((error) => {
	            console.log(error)
	          })
	      }
    } else {
    	setOpenSnackbar(true);
    }
    const owner = {
    	name: ownerName, 
			cpf: ownerCpf, 
			rg: ownerRg, 
			nationality: selectedNationality, 
			ssp: ownerSsp, 
			mother_name: ownerMothersName, 
			father_name: ownerFathersName, 
			job: ownerJob,
			phone: ownerPhone,
			civil_state: selectedCivilState,
			husband_name: husbandName,
			husband_cpf: husbandCpf,
			husband_rg: husbandRg,
			husband_ssp: husbandSsp,
			husband_mother_name: husbandMothersName,
			husband_father_name: husbandFathersName,
			husband_nationality:selectedHusbandNationality, 
    }
    
  };

  const handleRgChange = (e) => {
    setRg(e.value);
  };

  const handleCpfChange = (e) => {
    setCpf(cpfMask(e.target.value))
  };

  const handleHusbandRgChange = (e) => {
    setHusbandRg(e.value);
  };

  const handleHusbandCpfChange = (e) => {
    setHusbandCpf(cpfMask(e.target.value));
  };

  const handlePhoneChange = (value) => {
    setOwnerPhone(value);
  };

  const handleCivilStateChange = (e) => {
  	setSelectedCivilState(e.target.value);
  	if(e.target.value == 'Casado(a)'){
  		setMarried(true);
  	} else {
  		setMarried(false);
  	}
  }

  const [categories, setCategories] = useState([]);
  const civilStates = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];
  const nationalities = ['Brasileiro'];

  const renderCivilState = () => {

      let civilStatestoRender = civilStates.map((civilState, index) => 
        (
          <MenuItem key={index} value={civilState}>{civilState}</MenuItem>
      ))
      return civilStatestoRender;
  }
  
  const renderNationality = () => {

      let nationalitiesToRender = nationalities.map((nationality, index) => 
        (
          <MenuItem key={index} value={nationality}>{nationality}</MenuItem>
      ))
      return nationalitiesToRender;
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
        const getOwnerData = (owner_id) => {
        api
          .get('proprietarios/'+owner_id)
          .then((response) => { 
            setOwner(response.data) 
          })
          .catch((err) => { console.error('Aconteceu alguma coisa', err) })
      }
      if(router.query.owner_id){
      	setOwnerId(router.query.owner_id);
      	getOwnerData(router.query.owner_id);
      } else {
      	setCpf(router.query.owner_cpf)
      }
      
  }, []);

  return (
    <Card>
      <CardHeader title='Cadastrando Proprietário' titleTypographyProps={{ variant: 'h6' }}/>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={8}>
              <TextField 
              fullWidth 
              required
              label='Nome completo' 
              placeholder='Ex: João da Silva Santos' 
              onChange={(e) => setOwnerName(e.target.value)}
              value={ownerName}
              />
            </Grid>
             <Grid item xs={4}>
             	<ReactPhoneInput
			        value={ownerPhone}
			        onChange={handlePhoneChange}
			        component={TextField}
			        country={'br'}
			      />  
            </Grid>
            <Grid item xs={6}>
			 				<TextField 
	              fullWidth 
	              required
	              label='CPF' 
	              onChange={handleCpfChange}
	              value={ownerCpf}
              />
            </Grid>
            <Grid item xs={4}>
              <NumericFormat 
                  customInput={TextField}
                  fullWidth
                  label='RG'
                  required
                  placeholder='Somente números'
                  allowNegative={false}
                  allowLeadingZeros={false}
                  onValueChange={handleRgChange}
                  value={ownerRg}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField 
	              fullWidth 
	              label='Org. Exp.' 
	              placeholder='Ex: SSP/BA' 
	              onChange={(e) => setOwnerSsp(e.target.value)}
	              value={ownerSsp}
	              />
            </Grid>
            <Grid item xs={3}>
                <Select
                  label='Estado Civil'
                  required
                  fullWidth
                  displayEmpty={true}
									renderValue={selectedNationality => selectedNationality?.length ? Array.isArray(selectedNationality) ? selectedNationality.join(', ') : selectedNationality : 'Estado Civil*'}
                  id='form-layouts-separator-select-civil_state'
                  labelId='form-layouts-separator-select-label-civil_state'
                  onChange={handleCivilStateChange}
                  value={selectedCivilState} 
                >
                  {renderCivilState()}
                </Select>
            </Grid>
            <Grid item xs={5}>
                <TextField 
	              fullWidth 
	              required
	              label='Profissão' 
	              placeholder='Ex: Pedreiro' 
	              onChange={(e) => setOwnerJob(e.target.value)}
	              value={ownerJob}
	              />
            </Grid>
            <Grid item xs={4}>
                <Select
                  label='Nacionalidade'
                  displayEmpty={true}
									renderValue={selectedNationality => selectedNationality?.length ? Array.isArray(selectedNationality) ? selectedNationality.join(', ') : selectedNationality : 'Nacionalidade*'}
                  required
                  fullWidth
                  id='form-layouts-separator-select-nationality'
                  labelId='form-layouts-separator-select-nationality-label'
                  onChange={(e) => setSelectedNationality(e.target.value)}
                  value={selectedNationality} 
                >
                  {renderNationality()}
                </Select>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
	              <Grid container spacing={5}>
	                <Grid item xs={12}>
		              <TextField 
		              fullWidth 
		              label='Nome do Pai' 
		              placeholder='Ex: José da Silva Santos' 
		              onChange={(e) => setOwnerFathersName(e.target.value)}
		              value={ownerFathersName}
		              />
		            </Grid>
		            <Grid item xs={12}>
		              <TextField 
		              fullWidth 
		              required
		              label='Nome da Mãe' 
		              placeholder='Ex: Maria da Silva Santos' 
		              onChange={(e) => setOwnerMothersName(e.target.value)}
		              value={ownerMothersName}
		              />
		            </Grid>
		           </Grid>
              </FormControl>
			</Grid>

			{isMarried && 
			
			<Grid item xs={12}>
              <FormControl fullWidth>
              <CardHeader title='Dados do Cônjuge' titleTypographyProps={{ variant: 'h6' }}/>
	              <Grid container spacing={5}>
	                <Grid item xs={8}>
		              <TextField 
		              fullWidth 
		              required
		              label='Nome completo do Cônjuge' 
		              placeholder='Ex: João da Silva Santos' 
		              onChange={(e) => setHusbandName(e.target.value)}
		              value={husbandName}
		              />
		            </Grid>
		            <Grid item xs={4}>
		                <Select
		                  label='Nacionalidade do Cônjuge'
		                  required
		                  fullWidth
		                  displayEmpty={true}
											renderValue={selectedHusbandNationality => selectedHusbandNationality?.length ? Array.isArray(selectedHusbandNationality) ? selectedHusbandNationality.join(', ') : selectedHusbandNationality : 'Nacionalidade*'}
		                  id='form-layouts-separator-select-husband-nationality'
		                  onChange={(e) => setSelectedHusbandNationality(e.target.value)}
		                  value={selectedHusbandNationality} 
		                >
		                  {renderNationality()}
		                </Select>
		            </Grid>
		            <Grid item xs={6}>
		              <TextField 
			              fullWidth 
			              required
			              placeholder='Somente números'
			              label='CPF do Cônjuge' 
			              onChange={handleHusbandCpfChange}
			              value={husbandCpf}
		              />
		            </Grid>
		            <Grid item xs={4}>
		              <NumericFormat 
		                  customInput={TextField}
		                  fullWidth
		                  label='RG do Cônjuge'
		                  required
		                  placeholder='Somente números'
		                  allowNegative={false}
		                  allowLeadingZeros={false}
		                  onValueChange={handleHusbandRgChange}
		                  value={husbandRg}
		              />
		            </Grid>
		            <Grid item xs={2}>
		              <TextField 
			              fullWidth 
			              label='Org. Exp.' 
			              placeholder='Ex: SSP/BA' 
			              onChange={(e) => setHusbandSsp(e.target.value)}
			              value={husbandSsp}
			              />
		            </Grid>
	                <Grid item xs={12}>
		              <TextField 
		              fullWidth 
		              label='Nome do Pai do Cônjuge' 
		              placeholder='Ex: José da Silva Santos' 
		              onChange={(e) => setHusbandFathersName(e.target.value)}
		              value={husbandFathersName}
		              />
		            </Grid>
		            <Grid item xs={12}>
		              <TextField 
		              fullWidth 
		              required
		              label='Nome da Mãe do Cônjuge' 
		              placeholder='Ex: Maria da Silva Santos' 
		              onChange={(e) => setHusbandMothersName(e.target.value)}
		              value={husbandMothersName}
		              />
		            </Grid>
		           </Grid>
              </FormControl>
            </Grid>
            }
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
         		CPF Inválido
        	</MuiAlert>
			</Snackbar>
    </Card>
  )
}

export default CreateOwnerBasic
