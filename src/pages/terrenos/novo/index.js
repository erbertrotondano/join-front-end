// ** Components Imports
import CreateTerrainsBasic from 'src/views/terrains/CreateTerrainsBasic'
import { useRouter } from 'next/router';

const CreateTerrainsPage = (props) => {
	const router = useRouter();
	return (
		<div>
			<CreateTerrainsBasic {...router.query.ownerCpf}/>
		</div>
	)
}

export default CreateTerrainsPage