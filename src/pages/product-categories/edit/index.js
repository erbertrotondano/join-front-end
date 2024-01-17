import CreateCategoryBasic from 'src/views/product-categories/CreateCategoryBasic'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'

const CreateCategoriesPage = () => {
	const router = useRouter();
	const { id, name } = router.query;
	return (
		<div>
			<CreateCategoryBasic id={id} name={name} method="PUT" />
		</div>
	)
}

export default CreateCategoriesPage