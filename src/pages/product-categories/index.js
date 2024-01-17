import React from 'react'
import CategoryBasic from 'src/views/product-categories/CategoryBasic'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const ProductCategories = () => {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Typography variant='h5'>Categorias de Produtos</Typography>
				<Button 
					variant='contained'
		            href='/product-categories/create'>
						Adicionar nova
				</Button>	
			</div>
			<CategoryBasic />
		</div>
	)
}

export default ProductCategories