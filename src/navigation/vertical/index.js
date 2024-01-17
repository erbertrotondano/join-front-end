// ** Icon imports
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Produtos'
    },
    {
      title: 'Produtos',
      icon: CubeOutline,
      path: '/products'
    },
    {
      title: 'Categorias de Produtos',
      icon: Table,
      path: '/product-categories'
    },
  ]
}

export default navigation
