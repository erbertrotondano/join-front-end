import Product from './Product';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { useFetch } from '../../../src/hooks/useFetch';

const ProductBasic = () => {
  const url = "http://localhost:80/api/v1/products";
  const [products, setProducts] = useState([]);
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const renderList = async () => {
    if (Array.isArray(items.data)) {
      const productComponents = await Promise.all(
        items.data.map(async (product) => (
          <Product
            key={product.id}
            name={product.nome_produto}
            description={product.description}
            price={product.valor_produto}
          />
        ))
      );
      return productComponents;
    }
    return null;
  };

  useEffect(() => {
    const renderAndSetProducts = async () => {
      if (items) {
        const renderedProducts = await renderList();
        setProducts(renderedProducts);
      }
    };

    renderAndSetProducts();
  }, [items]);

  return (
    <Grid container spacing={3} mt={4}>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <Grid item xs={12} md={12} pt={4}>
          {products}
        </Grid>
      )}
    </Grid>
  );
};

export default ProductBasic;
