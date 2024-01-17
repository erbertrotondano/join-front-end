import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useFetch } from '../../../src/hooks/useFetch';
import { useRouter } from 'next/router';

const Product = ({ id, name, description, price, category }) => {
  const router = useRouter();
  const url = "http://localhost:80/api/v1/products";
  const { data: items, httpConfig, loading, error } = useFetch(url);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteBtn = async () => {
    const product = { id };

    try {
      await httpConfig(product, 'DELETE');
      setIsDeleted(true);
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  const handleEditBtn = (e) => {
    router.push({
      pathname: '/products/edit',
      query: { id, name, description, price, category },
    });

  }

  if (isDeleted) {
    return null; // Se o produto foi excluído, não renderize nada
  }

  return (
    <Card style={{ marginTop: 15 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important'` }}>
            <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
              {name}
            </Typography>
            <Typography variant='body2'>
              {description}
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Button onClick={handleEditBtn}>Editar</Button>
            <Button onClick={handleDeleteBtn}>Remover</Button>
          </CardActions>
        </Grid>
        <Grid
          item
          sm={5}
          xs={12}
          sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'action.hover',
              padding: theme => `${theme.spacing(18, 5, 16)} !important`
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <Typography variant='h6'>R$</Typography>
                <Typography variant='h6' sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3.75rem !important' }}>
                  {price}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Product;