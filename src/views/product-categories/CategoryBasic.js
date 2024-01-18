// ** React imports
import { useState, useEffect } from 'react';
import api from "../../../src/services/api";

// ** Components Imports
import Category from './Category'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'

const CategoryBasic = ({isCategoryRecentlyInserted = false, isCategoryRecentlyUpdated = false}) => {

	const [categories, setCategories] = useState([]);
	// Usado pelo componente filho pra triggar um update aqui
	const [updateEffect, setUpdateEffect] = useState(false);
	const [showSuccessMessage, setShowSuccessMessage] = useState(isCategoryRecentlyInserted || isCategoryRecentlyUpdated);

	const renderList = () => {
		
		if (Array.isArray(categories.data) && categories.data.length !== 0) {
			let categoriesToRender = categories.data.map((category, index) => 
				(
					<Category 
	      		key={category.id}
	        	id={category.id}
	        	onUpdateEffect={() => setUpdateEffect(true)}
	        	name={category.nome_categoria}
	        	productsCount={category.products_count}
	        	isLastItem={index === categories.data.length - 1}
	        />
			))
			return categoriesToRender;
		} else {
			return (
					<Grid container spacing={3} mt={4} flexDirection={'column'}>
				    <Card sx={{marginTop: 5}}>
				      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
				        Sinto muito, não há nenhuma categoria cadastrada.
				      </CardContent>
				    </Card>
	    		</Grid>
				)
		}
	}
	const handlePageChange = (e, page) => {
    api.get(`product-categories?page=${page}`)
      .then((response) => {
        setCategories(response.data) 
        setUpdateEffect(false);
        renderList()
      })
      .catch((err) => {
        console.error('Erro: ', err) 
      })
  }
  const handleSnackClose = () => {
    setShowSuccessMessage(false);
  }

  const getSuccessMessage = () => {
    if(isCategoryRecentlyInserted){
      return ('Categoria cadastrada com sucesso')
    } else if (isCategoryRecentlyUpdated){
      return ('Categoria atualizada com sucesso')
    }
  }

  	useEffect(() => {
	 	    const getCategoriesList = () => {
	    	api
	    		.get('product-categories')
	    		.then((response) => { 
	    			setCategories(response.data) 
	    			setUpdateEffect(false);
	    			renderList()

	    		})
	    		.catch((err) => { console.error('Erro: ', err) })
	    }
	    getCategoriesList()
	}, [updateEffect]);

	return (
		<Grid container spacing={3} mt={4} flexDirection={'column'}>
	    <Card sx={{marginTop: 5}}>
	      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
	        {renderList()}
	      </CardContent>
	    </Card>
	    <Grid container spacing={3} mt={4} justifyContent="center">
        {categories.last_page > 1 && <Pagination count={categories.last_page} onChange={handlePageChange} variant="outlined" color="primary" />}
      </Grid>
      <Snackbar open={showSuccessMessage} autoHideDuration={6000} onClose={handleSnackClose}>
          <Alert
            onClose={handleSnackClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {getSuccessMessage()}
          </Alert>
      </Snackbar>
     </Grid>

  )
}

export default CategoryBasic