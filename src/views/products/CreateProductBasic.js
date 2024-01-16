// ** React Imports
import { useFetch } from '../../../src/hooks/useFetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


// ** MUI Imports
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


// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const CreateProductBasic = () => {
  // ** States
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [isFormSubmitted, setFormSubmitted]= useState(false);
  
  // Request stuff
  const url = "http://localhost:80/api/v1/products";
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Before submit:', { name, description, price, category });
    setFormSubmitted(true);

    const product = {
      nome_produto: name,
      valor_produto: price.replace(/\D/g, ''),
      id_categoria_produto: category
    };

    try {
      await httpConfig(product, 'POST');
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      
      console.log('After submit:', { name, description, price, category });
      router.push('/products');
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
    }
};


  const [categories, setCategories] = useState([]);
  const url_categories = "http://localhost:80/api/v1/product-categories";
  const { data: categoriesItems, httpConfigCategories, loadingCategories, errorCategories } = useFetch(url_categories);

  const renderList = async () => {
    if (Array.isArray(categoriesItems.data)) {
      console.log('aaaa', categoriesItems.data);
      const categoryComponents = await Promise.all(
        categoriesItems.data.map(async (category) => (
          <MenuItem key={category.id} value={category.id}>{category.nome_categoria}</MenuItem>
        ))
      );
      return categoryComponents;
    }
    return null;
  };

  useEffect(() => {
    console.log('useEffect triggered');
    const renderAndSetCategories = async () => {
      if (categoriesItems) {
        const renderedCategories = await renderList();
        setCategories(renderedCategories);
      }
    };

    renderAndSetCategories();
  }, [categoriesItems, isFormSubmitted]);

  return (
    <Card>
      <CardHeader title='Cadastrando Produto' titleTypographyProps={{ variant: 'h6' }}/>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField 
              fullWidth 
              required
              label='Produto' 
              placeholder='Ex: Guitarra Stratocaster' 
              onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
              fullWidth 
              multiline
              minRows={3}
              label='Descrição' 
              placeholder='Ex: A Fender Stratocaster, também conhecida no Brasil como Strato, é um modelo de guitarra elétrica criada por Leo Fender em 1954 e produzid...' 
              onChange={(e) => setDescription(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
              fullWidth 
              label='Preço' 
              required
              type='number' 
              step='0.01' 
              placeholder='Ex: 730.99' 
              onChange={(e) => setPrice(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Categoria</InputLabel>
                <Select
                  label='Categoria'
                  required
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={(e) => setCategory(e.target.value)} 
                >
                  {categories}
                </Select>
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

export default CreateProductBasic
