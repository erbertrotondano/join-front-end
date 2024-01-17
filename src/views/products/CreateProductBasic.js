// ** React Imports
import { useFetch } from '../../../src/hooks/useFetch';
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

const CreateProductBasic = ({ id, name, description, price, category, method = 'POST' }) => {
  // ** States
  const [productName, setName] = useState(name || '');
  const [productDescription, setDescription] = useState(description || '');
  const [productPrice, setPrice] = useState(price || '');
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  const [isFormSubmitted, setFormSubmitted]= useState(false);
  const [requestMethod, setMethod] = useState(method);

  // Request stuff
  const url = "http://localhost:80/api/v1/products";
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const product = {
      nome_produto: productName,
      valor_produto: productPrice.replace(/\D/g, ''),
      id_categoria_produto: selectedCategory,
      descricao_produto: productDescription
    };
    if(requestMethod === 'PUT'){
      product.id = id;
    }

    try {
      await httpConfig(product, requestMethod);
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
      const productCategoryComponents = await Promise.all(
        categoriesItems.data.map(async (category) => (
          <MenuItem key={category.id} value={category.id}>{category.nome_categoria}</MenuItem>
        ))
      );
      return productCategoryComponents;
    }
    return null;
  };

  useEffect(() => {
  const renderAndSetCategories = async () => {
      if (categoriesItems) {
        const renderedCategories = await renderList();
        setCategories(renderedCategories);

        // Define a categoria inicialmente selecionada
        if (category) {
          setSelectedCategory(category);
        }
      }
  }

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
              value={productName}
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
              value={productDescription} 
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
              value={productPrice}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Categoria</InputLabel>
                <Select
                  label='Categoria'
                  required
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  value={selectedCategory} 
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
