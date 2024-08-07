// ** Components Imports

// ** MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// ** React imports
import { useRouter } from 'next/router';

const Terrains = () => {
	const router = useRouter();
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Typography variant='h5'>Títulos</Typography>
				<Button 
					variant='contained'
		            href='/titulos/novo'>
						Adicionar novo
				</Button>	
			</div>
		</div>
	)
}

export default Terrains