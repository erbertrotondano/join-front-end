// ** React imports
import { useState, useEffect } from 'react';
import api from "../../../src/services/api";
import { useRouter } from 'next/router';

// ** MUI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Product = ({ id, name, description, price, category, onUpdateEffect }) => {
  
  const router = useRouter();
  const [isDeleted, setIsDeleted] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showingMore, setShowingMore] = useState(false);
  const [toggleShowText, setToggleShowText] = useState('Ler mais');
  const [renderedDescription, setRenderedDescription] = useState(() => {
    if (description.length > 450) {
      setShowMore(true);
      return `${description.slice(0, 450)}[...]`;
    }
    return description;
  });

  const handleDeleteBtn = async () => {
    const product = { id };

    api.delete(`products/${id}`)
      .then((response) => {
        onUpdateEffect()
      }).catch((err) => {
        console.log('ERRO Algo aconteceu ', err)
      });
    };

  const handleEditBtn = (e) => {
    router.push({
      pathname: '/products/edit',
      query: { id, name, description, price, category },
    });

  }

  if (isDeleted) {
    return null;
  }

  const handleToggleShowingMore = () => {
    setToggleShowText(showingMore ? 'Ler Mais' : 'Colapsar');
    setShowingMore(!showingMore);
    toggleDescriptionSize(!showingMore);
  };
  
  const toggleDescriptionSize = (prevShowingMore) => {
    if (prevShowingMore) {
      setRenderedDescription(description);
    } else {
      setRenderedDescription(`${description.slice(0, 450)}[...]`);
    }
  };

  return (
    <Card style={{ marginTop: 15 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important'` }}>
            <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
              {name}
            </Typography>
            <Typography variant='body2'>
              {renderedDescription}
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Button onClick={handleEditBtn}>Editar</Button>
            <Button onClick={handleDeleteBtn}>Remover</Button>
            {showMore && <Button onClick={handleToggleShowingMore}>{toggleShowText}</Button>}
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