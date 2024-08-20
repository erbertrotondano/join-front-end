// ** Components Imports
import CreateAssetsBasic from 'src/views/assets/CreateAssetsBasic'
import { useRouter } from 'next/router';

const CreateAssetsPage = (props) => {
	const router = useRouter();
	let propertyTitleId = router.query.propertyTitleId
	return (
		<div>
			<CreateAssetsBasic propertyTitleId={propertyTitleId}/>
		</div>
	)
}

export default CreateAssetsPage