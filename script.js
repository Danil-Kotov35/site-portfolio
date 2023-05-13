let navigation = document.getElementById("navigation"),
    header = document.getElementById("header"),
    headerHeight = header.scrollHeight,
    hr = document.getElementById("hr"),
    links = document.getElementById("navigation__links1"),
    links2 = document.getElementById("navigation__links2"),
    links3 = document.getElementById("navigation__links3"),
    links4 = document.getElementById("navigation__links4"),
    links5 = document.getElementById("navigation__links5");
    

let nameBar = document.getElementById("name");

    console.log(headerHeight);

    window.addEventListener('scroll', function () { 
        const scrollPosition = window.scrollY; // определяем положение скролла
        //console.log(scrollPosition);
        if(scrollPosition > headerHeight && window.innerWidth > 600){ // когда значение положения скролла станет больше высоты блока header закрепляем navbar  
            header.classList.add("fixed");
            navigation.classList.add("navigation_fixed");
            hr.style.display = "none";
            nameBar.style.marginTop = "110px";
        }else{ // когда возвращаемся на верх убираем фиксированную позицию у navbar
            header.classList.remove("fixed");
            nameBar.style.marginTop = "0px";
            navigation.classList.remove("navigation_fixed");
            hr.style.display = "block";
        }
        
    
      });



const list = document.querySelectorAll('.navigation a')
list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('navigation_active'); });
        item.classList.add('navigation_active');
        
    })
})


function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let button = menu.querySelector(".burger-menu_button", ".burger-menu_lines");
    
    
    
    button.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });
  
    links.addEventListener("click", () => toggleMenu());
    links2.addEventListener("click", () => toggleMenu());
    links3.addEventListener("click", () => toggleMenu());
    links4.addEventListener("click", () => toggleMenu());
    links5.addEventListener("click", () => toggleMenu());
  
    function toggleMenu() {
      menu.classList.toggle("burger-menu_active"); 
    }
  }
  
  burgerMenu(".header");