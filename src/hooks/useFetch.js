import {useState, useEffect} from 'react';


export const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [config, setConfig] = useState(null)
	const [method, setMethod] = useState(null)
	const [callFetch, setCallFetch] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [itemId, setItemId] = useState(null)

	const httpConfig = (data, method) => {
		if(method === 'POST'){
			setConfig({
				method,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			setMethod(method)
		} else if(method === 'DELETE'){
			setConfig({
				method,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			setMethod(method)
			setItemId(data);
		}
		else if(method === 'PUT'){
			setConfig({
				method,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			setMethod(method)
			setItemId(data);
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try{
				const res = await fetch(url)
				const json = await res.json()
				setData(json)
			} catch(error) {
				console.log(error.message)
				setError("Houve algum erro ao carregar aos dados!")
			}
			setLoading(false)
		}

		fetchData();
	}, [url, callFetch]);

	useEffect(() => {
		const httpRequest = async () => {
			if(method === 'POST'){
				let fetchOptions = [url, config]

				const res = await fetch(...fetchOptions);
				const json = await res.json();
				setCallFetch(json);
			}	
			else if (method === "DELETE") {
			    const deleteUrl = `${url}/${itemId.id}`;
		        const res = await fetch(deleteUrl, config);
		        const json = await res.json();
				setCallFetch(json);
			}
			else if (method === "PUT") {
			    const editUrl = `${url}/${itemId.id}`;
		        const res = await fetch(editUrl, config);
		        const json = await res.json();
				setCallFetch(json);
			}

		}
		httpRequest();
	}, [config, method, url])
	return {data, httpConfig, loading, error};
}
