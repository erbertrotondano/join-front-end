// ** React Imports
import api from "../../../src/services/api";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';

const CardTitle = ({title}) => {
  const router = useRouter();
  const [apiToken, setApiToken] = useState(null);

  const handleLogout = () => {
    const requestConfig = {headers: { Authorization: `Bearer ${apiToken}` }}
    api
      .get('logout', requestConfig)
      .then((response) => {
        router.push({
          pathname: '/login',
        });
      }).catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    if(window !== 'undefined'){ 
        setApiToken(localStorage.getItem('token'));
      }
  }, [apiToken])
  return (
    <Grid>
      <Grid container spacing={9} mt={0}>
        <Grid item xs={4} ml={5} style={{textAlign: 'left'}}>
            <img
            height={60}
            // TODO: Atualizar LOGO
            src='../../images/itaranalogo.png'
            alt={'teste'}
            loading="lazy" />
        </Grid>
        
        <Grid item xs={4} style={{textAlign: 'center'}}>
            <CardHeader title={'REURB - Sistema de formulário'} titleTypographyProps={{ variant: 'h6' }}/>
        </Grid>
        <Grid item xs={3} style={{textAlign: 'right'}}>
          <Button 
            type='submit' 
            variant='contained' 
            color='error' 
            size='large'
            onClick={handleLogout}
            >
            Sair
          </Button>
        </Grid>
      </Grid>
      <Divider style={{backgroundColor: '#a18341'}}/>
      <Grid container>
        <Grid item xs={9}>
          <CardHeader title={title} titleTypographyProps={{ variant: 'h6' }}/>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default CardTitle;