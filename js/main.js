let baseTemp = document.querySelector("#baseTemp")
let template_parrafo = document.querySelector("#template_parrafo").content
let fragment_parrafo = document.createDocumentFragment()

let bottom = document.querySelector("#bottom")


window.document.addEventListener("DOMContentLoaded", ()=>{
    dataFetchParafo()
})



const dataFetchParafo = async () =>{
    try{
        const resParraf = await fetch("https://api.adviceslip.com/advice")
        const dataParraf = await resParraf.json()
        //console.log(dataParraf)
        pintarInformacion(dataParraf)

    
       
    }catch(error){
        console.log("Error al cargar json Parraf")
    }
}

const pintarInformacion = (dataParraf) =>{
    //console.log(dataParraf.slip)
    
    template_parrafo.querySelector("#numberID").textContent = dataParraf.slip.id
    template_parrafo.querySelector("#cuadro_parrafo").textContent = dataParraf.slip.advice
    //let clone = template_parrafo.cloneNode(true)
    fragment_parrafo.appendChild(template_parrafo)
    baseTemp.appendChild(fragment_parrafo)
}


///////////GENERAR NUEVA FUNCION///

const numeroAleatorio = () =>{
    return Math.floor(Math.random() * 224) + 1;  
}



const dataFetchParafoclick = async () =>{
    try{
        const resParrafClick = await fetch(`https://api.adviceslip.com/advice/${numeroAleatorio()}`)
        const dataParrafClick = await resParrafClick.json()
        //console.log(dataParraf)
        pintarInformacionClick(dataParrafClick)

    }catch(error){
        console.log("Error al cargar json Parraf222")
    }
}


const pintarInformacionClick = (dataParrafClick) =>{
    //console.log(dataParrafClick)
    
    document.querySelector("#numberID").textContent = dataParrafClick.slip.id
    document.querySelector("#cuadro_parrafo").textContent = dataParrafClick.slip.advice
    
}


document.addEventListener("click", (e) =>{
    if(e.target.id === "bottom"){
        dataFetchParafoclick()
    }
})


