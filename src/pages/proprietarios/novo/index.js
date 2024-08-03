// ** Components Imports
import CreateOwnerBasic from 'src/views/owners/CreateOwnerBasic'
import { useRouter } from 'next/router';

const CreateOwnersPage = (props) => {
	const router = useRouter();
	let owner = {
		owner_id: router.query.owner_id,
		owner_cpf: router.query.owner_cpf
	}

	return (
		<div>
			<CreateOwnerBasic {...owner}/>
		</div>
	)
}

export default CreateOwnersPage