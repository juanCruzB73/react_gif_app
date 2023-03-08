import { render } from "@testing-library/react"
import GifGridItem from "../../src/components/GifGridItem"

describe("pruebas en GifGridItem",()=>{
    
    const title = "hola"
    const url = "https://hola.com"

    test("debe hacer match con snapshot",()=>{ 
        render(<GifGridItem title={title} url={url}/>)
    })
})