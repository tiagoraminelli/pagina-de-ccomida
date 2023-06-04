let loadMoreBtn=document.querySelector('#load-more');
let CurrentItem=4;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelector('.box-container .box')];
    for (var i = CurrentItem; i< CurrentItem + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    CurrentItem +=4;
    if(CurrentItem>= boxes.length){
        loadMoreBtn.style.display='none';
    }
}

//carrito

const carrito= document.getElementById('carrito');
const elemento1 = document.getElementById('lista-1');
const lista=document.querySelector('#lista-carrito tbody')
const VaciarCarritoBtn=document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elemento1.addEventListener('click',comprarElemento);
    carrito.addEventListener('click',eliminarElemento);
    VaciarCarritoBtn.addEventListener('click',VaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
if(e.target.classList.contains('agregar-carrito')){
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
}

}

function leerDatosElemento(elemento){
    const infoElemento={
        imagen: elemento.querySelector('img').arc,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('#').getAttribute('data-id')
    }
    insertarCarrito(infoElemento)
}

function insertarCarrito(elemento){
    const row= document.createElement('tf');
    row.innerHTML = `
    <tr>
        <img src="${elemento.imagen}" width=100% />
    </tr>

    <tr>
        ${elemento.titulo}
    </tr>

    <tr>
    ${elemento.precio}
    </tr>

    <tr>
    <a herf="#" class="borrar" data-id="${elemento.id0}">X</a>
    </tr>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
    elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento=e.target.parentElement.parentElement;
        elementoId=elemento.querySelector('a').getAttribute('data-id');
    }
}

function VaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false
}


