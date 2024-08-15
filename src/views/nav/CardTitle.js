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
  const [apiToken, setApiToken] = useState(localStorage.token);

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
  return (
    <Grid container spacing={3} mt={1}>
        <Grid item xs={8}>
          <CardHeader title={title} titleTypographyProps={{ variant: 'h6' }}/>
        </Grid>
        <Grid item xs={3}>
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