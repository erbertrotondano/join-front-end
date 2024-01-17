// ** React imports
import { useState, useEffect } from 'react';
import api from "../../../src/services/api";

// ** Components Imports
import Category from './Category'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'

const CategoryBasic = () => {

	const url = "http://localhost:80/api/v1/product-categories";
	const [categories, setCategories] = useState([]);
	const [updateEffect, setUpdateEffect] = useState(false);

	const renderList = () => {
		console.log(categories)
		console.log('chamando renderList')
		if (Array.isArray(categories)) {

			let categoriesToRender = categories.map((category, index) => 
				(
					<Category 
	      		key={category.id}
	        	id={category.id}
	        	onUpdateEffect={() => setUpdateEffect(true)}
	        	name={category.nome_categoria}

	        	isLastItem={index === categories.length - 1}
	        />
			))
			return categoriesToRender;
		} else {
			return 'ERRO'
		}
		
	}

  	useEffect(() => {
  		console.log('Chamando useEffect');
	 	    const getCategoriesList = () => {
	    	api
	    		.get('product-categories')
	    		.then((response) => { 
	    			setCategories(response.data.data) 
	    			setUpdateEffect(false);
	    			renderList()

	    		})
	    		.catch((err) => { console.error('Aconteceu alguma coisa', err) })
	    }
	    getCategoriesList()
	}, [updateEffect]);

	return (
    <Card sx={{marginTop: 5}}>
      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
        {renderList()}
      </CardContent>
    </Card>
  )
}

export default CategoryBasic