// ** Components Imports
import CreateCategoryBasic from 'src/views/product-categories/CreateCategoryBasic'
// ** React imports
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