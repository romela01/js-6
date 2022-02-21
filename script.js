'use strict';

function startRequist(){
    let currentPage =1;
    let page2 = document.querySelector('.pages')
    let inf = document.querySelector('.pgInfrequist')
    let errorss=document.querySelector('.errors');
    let errors=document.querySelector('.errors p');

let main = document.querySelector('.main')

function getInfo(currentPage){
    let requist = new XMLHttpRequest();
    requist.addEventListener('load', persons);

    requist.addEventListener('error', ()=>{
        page2.textContent = '';
        inf.textContent='';
        let li = document.createElement('li');
        li.textContent = "Oopss Error! Click Update";
        li.style.cursor= 'pointer'
        errors.appendChild(li);
        errorss.style.display= "block";

        errors.addEventListener('click', ()=>{
            window.location.reload()
        })
    });
    
// load function
function persons(){
    let person = this.responseText;
    let personData = JSON.parse(person);

    let divList = document.createElement('div')
    divList.classList.add('divList')

    personData.data.forEach(item => {
        let div = document.createElement('div')
        let ul = document.createElement('ul')

        let li1 = document.createElement('li');
        li1.textContent ='Name: ' +item.first_name;
        ul.appendChild(li1);

        let li2 = document.createElement('li');
        li2.textContent ='Last Name: ' +item.last_name;
        ul.appendChild(li2);

        let img = document.createElement('img');
        img.src =item.avatar;

        let email = document.createElement('p');
        email.textContent ='Email: '+ item.email;

        div.appendChild(ul)
        div.appendChild(img)
        div.appendChild(email)
        
        divList.appendChild(div)
    });

    main.appendChild(divList)
}
requist.open('GET', 'https://reqres.in/api/users?page='+currentPage);
requist.send()

}

let btn1 =document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let page = document.querySelector('.page')

btn1.addEventListener('click',()=>{
    currentPage +=1;
    main.textContent =""
    getInfo(currentPage)
    page.textContent= "Page 2"
    btn1.style.display='none';
    btn2.style.display='block';
})

btn2.addEventListener('click',()=>{
    currentPage -=1;
    main.textContent =""
    getInfo(currentPage)
    page.textContent= "Page 1"
    btn1.style.display='block';
    btn2.style.display='none';
})

getInfo()

}

// start fetch metod

function startFetch(){
    let currentPage = 1

    function pages(num){
        let main = document.querySelector('.main')
        let errorss=document.querySelector('.errors');
        let errors=document.querySelector('.errors p');
        let page = document.querySelector('.pages')

        errors.addEventListener('click', ()=>{
            window.location.reload()
        })
    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET'
    })
    .then(function(response){
        if(response.status !==200){
            throw 'error'
        }
        return response.json();
    })
    .then(function(response){
        let fragment = document.createDocumentFragment();
            response.forEach(item=>{
                if(item.id==num){
                    let div = document.createElement('div')
                    div.classList.add('info')
                    let ul = document.createElement('ul')
                    
                    let li = document.createElement('li')
                    li.textContent ="Person: "+ item.id
                    li.style.color = 'white'
                    ul.appendChild(li)

                    let li1 = document.createElement('li')
                    li1.textContent ="Name: "+ item.name
                    ul.appendChild(li1)
    
                    let li2 = document.createElement('li')
                    li2.textContent ="Last Name: "+ item.username;
                    ul.appendChild(li2)
    
                    let li3 = document.createElement('li')
                    li3.textContent ="Company Name: "+ item.company.name;
                    ul.appendChild(li3)
    
                    let li4 = document.createElement('li')
                    li4.textContent ="Phone: "+ item.phone;
                    ul.appendChild(li4)
    
                    let li5 = document.createElement('li')
                    li5.textContent ="Addres: "+ 'City:'+item.address.city +" Street:"+item.address.street;
                    ul.appendChild(li5)
    
                    let li6 = document.createElement('li')
                    li6.textContent ="Email: "+ item.email;
                    ul.appendChild(li6)
    
                    let li7 = document.createElement('li')
                    li7.textContent ="Website: "+ item.website;
                    ul.appendChild(li7)
    
                    
                    div.appendChild(ul)
                    fragment.appendChild(div)
                }
            })
        
        main.appendChild(fragment)

    })
    .catch(function(error){
        page.textContent = '';
            let li = document.createElement('li');
            li.textContent = "Oopss Error! Click Update";
            li.style.cursor= 'pointer'
            errors.appendChild(li);
            errorss.style.display= "block";
    })
    }
    pages(currentPage)

    //  ...........
    let main = document.querySelector('.main')
    let span = document.querySelector('.pagesN span')

    let page1 = document.querySelector('.class1')
    let page2 = document.querySelector('.class2')
    let page3 = document.querySelector('.class3')
    let page4 = document.querySelector('.class4')
    let page5 = document.querySelector('.class5')
    let page6 = document.querySelector('.class6')
    let page7 = document.querySelector('.class7')
    let page8 = document.querySelector('.class8')
    let page9 = document.querySelector('.class9')
    let page10 = document.querySelector('.class10')

    page1.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =1
        pages(currentPage)
        span.textContent = '1'
    })
    page2.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =2
        pages(currentPage)
        span.textContent = '2'
    })
    page3.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =3
        pages(currentPage)
        span.textContent = '3'
    })
    page4.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =4
        pages(currentPage)
        span.textContent = '4'
    })
    page5.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =5
        pages(currentPage)
        span.textContent = '5'
    })
    page6.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =6
        pages(currentPage)
        span.textContent = '6'
    })
    page7.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =7
        pages(currentPage)
        span.textContent = '7'
    })
    page8.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =8
        pages(currentPage)
        span.textContent = '8'
    })
    page9.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =9
        pages(currentPage)
        span.textContent = '9'
    })
    page10.addEventListener('click',()=>{
        main.textContent= "";
        currentPage =10
        pages(currentPage)
        span.textContent = '10'
    })
    
}
// end fetch

let btnRequist = document.querySelector('.btnrequist');
let btnFetch = document.querySelector('.btnfetch');
let choose = document.querySelector('.choose');
let pgInfo = document.querySelector('.pgInfrequist');
let back = document.querySelector('.backmetods');
let page = document.querySelector('.pages')
let back2 = document.querySelector('.backmetods2');
let main = document.querySelector('.main')
// call Requist function
btnRequist.addEventListener('click',()=>{
    startRequist();
    choose.style.display='none';
    pgInfo.style.display='block';
})
// call fetch Function
btnFetch.addEventListener('click',()=>{
    startFetch();
    main.style.padding='5% 20%'
    choose.style.display='none';
    page.style.display = 'block'
} )
// back metods page
back.addEventListener('click',()=>{
    window.location.reload()
})
back2.addEventListener('click',()=>{
    window.location.reload()
})

