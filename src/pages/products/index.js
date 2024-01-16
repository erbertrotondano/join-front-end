import React from 'react'
import ProductBasic from 'src/views/products/ProductBasic'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Products = () => {
	return (
		<div>
			<div>
				<Typography variant='h5'>Produtos</Typography>
				<Button 
					variant='contained'
		            href='/products/create'>
						Adicionar novo
				</Button>	
			</div>
			<ProductBasic />
		</div>
	)
}

export default Products