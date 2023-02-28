fetch("http://localhost:3000/peoples")
.then((res) => res.json())
.then((res) => reload(res))
.catch(err => console.log(err))

// let ok = document.querySelector(".ok")
// let okName = document.querySelector(".name")
// let okAge = document.querySelector(".age")
// let modal = document.querySelector('.modal')
let modal = document.createElement('div')
modal.classList.add('modal')

let peoples = document.querySelector(".peoples")
function reload(arr) {
    for(let item of arr) {
    let name = document.createElement('p')
    let age = document.createElement('p')
    let btn = document.createElement('button')
    let img = document.createElement('img')

    img.setAttribute('src', item.url)
    
    
    name.innerHTML = item.name
    age.innerHTML = item.age
    btn.innerHTML = 'OK'
    age.innerHTML = item.age
    
    modal.append(name, age, btn)
    peoples.append(modal, img)

    img.onclick = () => {
        alert('Имя: '+ item.name+'\n'+'Возраст: ' + item.age )
    }
    }
}
