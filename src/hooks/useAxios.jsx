import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

/**
 * A custom hook for making HTTP requests with Axios
 * @typedef {Object} UseAxiosProps
 * @property {string} url - The URL for the request
 * @property {import('axios').AxiosRequestConfig['method']} [method] - The HTTP method
 * @property {import('axios').AxiosRequestConfig['headers']} [baseHeaders] - The headers for the request
 * @property {import('axios').AxiosRequestConfig['data']} [data] - The data to send in the request
 * @property {boolean} [baseURL] - If true, use the base URL
 */
function useAxios({ baseURL, data, baseHeaders = {}, method = 'get', url: inputUrl }) {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const url = baseURL ? `${import.meta.env.VITE_URL}${inputUrl}` : inputUrl;
	const headers = {
		...baseHeaders,
		authorization: `Bearer ${Cookies.get('token')}`,
	};

	const fetchData = async () => {
		setResponse(null);
		setError(null);
		setIsLoading(true);
		try {
			const result = await axios({
				url,
				method,
				headers,
				data,
			});
			setResponse(result);
		} catch (err) {
			setError(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!url) return;
		fetchData();
	}, [url]);

	return { response, error, isLoading };
}

export default useAxios;
