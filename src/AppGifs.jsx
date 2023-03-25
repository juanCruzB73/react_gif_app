import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const AppGifs = () =>{

    //onAddCategory recibe un parametro "newcategory" que cambia el valor del input
    const [categories, setCategories] = useState([])
    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory))return;
        setCategories([newCategory])
    }
    return (
        <>
        {/*titulo*/}
            <h1>App de gifs de juan</h1>
        {/*input*/}
            <AddCategory 
/*eventos empiezan con "on"*/onNewCategory={ event => onAddCategory(event)}
            />
        {/*listado de GIF*/}
            <ol>
                {categories.map(category =>(
                        <GifGrid key={category}
                        category={category}/>
                    ))
                }
            </ol>
            
        </>
    )
}