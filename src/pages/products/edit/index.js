// ** Components Imports
import CreateProductBasic from 'src/views/products/CreateProductBasic'

// ** React imports
import { useRouter } from 'next/router';

const EditProductsPage = () => {
	const router = useRouter();
	const { id, name, description, price, category } = router.query;
	return (
		<div>{id ? (
			<CreateProductBasic 
				id={id}
				name={name}
				description={description}
				price={price}
				category={category}
				method={'PUT'}
			/>
			) : (
			<CreateProductBasic />
			)}
			
		</div>
	)
}

export default EditProductsPage