// ** React imports
import { useState, useEffect } from 'react';
import api from "../../../src/services/api";
// ** Components Imports
import Product from './Product';
// ** MUI Imports
import Grid from '@mui/material/Grid';
// ** Icons Imports

const ProductBasic = ({category = null}) => {
  console.log('PRODUCTBASIC 1 ', category)
  const [products, setProducts] = useState([]);
  // Usado pelo componente filho pra triggar um update aqui
  const [updateEffect, setUpdateEffect] = useState(false);

  const renderList = () => {
    
    if (Array.isArray(products)) {
      let productsToRender = products.map((product) => 
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
    } else {
      return 'ERRO'
    }
    
  }

  useEffect(() => {
        const getProductsList = () => {
          console.log('PRODUCTBASIC ', category)
          const url = category ? `product-category/${category.id}/products` : 'products'
        api
          .get(url)
          .then((response) => { 
            setProducts(response.data.data) 
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
    </Grid>
  );
};

export default ProductBasic;
