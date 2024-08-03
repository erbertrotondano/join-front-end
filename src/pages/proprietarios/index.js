// ** Components Imports
// import ProductBasic from 'src/views/products/ProductBasic'

// ** MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// ** React imports
import { useRouter } from 'next/router';

const Owners = () => {
	const router = useRouter();
	const { isOwnerRecentlyInserted, isOwnerRecentlyUpdated } = router.query;
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Typography variant='h5'>Proprietários</Typography>
				<Button 
					variant='contained'
		            href='/proprietarios/novo'>
						Adicionar novo
				</Button>	
			</div>
			{/*<ProductBasic 
			isOwnerRecentlyInserted={isOwnerRecentlyInserted}
			isOwnerRecentlyUpdated={isOwnerRecentlyUpdated}/>*/}
		</div>
	)
}

export default Owners