// ** React Imports
import api from "../../../src/services/api";
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
import { NumericFormat } from 'react-number-format';

const CreateProductBasic = ({ id, name, description, price, category, method = 'POST' }) => {
  // States
  const [productName, setName] = useState(name || '');
  const [productDescription, setDescription] = useState(description || '');
  const [productPrice, setPrice] = useState(price || '');
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  const [isFormSubmitted, setFormSubmitted]= useState(false);
  const [requestMethod, setMethod] = useState(method);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Usado pra triggar o useEffect
    setFormSubmitted(true);
    const product = {
      nome_produto: productName,
      valor_produto: productPrice,
      id_categoria_produto: selectedCategory,
      descricao_produto: productDescription
    };
    // HTTP stuff
    if(requestMethod === 'POST'){
        api
          .post('products', product)
          .then((response) => {
            router.push('/products')
          }).catch((error) => {
            console.log(error)
          })
      } else if(requestMethod === 'PUT'){
        api
          .put(`products/${id}`, product)
          .then((response) => {
            router.push('/products')
          }).catch((error) => {
            console.log(error)
          })
      }
  };

  const handlePriceChange = (e) => {
    
    // Tratando o preço pra ficar com 2 casas decimais
    let inputValue = e.value;
    inputValue = inputValue.replace(',', '.');
    const cleanedValue = inputValue.replace(/[^\d.]/g, '');
    const [integerPart, decimalPart] = cleanedValue.split('.');
    const limitedDecimalPart = decimalPart ? decimalPart.slice(0, 2) : '';
    const newValue = `${integerPart}${limitedDecimalPart ? `.${limitedDecimalPart}` : ''}`;

    setPrice(newValue);
  };


  const [categories, setCategories] = useState([]);

  const renderList = () => {
    if (Array.isArray(categories)) {

      let categoriesToRender = categories.map((category, index) => 
        (
          <MenuItem key={category.id} value={category.id}>{category.nome_categoria}</MenuItem>
      ))
      return categoriesToRender;
    }     
  }

  useEffect(() => {
        const getCategoriesList = () => {
        api
          .get('product-categories')
          .then((response) => { 
            setCategories(response.data.data) 
            renderList()
          })
          .catch((err) => { console.error('Aconteceu alguma coisa', err) })
      }
      getCategoriesList()
  }, [isFormSubmitted]);

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
              <NumericFormat 
                  customInput={TextField}
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="R$ "
                  fullWidth
                  label='Preço'
                  required
                  placeholder='Ex: 730,99'
                  allowNegative={false}
                  allowLeadingZeros={false}
                  onValueChange={handlePriceChange}
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
                  {renderList()}
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
                }}>
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
