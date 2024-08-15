// ** React Imports
import api from "../../../src/services/api";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

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
    <Grid container spacing={9} mt={0}>
        <Grid item xs={9}>
          <CardHeader title={title} titleTypographyProps={{ variant: 'h6' }}/>
        </Grid>
        <Grid item xs={2}>
          <Button 
            type='submit' 
            variant='outlined' 
            color='error' 
            size='large'
            onClick={handleLogout}
            >
            Sair
          </Button>
        </Grid>
      </Grid>
  )
}

export default CardTitle;