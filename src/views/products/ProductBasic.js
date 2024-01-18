// ** React imports
import { useState, useEffect } from 'react';
import api from "../../../src/services/api";
import { useRouter } from 'next/router';

// ** Components Imports
import Product from './Product';
// ** MUI Imports
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// ** Icons Imports

const ProductBasic = ({category = null, isProductRecentlyInserted = false, isProductRecentlyUpdated = false}) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  // Usado pelo componente filho pra triggar um update aqui
  const [updateEffect, setUpdateEffect] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(isProductRecentlyInserted || isProductRecentlyUpdated);
  const renderList = () => {
    
    if (Array.isArray(products.data)) {
      let productsToRender = products.data.map((product) => 
        (
          <Product
            key={product.id}
            id={product.id}
            name={product.nome_produto}
            description={product.descricao_produto}
            price={product.valor_produto}
            category={product.id_categoria_produto}
            onUpdateEffect={() => setUpdateEffect(true)}
          />
      ))
      return productsToRender;
    }     
  }

  const handlePageChange = (e, page) => {
    api.get(`products?page=${page}`)
      .then((response) => {
        setProducts(response.data) 
        setUpdateEffect(false);
        renderList()
      })
      .catch((err) => {
        console.error('Erro: ', err)
      })
  }
  
  const handleSnackClose = () => {
    setShowSuccessMessage(false);
  }

  const getSuccessMessage = () => {
    if(isProductRecentlyInserted){
      return ('Produto cadastrado com sucesso')
    } else if (isProductRecentlyUpdated){
      return ('Produto atualizado com sucesso')
    }
  }

  useEffect(() => {
        const getProductsList = () => {
          const url = category ? `product-category/${category.id}/products` : 'products'
        api
          .get(url)
          .then((response) => { 
            setProducts(response.data) 
            setUpdateEffect(false);
            renderList()
          })
          .catch((err) => { console.error('Aconteceu alguma coisa', err) })
      }
      getProductsList()
  }, [updateEffect, category]);

  return (
    <Grid container spacing={3} mt={4}>
      <Grid item xs={12} md={12} pt={4}>
        {renderList()}
      </Grid>
      <Grid container spacing={3} mt={4} justifyContent="center">
        {products.last_page > 1 && <Pagination count={products.last_page} onChange={handlePageChange} variant="outlined" color="primary" />}
      </Grid>
      <Snackbar open={showSuccessMessage} autoHideDuration={6000} onClose={handleSnackClose}>
          <Alert
            onClose={handleSnackClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {getSuccessMessage()}
          </Alert>
      </Snackbar>
    </Grid>
  );
};

export default ProductBasic;
