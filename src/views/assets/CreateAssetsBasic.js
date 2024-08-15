// ** React Imports
import api from "../../../src/services/api";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CardTitle from '../../../src/views/nav/CardTitle';
import InputLabel from '@mui/material/InputLabel'

const CreateAssetsBasic = () => {
	const [apiToken, setApiToken] = useState(null);


	useEffect(() => {
		if(window !== 'undefined'){ 
	      console.log('setting api token')
	      setApiToken(localStorage.getItem('token'));
	    }

	}, [apiToken])
	
	const handleSubmit = () => {
		console.log('submiting')
	}

	return (
		<Card>
	      <CardTitle title={'Anexos'} /> 
	      <CardContent>
	        <form onSubmit={handleSubmit}>
	          <Grid container spacing={5}>
	            <Grid item xs={12}>
				  <InputLabel>Anexar Assinatura</InputLabel>
				  <TextField 
		              fullWidth 
		              type="file"
				      accept="image/*"
				      capture="environment"
		              required
		              onChange={console.log('teste')}
	              />
	            </Grid>
        	  </Grid>
        	  </form>
    	  </CardContent>
	  	</Card>
	)
}

export default CreateAssetsBasic;