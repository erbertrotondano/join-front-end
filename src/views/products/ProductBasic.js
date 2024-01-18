// ** React imports
import { useState, useEffect } from 'react';
import api from "../../../src/services/api";
import { useRouter } from 'next/router';

// ** Components Imports
import Product from './Product';
// ** MUI Imports
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
// ** Icons Imports

const ProductBasic = ({category = null}) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  // Usado pelo componente filho pra triggar um update aqui
  const [updateEffect, setUpdateEffect] = useState(false);

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
    </Grid>
  );
};

export default ProductBasic;
