document.addEventListener('DOMContentLoaded', () =>{
    const navbar = document.querySelector('.navbar')

    document.addEventListener('scroll', (e) =>{
        console.log(window.scrollY);
        if(window.scrollY <= 150){
            navbar.style.background='#000'
            navbar.style.boxShadow='none'
            navbar.style.top= 0
            
        }else{
            navbar.style.top='-120px'
            navbar.style.boxShadow='2px 0 20px rgba(0,0,0,0.8)'
        }
    })
})