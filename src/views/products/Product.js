// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

const Product = ({name, description, price}) => {
	return (
	        <Card style={{marginTop: 15}}>
		      <Grid container spacing={6}>
		        <Grid item xs={12} sm={7}>
		          <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
		            <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
		              {name}
		            </Typography>
		            <Typography variant='body2'>
		              {description}
		            </Typography>
		          </CardContent>
		        </Grid>
		        <Grid
		          item
		          sm={5}
		          xs={12}
		          sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}
		        >
		          <CardContent
		            sx={{
		              height: '100%',
		              display: 'flex',
		              textAlign: 'center',
		              alignItems: 'center',
		              justifyContent: 'center',
		              backgroundColor: 'action.hover',
		              padding: theme => `${theme.spacing(18, 5, 16)} !important`
		            }}
		          >
		            <Box>
		              <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
		                <Typography variant='h6'>R$</Typography>
		                <Typography variant='h6' sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3.75rem !important' }}>
		                  {price}
		                </Typography>
		              </Box>
		            </Box>
		          </CardContent>
		        </Grid>
		      </Grid>
		    </Card>
	)
}

export default Product