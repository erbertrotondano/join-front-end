// ** React imports
import api from "../../../src/services/api";
import { useRouter } from 'next/router'
import { useState } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Badge from '@mui/material/Badge'
import CubeOutline from 'mdi-material-ui/CubeOutline'

const Category = ({id, name, isLastItem, onUpdateEffect, productsCount}) => {
	
	const router = useRouter();
	const [isDeleted, setIsDeleted] = useState(false);
	const [errorMsg, setErrorMsg] = useState();
	const [error, setError] = useState();

	const handleDeleteBtn = () => {
	    const category = { id };
	    api.delete(`/product-categories/${id}`)
	    	.then((response) => {
	    		onUpdateEffect();
	    	}).catch((err) => {
	    		if(err.response.status === 409){
	    			setError(true)
	    			setErrorMsg('Opa! Não podemos excluir essa categoria porque há produtos cadastrados nela')
	    		}
	    	})
	};

	if (isDeleted) {
		return null;
	}  

	const handleEditBtn = (e) => {
		router.push({
	      pathname: '/product-categories/edit',
	      query: { id, name },
	    });
	}
	const handleClose = () => {
		setError(false);
	}
	return (
		<Box>
			<Box
		      key={id}
		      sx={{
		        display: 'flex',
		        alignItems: 'center'
		      }}
		    >

		      <Box
		        sx={{
		          width: '100%',
		          display: 'flex',
		          flexWrap: 'wrap',
		          alignItems: 'center',
		          justifyContent: 'space-between'
		        }}
		      >
		        <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
		          <Box sx={{ display: 'flex' }}>
		            <Typography sx={{ mr: 0.5, fontWeight: 600, letterSpacing: '0.25px' }}>{name}</Typography>
		            <Badge badgeContent={productsCount} color="primary">
					  <CubeOutline color="action" />
					</Badge>
		          </Box>
		        </Box>

		        <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'row' }}>
		        	<Button onClick={handleEditBtn}>Editar</Button>
		            <Button onClick={handleDeleteBtn}>Excluir</Button>
		        </Box>
		      </Box>

		      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
				  <Alert
				    onClose={handleClose}
				    severity="error"
				    variant="filled"
				    sx={{ width: '100%' }}
				  >
				    {errorMsg}
				  </Alert>
				</Snackbar>
		    </Box>
		    {!isLastItem && <Divider />}
	    </Box>
	)
}

export default Category