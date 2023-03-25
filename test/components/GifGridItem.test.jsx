import { render,screen } from "@testing-library/react"
import {GifGridItem} from "../../src/components/GifGridItem"

describe("pruebas en GifGridItem",()=>{
    
    const title = "hola"
    const url = "https://hola.com/"

    test("debe hacer match con snapshot",()=>{ 
        const {container} = render (<GifGridItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    })
    test("debe mostrar la imagen con el url y el ALT indicado",()=>{
        render(<GifGridItem title={title} url={url}/>)
        //expect(screen.getByRole("img").src).toBe(url)
        //expect(screen.getByRole("img").alt).toBe(title)
        const {src,alt}=screen.getByRole("img")
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })
    test("debe de mostrar el titulo del componente",()=>{
        render(<GifGridItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })
})