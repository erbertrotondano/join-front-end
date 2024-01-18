// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Components Imports
import RowsCounter from 'src/views/dashboard/RowsCounter'

const Dashboard = () => {
  return (
    <Grid>
      <Grid container spacing={12}>
        <Grid item xs={12} md={6} lg={3}>
          <RowsCounter 
          entityName={'Produtos'}
          text={'Produtos cadastrados'}
          redirectTo={'/products'}
          getDataFrom={'/products-count'}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <RowsCounter 
          entityName={'Categorias'}
          text={'Categorias cadastradas'}
          redirectTo={'/product-categories'}
          getDataFrom={'/product-categories-count'}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Dashboard
