const navSlider = () =>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks  = document.querySelectorAll('.nav-links li')


    burger.addEventListener('click', () =>{
        //toggle nav
        nav.classList.toggle('nav-active')
        //animate links
        navLinks.forEach((links, index)=> {
            if(links.style.amimate) {
                links.style.animate = ''
            }else {
                links.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`

            }
            console.log(index / 5);
            
        })
    })
   
}

navSlider()