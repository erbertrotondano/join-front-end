// ** Components Imports
import ProductBasic from 'src/views/products/ProductBasic'

// ** MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// ** React imports
import { useRouter } from 'next/router';

const Products = () => {
	const router = useRouter();
	const { isProductRecentlyInserted, isProductRecentlyUpdated } = router.query;
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
			<ProductBasic 
			isProductRecentlyInserted={isProductRecentlyInserted}
			isProductRecentlyUpdated={isProductRecentlyUpdated}/>
		</div>
	)
}

export default Products