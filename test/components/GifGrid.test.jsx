import { GifGrid } from "../../src/components/GifGrid"
import {render,screen} from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFechGifs"

jest.mock("../../src/hooks/useFechGifs")

const category = "riquelme"

describe("puebas en GifGrid",()=>{
    test("debe mostrar loading al principio",()=>{

        useFetchGifs.mockReturnValue({
            imagenes:[],
            isLoading: true
        })
            render(<GifGrid category={category}/>)
            expect(screen.getByText("Cargando..."))
            expect(screen.getByText(category))
        })
    test("debe mostrar items cuando cargan imagenes con useFetchGifs",()=>{
        
        const gifs = [{
            id:"1",
            title: "riquelme",
            url:"https://riquelme.com"
        },
        {
            id:"2",
            title: "messi",
            url:"https://messi.com"
        }
    ]

        useFetchGifs.mockReturnValue({
            imagenes:gifs,
            isLoading: true
        })
        
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole("img").length).toBe(2)
    })
})
