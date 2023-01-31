import { useEffect, useState } from "react"
import {getGifs} from "../helpers/getGifs"

export const useFetchGifs = (category) =>{

    const [imagenes, setImagenes]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    const getImgenes = async()=>{
    const newImagenes = await getGifs(category)
    setImagenes(newImagenes)
    setIsLoading(false)
}
    useEffect(()=>{
        getImgenes()
    },[])

    return{
    imagenes,
    isLoading
}}