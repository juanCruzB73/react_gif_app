import { getGifs } from '../../src/helpers/getGifs'

describe("pruebas en getGifs()",()=>{
    const requisitos ={id: expect.any(String),title: expect.any(String),url: expect.any(String)}
    test("debe retornar un arregle de gifs",async()=>{
        const gifs = await getGifs("messi")
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual(requisitos)
        //expect(gifs.length).toBe(10)
    })
})