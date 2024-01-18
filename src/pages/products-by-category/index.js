// ** React imports
import { useState, useEffect } from 'react';
import api from "../../../src/services/api";

// ** Components Imports
import ProductBasic from 'src/views/products/ProductBasic'
import { useRouter } from 'next/router';

// ** MUI Imports
import Typography from '@mui/material/Typography'

const ProductsByCategory = () => {
	const router = useRouter();
  	const { category_id } = router.query;
  	const [category, setCategory] = useState();

  	useEffect(() => {
  		console.log('calling useEffect', category_id)
		const getCategory = () => {
			console.log('calling getCategory')
			if(category_id){
				console.log('calling api')
				api
				  .get(`product-categories/${category_id}`)
				  .then((response) => { 
				    setCategory(response.data) 
				    console.log('categoria ', category)
				  })
				  .catch((err) => { console.error('Aconteceu alguma coisa', err) })
			}
		}
		getCategory()
  	},[category_id])
  	const printCategory = () => {
  		console.log('aaaa', category)
  		return (category ? category.nome_categoria : '')
  	}
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Typography variant='h5'>Produtos da categoria {printCategory()}</Typography>
			</div>
			<ProductBasic category={category}/>
		</div>
	)
}

export default ProductsByCategory