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

const CreateLoginBasic = ({ 
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
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [token, setToken] = useState(null);
 
  const [isFormSubmitted, setFormSubmitted]= useState(false);
  const [requestMethod, setMethod] = useState(method);
  const [isMarried, setMarried] = useState(false);
  const [isCnpj, setIsCnpj] = useState(false);
  const [ownerAlreadyExists, setOwnerAlreadyExists] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  	const credentials = {
  		email: email,
      password: password
  	}
  	// Usado pra triggar o useEffect
    setFormSubmitted(true);
    // HTTP stuff
    api
      .post('login', credentials)
      .then((response) => {
        // Se conseguir logar salva o token
        updateToken(response.data.token);
        router.push({
          pathname: '/proprietarios/buscar',
        });
        
      }).catch((error) => {
        console.log(error)
        if(error.response.status == 422){
          setErrorMsg('Email ou senha inválidos')
          setOpenSnackbar(true)
        }
      })
  };

  const updateToken = (token) => {
    localStorage.setItem('token', token);
  }

  const renderSubmitBtn = () => {
  		return(
  			<Button type='submit' variant='contained' size='large'>
              Entrar
            </Button>	  
  		);            
  }

  const handleClose = () => {setOpenSnackbar(false)}
  
  useEffect(() => {
  }, []);

  return (
    <Card>
      <CardHeader title='Login' titleTypographyProps={{ variant: 'h6' }}/>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <FormControl fullWidth>
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  required
                  label='Email' 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={6} mt={2}>
                <TextField 
                  fullWidth 
                  required
                  type="password"
                  label='Senha' 
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
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

export default CreateLoginBasic
