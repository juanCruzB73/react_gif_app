import {fireEvent, render,screen} from "@testing-library/react"
import {AddCategory} from "../../src/components/AddCategory"

describe("pruebas en componente addCategory",()=>{
    
    test("debe de cambiar el valor de la caja de texto",()=>{
        render (<AddCategory onNewCategory={ () => {} } />)//se crea sujeto de prueba
        const input = screen.getByRole("textbox")//se extrae el input
        fireEvent.input(input, {target:{value:"messi"}})//se dispara el evento
        expect(input.value).toBe("messi")//lo que se espera con el evento
    })
    test("debe de llamar onNewCategory si el input tiene un valor",()=>{
        const inputValue = "riquelme"
        const onNewCategory = jest.fn()//simulacion de onNewCategory
        //TO DO:
    
        render (<AddCategory onNewCategory={ onNewCategory } />)

        //llamndo a los componentes
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")

        //disparadores de eventos
        fireEvent.input(input, {target:{value: inputValue}})
        fireEvent.submit(form)

        //screen.debug()
        expect(input.value).toBe("")

        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })
    test ("no de be de llamar a onNewCategory si input esta vacio",()=>{
        //no alla sido llamada nunca si no se envio bien el formulario
        const onNewCategory = jest.fn()
        render (<AddCategory onNewCategory={ onNewCategory } />)

        const form = screen.getByRole("form")
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0)
    })
})