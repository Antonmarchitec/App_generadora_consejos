let baseTemp = document.querySelector("#baseTemp")
let template_parrafo = document.querySelector("#template_parrafo").content
let fragment_parrafo = document.createDocumentFragment()


window.document.addEventListener("DOMContentLoaded", ()=>{
    dataFetchParafo()
})


/*document.addEventListener("click", (e)=>{
    if(e.target.id === "bottom"){
        dataFetchParafo()
    }
})*/


const dataFetchParafo = async () =>{
    try{
        resParraf = await fetch("https://api.adviceslip.com/advice")
        dataParraf = await resParraf.json()
        pintarInformacion(dataParraf)

        

    }catch(error){
        console.log("Error al cargar json Parraf")
    }
}


const pintarInformacion = (dataParraf) =>{
    console.log(dataParraf.slip)
    
    template_parrafo.querySelector("#numberID").textContent = dataParraf.slip.id
    template_parrafo.querySelector("#cuadro_parrafo").textContent = dataParraf.slip.advice

    fragment_parrafo.appendChild(template_parrafo)
    baseTemp.appendChild(fragment_parrafo)
    
    
}


