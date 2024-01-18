// ** React imports
import { useState, useEffect } from 'react';
import api from "../../../src/services/api";
import { useRouter } from 'next/router';
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const RowsCounter = ({ entityName, text, redirectTo, getDataFrom}) => {
  
  const [productCount, setProductCount] = useState(0)
  const router = useRouter();

  useEffect(() => {
    console.log('useEffect')
    const getProductsCount = () => {
      console.log('api call')
      api.get(getDataFrom)
        .then((response) => {
          setProductCount(response.data)
        }).catch((err) => {
          console.error('Erro: ', err);
        })  
    } 
    getProductsCount()
  }, [productCount])

  const handleClickBtn = () => {
    router.push(redirectTo)
  }
  return (
    <Card>
      <CardHeader
        title={entityName}
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <Box sx={{ mb: 7, display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          <Typography variant='h1' sx={{ mr: 4, ml: 6 }}>
            {productCount}
          </Typography>
          <Typography variant='body2'>{text}</Typography>
        </Box>
        <Button onClick={handleClickBtn} fullWidth variant='contained'>
        Visualizar
        </Button>
      </CardContent>
    </Card>
  )
}

export default RowsCounter
