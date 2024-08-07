// ** Components Imports
import CreatePropertyTitleBasic from 'src/views/property-titles/CreatePropertyTitleBasic'
import { useRouter } from 'next/router';

const CreatePropertyTitlePage = (props) => {
	const router = useRouter();
	return (
		<div>
			<CreatePropertyTitleBasic {...router.query.terrain_number}/>
		</div>
	)
}

export default CreatePropertyTitlePage