const Titulo = document.querySelector('#txt-titulo')
const Skill = document.querySelector('#linguagem-skill')
const categoria = document.querySelector('#select-categoria')
const descriao = document.querySelector('#txt-descricao')
const youtube = document.querySelector('#video-youtube')
const Salvar = document.querySelector('#btn-salvar')
const limpar = document.querySelector('#btn-limpar')
const pesquisa = document.querySelector('#txt-pesquisa')
const buscar = document.querySelector('#btn-buscar')
const apagar = document.querySelector('#btn-apagar')
const divCards = document.querySelector(`#p-cards`)
const totalCards = document.querySelector('#total-cards')
const frontCards = document.querySelector('#front-cards')
const backCards = document.querySelector('#back-cards')
const fullstackCards = document.querySelector('#fullstack-card')
const comportamentalSoftwareCards = document.querySelector('#comportamentalSoftware-Card')
const mudarCor = document.querySelector('#color')

mudarCor.addEventListener('change',()=>{
    let corEscolhida = mudarCor.value
    document.body.style.backgroundColor = corEscolhida
})


let backEnd = 0
let frontEnd = 0
let fullStack = 0
let comportamentalSoftware = 0
let cards = 0
Salvar.addEventListener(`click`, () => {
    let ValorTitulo = Titulo.value
    let ValorSkill = Skill.value
    let ValorCategoria = categoria.value
    let valorDescicao = descriao.value
    let ValorYoutube = youtube.value
    



    if (ValorSkill === '' || ValorCategoria === ''
        || valorDescicao === '') {
        alert('Preencha todo o formulário')
        return
    }
    
    if (ValorCategoria === 'frontEnd') {
        frontEnd += 1
        frontCards.innerHTML = frontEnd
    }
    if (ValorCategoria === 'backEnd') {
        backEnd += 1
        backCards.innerHTML = backEnd
    }
    if (ValorCategoria === 'fullStack') {
        fullStack += 1
        fullstackCards.innerHTML = fullStack
    }
    if (ValorCategoria === 'comportamental/soft') {
        comportamentalSoftware += 1
        comportamentalSoftwareCards.innerHTML = comportamentalSoftware
    }
    
    
    cards += 1
    totalCards.innerHTML = cards
    
    //Criando Tags
    const card = document.createElement('li')
    let dica = document.createElement('div')
    let removeDica = document.createElement('button')
    let editar = document.createElement('button')
    let video = document.createElement('a')
    video.target ='_blank'

    
    editar.textContent = 'Editar'
    
    dica.innerHTML = `
    <h1><b> Titulo:</b><div class='busca'>${ValorTitulo}</div></h1>
    <br>
    <b> SoftSkill: </b> ${ValorSkill},<br>
    <b>Categoria:</b>${ValorCategoria},<br>
    <b>Descrição:</b>${valorDescicao}`
    
    video.textContent = 'video'
    video.href = ValorYoutube
    

   
    card.append(dica)
    card.append(video)
    divCards.append(card)
    card.style.padding = '20px'
    card.append(removeDica)
    card.append(editar)
    
    removeDica.textContent = 'apagar'
    removeDica.addEventListener('click',()=>{
        card.remove()
    })
    limpaInput()
})

limpar.addEventListener('click',()=>{
     limpaInput()
})
buscar.addEventListener('click',()=>{
     let valorTexto = pesquisa.value
     let array = document.querySelectorAll('.busca')
     
     for (const item of array) {
        item.parentElement.parentElement.parentElement.style.display = 'block'
     }
     for (const item of array) {
        if(!item.textContent.includes(valorTexto)){
            item.parentElement.parentElement.parentElement.style.display = 'none'
        }
        
     }
})
apagar.addEventListener('click', ()=>{
    let array = document.querySelectorAll('.busca')
     
     for (const item of array) {
        item.parentElement.parentElement.parentElement.style.display = 'block'
     }
     pesquisa.value=''
})



function limpaInput(){
    Titulo.value = ''
    Skill.value = ''
    categoria.value = ''
    descriao.value = ''
    youtube.value = ''
}
