// ** Components Imports
import CategoryBasic from 'src/views/product-categories/CategoryBasic'

// ** MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// ** React imports
import { useRouter } from 'next/router';

const ProductCategories = () => {
	
	const router = useRouter();
	const { isCategoryRecentlyInserted, isCategoryRecentlyUpdated } = router.query;

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
			<CategoryBasic 
			isCategoryRecentlyInserted={isCategoryRecentlyInserted}
			isCategoryRecentlyUpdated={isCategoryRecentlyUpdated}
			/>
		</div>
	)
}

export default ProductCategories