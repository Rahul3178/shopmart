import {useState, useEffect} from 'react'
import axios from 'axios'
export function useFetchProducts(url)
{
    const[products, setProdutcs]=useState([])

    useEffect(()=>{
        axios.get(url).then(response=>{
            setProdutcs(response.data)
            console.log('Products details',response.data)
        }).then(error=>{
            console.log("error while fetching data :",error)
        })
    },[url])

    return products;
}