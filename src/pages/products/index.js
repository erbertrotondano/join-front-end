// ** Components Imports
import ProductBasic from 'src/views/products/ProductBasic'

// ** MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Products = () => {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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