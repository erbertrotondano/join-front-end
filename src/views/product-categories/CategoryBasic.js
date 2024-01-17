// ** React imports
import { useState, useEffect } from 'react';
import { useFetch } from '../../../src/hooks/useFetch';

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
	const { data: items, httpConfig, loading, error } = useFetch(url);

	const renderList = async () => {
	    if (Array.isArray(items.data)) {
	      const categoryComponents = await Promise.all(
	        items.data.map(async (category, index) => (
	          <Category 
	          		key={category.id}
	            	id={category.id}
	            	name={category.nome_categoria}
	            	isLastItem={index === items.data.length - 1}
	            />
	        ))
	      );
	      return categoryComponents;
	    }
	    return null;
  	};

  	useEffect(() => {
	    const renderAndSetCategories = async () => {
	      if (items) {
	        const renderedCategories = await renderList();
	        setCategories(renderedCategories);
	      }
	    };

	    renderAndSetCategories();
	}, [items]);

	return (
    <Card sx={{marginTop: 5}}>
      <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
        {categories}
      </CardContent>
    </Card>
  )
}

export default CategoryBasic