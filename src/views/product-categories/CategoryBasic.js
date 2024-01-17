import React from 'react'
import Category from './Category'
import { useState, useEffect } from 'react';
import { useFetch } from '../../../src/hooks/useFetch';

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'


// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'


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