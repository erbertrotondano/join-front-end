// ** React Imports
import api from "../../../src/services/api";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CardTitle from '../../../src/views/nav/CardTitle';
import InputLabel from '@mui/material/InputLabel'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { createSvgIcon } from '@mui/material/utils';

const CreateAssetsBasic = ({propertyTitleId}) => {
	const router = useRouter();
	const [apiToken, setApiToken] = useState(null);
	const [additionalFiles, setAdditionalFiles] = useState([]);
	const [signature, setSignature] = useState(null);
	const [frontRg, setFrontRg] = useState(null);
	const [backRg, setBackRg] = useState(null);
	const [cpf, setCpf] = useState(null);
	const inputRef = useRef()

	useEffect(() => {
		if(window !== 'undefined'){ 
	      console.log('setting api token')
	      setApiToken(localStorage.getItem('token'));
	    }

	}, [apiToken])
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const postData = {
			signature: {
				path: signature,
				type: 'signature',
				file_name: `signature_${propertyTitleId}`,
				property_title_id: propertyTitleId,
			},
			frontRg:  {
				path: frontRg,
				type: 'frontRg',
				file_name: `frontRg_${propertyTitleId}`,
				property_title_id: propertyTitleId,
			},
			backRg:  {
				path: backRg,
				type: 'backRg',
				file_name: `backRg_${propertyTitleId}`,
				property_title_id: propertyTitleId,
			},
			cpf: {
				path: cpf,
				type: 'cpf',
				file_name: `cpf_${propertyTitleId}`,
				property_title_id: propertyTitleId,
			},
			additionalFiles: {additionalFiles: additionalFiles},
		}

		const requestConfig = {headers: { "Content-type": "multipart/form-data" , Authorization: `Bearer ${apiToken}` }}
		console.log(postData);
		api
		.post('uploadMultiple', postData, requestConfig)
		.then((response) => { 
			console.log(response);
		}).catch((error) => {
			console.log(error)
		})
	}

	const renderListItems = () => {
		const filesToRender = additionalFiles.map((file, key) => (
				<ListItemButton key={key}>
			        <ListItemIcon>
			          <FolderIcon />
			        </ListItemIcon>
			        <ListItemText primary={file.file_name} />
			        <ListItemIcon>
			          <DeleteIcon key={key} onClick={(e) => deleteFileItem(key)} />
			        </ListItemIcon>
			    </ListItemButton>	
			));
		filesToRender.push(addPlusBtnToList());
		return filesToRender;
	}
	const addPlusBtnToList = () => (
		<ListItemButton key='add-new'>
	        <ListItemIcon>
	          <PlusIcon/>
	        </ListItemIcon>
	        <TextField 
              fullWidth 
              type="file"
		      accept="image/*"
		      capture="environment"
              onChange={handleAddNewFile}
            />
	    </ListItemButton>
	)
	const handleSignatureChange = (e) => {
	    setSignature(e.target.files[0]);
	}
	
	const handleFrontRgChange = (e) => {
		setFrontRg(e.target.files[0]);
	}
	
	const handleBackRgChange = (e) => {
		setBackRg(e.target.files[0]);
	}
	
	const handleCpfChange = (e) => {
		setCpf(e.target.files[0]);
	}

	const handleAddNewFile = (e) => {
		let file = e.target.files[0];
		let newFile = {
			path: file,
			type: 'additionalFile',
			file_name: `additional${Date.now()}_${file.name}`,
			property_title_id: propertyTitleId,
		}
		// let arr = [...additionalFiles, e.target.files[0]];
		setAdditionalFiles([...additionalFiles, newFile]);
	}

	const handleDeleteFile = (e) => {
		console.log(e.target);
	}

	const deleteFileItem = (key) => {
		const newFiles = additionalFiles.filter((item, i) => (
				i != key
			))
		setAdditionalFiles( newFiles );
	}

	const PlusIcon = createSvgIcon(
	  <svg
	    xmlns="http://www.w3.org/2000/svg"
	    fill="none"
	    viewBox="0 0 24 24"
	    strokeWidth={1.5}
	    stroke="currentColor"
	    className="h-6 w-6"
	  >
	    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	  </svg>,
	  'Plus',
	);


	return (
		<Card>
	      <CardTitle title={'Anexos'} /> 
	      <CardContent>
	        <form onSubmit={handleSubmit}>
	          <Grid container spacing={5}>
	            <Grid item xs={12}>
				  <InputLabel>Anexar Assinatura</InputLabel>
				  <TextField 
		              fullWidth 
		              type="file"
				      accept="image/*"
				      capture="environment"
				      ref={inputRef}
		              required
		              onChange={handleSignatureChange}
	              />
	            </Grid>
	            <Grid item xs={6}>
				  <InputLabel>RG (Frente)</InputLabel>
				  <TextField 
		              fullWidth 
		              type="file"
				      accept="image/*"
				      capture="environment"
		              required
		              onChange={handleFrontRgChange}
	              />
	            </Grid>
	            <Grid item xs={6}>
				  <InputLabel>RG (Fundo)</InputLabel>
				  <TextField 
		              fullWidth 
		              type="file"
				      accept="image/*"
				      capture="environment"
		              required
		              onChange={handleBackRgChange}
	              />
	            </Grid>
	            <Grid item xs={12}>
				  <InputLabel>CPF</InputLabel>
				  <TextField 
		              fullWidth 
		              type="file"
				      accept="image/*"
				      capture="environment"
		              onChange={handleCpfChange}
	              />
	            </Grid>
	            <Grid item xs={12}>
				  
				   <List
				      sx={{ width: '100%', bgcolor: 'background.paper' }}
				      component="nav"
				      aria-labelledby="nested-list-subheader"
				      subheader={
				        <ListSubheader component="div" id="nested-list-subheader">
				          Arquivos Adicionais
				        </ListSubheader>
				      }
				    >
				      {renderListItems()}

				    </List>
	            </Grid>
	            
	            <Grid item xs={12}>
	            <Button variant='contained' size='large' onClick={handleSubmit}>
	              Finalizar cadastro
	            </Button>	  
	            </Grid>


        	  </Grid>
        	</form>
    	  </CardContent>
	  	</Card>
	)
}

export default CreateAssetsBasic;