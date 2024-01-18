// ** React imports
import api from "../../../src/services/api";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const CreateCategoryBasic = ({id, name, method = 'POST'}) => {
	
	const [categoryName, setCategoryName] = useState(name || '')
  const [requestMethod, setMethod] = useState(method);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault()
	    const category = {
	      nome_categoria: categoryName
	    };
      if(requestMethod === 'POST'){
        api
          .post('product-categories', category)
          .then((response) => {
            router.push({
              pathname: '/product-categories',
              query: { isCategoryRecentlyInserted: true },
            });
          }).catch((error) => {
            console.log(error)
          })
      } else if(requestMethod === 'PUT'){
        api
          .put(`product-categories/${id}`, category)
          .then((response) => {
            router.push({
              pathname: '/product-categories',
              query: { isCategoryRecentlyUpdated: true },
            });
          }).catch((error) => {
            console.log(error)
          })
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