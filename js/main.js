
let userList = document.querySelector(".contact-list")
let messagesList = document.querySelector('.messages-list')
let titlePerson = document.querySelector('.personal')
let newFunctionElement = document.querySelector('.link-list')

let formSubmitElement = document.querySelector('.message-form')
let submitSendButton = document.querySelector('#send-message')
let newTextArea = document.querySelector('#textarea')

let userSearchInput = document.querySelector('.input-search')

let userPhotoModal = document.querySelector('.photouser')
let userNameModal = document.querySelector('.username')
let phoneNumberModal = document.querySelector('.phonenumber')

function findUser(name){
  let searchLiInput = document.createElement('li')
  searchLiInput.textContent = userSearchInput.value
  name = name.toLowerCase()
}

let arr = JSON.parse(localStorage.getItem("__arr")) 
if(arr.length){
  renderData(arr)
}else{
  arr = [] 
}  


// let arr = JSON.parse(localStorage.getItem("__arr")) 
formSubmitElement.addEventListener('submit', event =>{

  event.preventDefault()
  
  let newScript = newTextArea.value

  
  arr.push(newScript)
  localStorage.setItem("__arr", JSON.stringify(arr))
  event.target.reset()
  newTextArea.focus()

  renderData(arr)
})

function renderData(array){
  messagesList.textContent = ""
  
  array.forEach((element, index) =>{
    
    let newLiElement = document.createElement('li')
    newLiElement.classList.add('send')

    let newRemoveButtonElement = document.createElement('button')
    // newRemoveButtonElement.classList.add("todo__close")

    let newElementTextMessage = document.createElement('p')

    newElementTextMessage.textContent = element
    newRemoveButtonElement.textContent = "X"

    newRemoveButtonElement.addEventListener('click', event =>{
      arr.splice(index, 1)
      renderData(arr)
      localStorage.setItem("__arr", JSON.stringify(arr))

    })
    newLiElement.appendChild(newElementTextMessage)
    newLiElement.appendChild(newRemoveButtonElement)
    messagesList.appendChild(newLiElement)
  })
}


// let arr = JSON.parse(localStorage.getItem("__arr")) 
DATA.users.forEach(user =>{
  let newUserPhoto = document.createElement('img')
  let newLiItemElement = document.createElement('li')
  let newTextElement = document.createElement('p')
  newTextElement.textContent = user.name
  newUserPhoto.setAttribute('src', user.photo)
  newUserPhoto.setAttribute('alt', user.name)
  
  newLiItemElement.addEventListener('click', event =>{
    messagesList.textContent = ''
    
    newTextArea.focus()
    
    formSubmitElement.style.display = 'flex'
    newFunctionElement.style.display = "block"

    titlePerson.textContent = user.name 
    
      user.massages.forEach(message =>{

      
        let newMassageLiElement = document.createElement('li')
        newMassageLiElement.classList.add('send')
        
        newMassageLiElement.textContent = message.text
        
        
        userPhotoModal.src = user.photo
        userNameModal.textContent = user.name
        phoneNumberModal.textContent = user.phone
        // messagesList.appendChild(newMassageLiElement)
      })
    })
newLiItemElement.appendChild(newTextElement)
userList.appendChild(newLiItemElement)
newLiItemElement.appendChild(newUserPhoto)
})