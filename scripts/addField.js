 // procurar o botão
 document.querySelector("#add-time")
     //quando clicar no botão
     .addEventListener('click', cloneField)
     //executar uma açao
 function cloneField() {
     //duplicar os campos e identificar qual campo
     const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
         //pegar os campos e idenficar qual o campo
     const fields = newFieldContainer.querySelectorAll('input')
         //limpar cada campo
     fields.forEach(function(field) {
         //pega o field atual e limpa os dados
         field.value = ""
     })

     //colocar na pagina e identificar onde colocar
     document.querySelector('#schedule-items').appendChild(newFieldContainer)
 }