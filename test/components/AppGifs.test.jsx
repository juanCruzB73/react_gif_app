import { AppGifs } from "../../src/AppGifs"
import {render,screen} from "@testing-library/react"


describe('App', () => {
    
   
    test('Renders add new category input', () => {
      render(<AppGifs />)
      expect(screen.getAllByRole('textbox')).toHaveLength(1)
    })
    
    // Añadí async porque apareció primero un cargador que tengo por ahí
   
  })

//