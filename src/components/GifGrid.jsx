import { useFetchGifs } from "../hooks/useFechGifs"
import { GifGridItem } from "./GifGridItem"

export const GifGrid = ({category})=>{

    const{imagenes,isLoading}= useFetchGifs(category)
    
    return(
        <>
        <h3>{category}</h3> 
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
            {imagenes.map(imagen=>(
                <GifGridItem 
                key={imagen.id}
                {...imagen}//convierte en props lo em¿lementos de imagen
                />
            ))
            }
        </div>
        </>
    )
}