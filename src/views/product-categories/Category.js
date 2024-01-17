// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { useFetch } from '../../../src/hooks/useFetch'
import { useRouter } from 'next/router'
import { useState } from 'react';


const Category = ({id, name, isLastItem}) => {
	const router = useRouter();
	const url = "http://localhost:80/api/v1/product-categories";
	const { data: items, httpConfig, loading, error } = useFetch(url);
	const [isDeleted, setIsDeleted] = useState(false);


	const handleDeleteBtn = async () => {
	    const category = { id };

	    try {
	      await httpConfig(category, 'DELETE');
	      setIsDeleted(true);
	    } catch (error) {
	      console.error('Erro ao excluir a categoria:', error);
	    }
	};

	if (isDeleted) {
		return null; // Se a categoria for excluída, não renderize nada
	}  

	const handleEditBtn = (e) => {
		router.push({
	      pathname: '/product-categories/edit',
	      query: { id, name },
	    });
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
		          </Box>
		        </Box>

		        <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'row' }}>
		        	<Button onClick={handleEditBtn}>Editar</Button>
		            <Button onClick={handleDeleteBtn}>Excluir</Button>
		        </Box>
		      </Box>
		    </Box>
		    {!isLastItem && <Divider />}
	    </Box>
	)
}

export default Category