// ** Components Imports
import CreateTerrainsBasic from 'src/views/terrains/CreateTerrainsBasic'
import { useRouter } from 'next/router';

const CreateTerrainsPage = (props) => {
	const router = useRouter();
	const owner = {ownerId: router.query.ownerId, ownerCpf: router.query.ownerCpf}
	return (
		<div>
			<CreateTerrainsBasic {...owner}/>
		</div>
	)
}

export default CreateTerrainsPage