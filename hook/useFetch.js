import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log("ENdpoint : ", endpoint)
    console.log("query : ", query)
    const options = {
        method: 'GET',
        url: endpoint,
        params: { ...query},
        headers: {
            'X-RapidAPI-Key': 'ada10e46dbmsh40ea37eef739657p114798jsne39d0c3199e5',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    }

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request
            (options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error while making API call')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
      }, []);
    
    const refetch = () => {
        setIsLoading(true);
        fetchData();
      };
    
    return { data, isLoading, error, refetch };

};

export default useFetch;

