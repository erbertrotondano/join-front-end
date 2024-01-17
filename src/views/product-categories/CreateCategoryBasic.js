import React from 'react'
import { useState, useEffect } from 'react';
import { useFetch } from '../../../src/hooks/useFetch';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const CreateCategoryBasic = ({id, name, method = 'POST'}) => {
	
	const [categoryName, setCategoryName] = useState(name || '')
  	const [requestMethod, setMethod] = useState(method);

  	// Request stuff
	const url = "http://localhost:80/api/v1/product-categories";
	const { data: items, httpConfig, loading, error } = useFetch(url);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault()
	    const category = {
	      nome_categoria: categoryName
	    };
	    if(requestMethod === 'PUT'){
	      category.id = id;
	    }

	    try {
	      await httpConfig(category, requestMethod);
	      router.push('/product-categories');
	    } catch (error) {
	      console.error('Erro ao cadastrar o produto:', error);
	    }
	}
	return (
    <Card>
      <CardHeader title='Cadastrando Categoria' titleTypographyProps={{ variant: 'h6' }}/>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField 
              fullWidth 
              required
              label='Nome da Categoria' 
              placeholder='Ex: Instrumentos de Corda' 
              onChange={(e) => setCategoryName(e.target.value)}
              value={categoryName}
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
                }}
              >
                <Button type='submit' variant='contained' size='large'>
                  Cadastrar!
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default CreateCategoryBasic