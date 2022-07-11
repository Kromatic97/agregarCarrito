window.addEventListener("load", function(){
    const contendLoad=this.document.querySelector(".content_load");
    
    setTimeout(function () {
        contendLoad.style.display="none"
    }, 3000);
});


let contador =30;
const intervalFunction=setInterval(function(){
    contador--;
    texto.textContent=contador;

    if (contador===0) {
        texto.textContent="Tiempo acabado"
        clearInterval(intervalFunction);
        
    }
},500);

///!ESTA PARA EL FILTRADO DE LAS PRENDAS EN EL ECOMERCE///

//!ESTE SERIA EL ARREGLO DE LAS PRENDAS A RECORRER
    const users = [
        {id:1, name:"Ana", lastName:"Romero", age:"22", ocupation:"Z"},
        {id:2, name:"Luis", lastName:"Rios", age:"23", ocupation:"A"},
        {id:3, name:"Emilio", lastName:"Ramos", age:"25", ocupation:"B"}, 
        {id:4, name:"Juan", lastName:"Britez", age:"27", ocupation:"I"}
    ];

//?AQUI CARGA TODOS LOS BOTONES QUE EXISTE EN LA PAGINA, MUESTRA EL NAME, PERO GUARDA EL ID//
const contentButtons=document.querySelector(".contentButtons");
let htmlButtons="";

for (let i = 0; i < users.length; i++) {
    htmlButtons+=`<button class='btn' data-id='${users[i].id}'>${users[i].name}</button>`;
   
}
contentButtons.innerHTML= htmlButtons;

//?DOCUMENTO ESCUCHADOR DE LOS CLICKS EN DONDE EL USUARIO FUE CLICANDO
document.addEventListener("click", function(event){
if(event.target.classList.contains("btn")){
    const id = event.target.dataset.id;
    console.log(filtrarUsuario(users, id))
}


});

//?FUNCION PARA OBTENER LOS DATOS DEL ARRGLO RECORRIDO DE ACUERDO A LOS CLICKS DADOS//
function filtrarUsuario(array, id) {
    let user;
for (let i = 0; i < array.length; i++) {
    if(array[i].id===parseInt(id)){
        user= array[i];
    }  
}
return user;

    
}
