import React from 'react'
import ProductBasic from 'src/views/products/ProductBasic'
import Typography from '@mui/material/Typography'

const Products = () => {
	return (
		<div>
			<Typography variant='h5'>Produtos</Typography>
			<ProductBasic />
		</div>
	)
}

export default Products