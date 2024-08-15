// ** React Imports
import api from "../../../src/services/api";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
import CardTitle from '../../../src/views/nav/CardTitle';

const CreateOwnerSearch = ({ cpf }) => {
  // States
  const [ownerCpf, setCpf] = useState(cpf || '');
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [apiToken, setApiToken] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const owner = {
		  cpf: ownerCpf, 
    }

    // HTTP stuff
    const requestConfig = {headers: { Authorization: `Bearer ${apiToken}` }}
    api
      .post('proprietarios/por-cpf', owner, requestConfig)
      .then((response) => {
      	let owner = response.data
        router.push({
          pathname: '/proprietarios/novo',
          query: { owner_id: owner.id, owner_cpf: ownerCpf},
        });
      }).catch((error) => {
        console.log(error)
      })
  };

  const handleCpfChange = (e) => {
    setCpf(cpfMask(e.target.value));
    if(isCpfValid(e.target.value)){
      setEnableSubmit(true)
    } else {
      setEnableSubmit(false)
    }
  };

  useEffect(() => {
   if(window !== 'undefined'){ 
      console.log('setting api token')
      setApiToken(localStorage.getItem('token'));
    }

  }, []);

  return (
    <Card>
      <CardTitle title={'Informe o CPF'} />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField 
              fullWidth 
              required
              label='CPF'
              placeholder='Somente números' 
              onChange={handleCpfChange}
              value={cpf}
              />
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
                {enableSubmit && 
                  <Button type='submit' variant='contained' size='large'>
                    Buscar!
                  </Button>
                }
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default CreateOwnerSearch
