import {useFetchGifs} from "../../src/hooks/useFechGifs"
import { renderHook,waitFor } from "@testing-library/react"

describe("puruebas en useFechGifs",()=>{
    test("debe regresar el estado inicial",()=>{
        const {result} = renderHook(() => useFetchGifs("messi"))
        const {imagenes,isLoading} = result.current

        expect(imagenes.length).toBe(0)
        expect(isLoading).toBeTruthy()

        console.log(result)
    })
    test("debe regresar el estado actual; un arreglo de imagenes e isLoading = false",async()=>{
        
        const {result} = renderHook(() => useFetchGifs("messi"))
        
        await waitFor(
            ()=> expect(result.current.imagenes.length).toBeGreaterThan(0)//aca llega la info
        )
        
        const {imagenes,isLoading} = result.current
        
        expect(imagenes.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
        console.log(result)
    })
})