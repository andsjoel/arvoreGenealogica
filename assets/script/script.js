


const btnComecar = document.querySelector('.iniciar');
btnComecar.addEventListener('click', allLettersUp);


function allLettersUp(){
    const name = document.querySelector('#qualSeuNome');
    const value = name.value;

    let conteudo = value.split(" ");
    
    for (let i = 0; i < conteudo.length; i++) {
        conteudo[i] = conteudo[i][0].toUpperCase() + conteudo[i].substr(1).toLowerCase();
    }

    let result = conteudo.join(" ");

    formArea(result)

    }

function formArea (result) {
    let content = document.querySelector('.contentAreaAll');
    content.innerHTML = `<div class="contentAreaAfter">
                            <h2 class="textAfter">Olá, ${result}.</h2>
                            <span class="descNome">Conte-nos o nome do seu familiar.</span>
                            <input id="nomeParente" class="nomeParente" type="text" name="nome" placeholder="Nome e Sobrenome">
                            <span class="descNome">Agora Selecione o que essa Pessoa é sua:</span>
                            <select class="parentSelect">
                                <option value="">--Escolha Parentesco--</option>
                                <option value="pai">Pai</option>
                                <option value="mae">Mãe</option>
                                <option value="avoPaterno">Avô Paterno</option>
                                <option value="avoPaterna">Avó Paterna</option>
                                <option value="avoMaterno">Avô Materno</option>
                                <option value="avoMaterna">Avó Materna</option>
                            </select>
                            <button class="btnAdd button">Adicionar</button>
                         </div>
                        `

    let treeArea = document.querySelector('.mePerfil');
    treeArea.innerHTML = `<div class="mePerfil">
                            <div class="aboutMe">
                                <div class="aboutMePerfil">
                                    <img class="imgLeaf" src="assets/img/leafpng.png">
                                </div>
                                <h2>${result}</h2>
                            </div>
                          </div>
                         `
                        

    const btnAdd = document.querySelector('.btnAdd');
    btnAdd.addEventListener('click', allLettersUpTwo);

}


function allLettersUpTwo() {

    const selected = document.querySelector('.parentSelect');
    const selectValue = selected.options[selected.selectedIndex].value;

    const name = document.querySelector('.nomeParente');
    const value = name.value;

    let conteudo = value.split(" ");
    
    for (let i = 0; i < conteudo.length; i++) {
        conteudo[i] = conteudo[i][0].toUpperCase() + conteudo[i].substr(1).toLowerCase();
    }

    let result = conteudo.join(" ");

    formTree(result, selectValue)
    }

function formTree (result, selectValue) {

    let dad = document.querySelector('.dad');
    let mom = document.querySelector('.mom')
    let patGrandfather = document.querySelector('.patGrandfather')
    let patGrandmother = document.querySelector('.patGrandmother')
    let matGrandfather = document.querySelector('.matGrandfather')
    let matGrandmother = document.querySelector('.matGrandmother')

    if(selectValue == "pai"){

        let hide1 = document.querySelector('.parents')
        hide1.classList.remove('hide')

        dad.innerHTML = `<div class="aboutMe">
                                <div class="aboutMePerfil">
                                    <img class="imgLeaf" src="assets/img/leafpng.png">
                                </div>
                                <h2>${result}</h2>
                            </div>
                        `
    }

    if(selectValue == "mae"){

        let hide1 = document.querySelector('.parents')
        hide1.classList.remove('hide')

        mom.innerHTML = `<div class="aboutMe">
                                <div class="aboutMePerfil">
                                    <img class="imgLeaf" src="assets/img/leafpng.png">
                                </div>
                                <h2>${result}</h2>
                            </div>
                        `
    }

    if(selectValue == "avoPaterno"){

        let hide2 = document.querySelector('.paternalgrand')
        hide2.classList.remove('hide')

        patGrandfather.innerHTML = `<div class="aboutMe">
                                <div class="aboutMePerfil">
                                    <img class="imgLeaf" src="assets/img/leafpng.png">
                                </div>
                                <h2>${result}</h2>
                            </div>
                        `
    }

    if(selectValue == "avoPaterna"){

        let hide2 = document.querySelector('.paternalgrand')
        hide2.classList.remove('hide')

        patGrandmother.innerHTML = `<div class="aboutMe">
                                <div class="aboutMePerfil">
                                    <img class="imgLeaf" src="assets/img/leafpng.png">
                                </div>
                                <h2>${result}</h2>
                            </div>
                        `
    }

    if(selectValue == "avoMaterno"){

        let hide3 = document.querySelector('.maternalgrand')
        hide3.classList.remove('hide')

        matGrandfather.innerHTML = `<div class="aboutMe">
                                <div class="aboutMePerfil">
                                    <img class="imgLeaf" src="assets/img/leafpng.png">
                                </div>
                                <h2>${result}</h2>
                            </div>
                        `
    }

    if(selectValue == "avoMaterna"){

        let hide3 = document.querySelector('.maternalgrand')
        hide3.classList.remove('hide')

        matGrandmother.innerHTML = `<div class="aboutMe">
                                <div class="aboutMePerfil">
                                    <img class="imgLeaf" src="assets/img/leafpng.png">
                                </div>
                                <h2>${result}</h2>
                            </div>
                        `
    }

}



