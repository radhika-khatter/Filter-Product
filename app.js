const searchInput=document.querySelector(".search-input")
const searchBtn=document.getElementsByClassName("searchButton")[0];
const categoryBtns=document.querySelectorAll(".category-btn");
const items=document.querySelectorAll(".item")

const colorChange=(e)=>{
    categoryBtns.forEach((btn)=>{
        btn.classList.remove("active");
    })
    e.target.classList.add("active");
}

const setCategory=(e)=>{
    const category=e.target.dataset.category;
    if(category==="all"){
        items.forEach((item)=>{
            item.style.display="block";
        })
    }
    else{ items.forEach((item)=>{
        const itemCategory=item.dataset.category;
        if(itemCategory!==category){
            item.style.display="none";
        }
        else{
            item.style.display="block";
        }
    })
}
}

const filterProduct=()=>{
    const inputVal=searchInput.value.toLowerCase();
    items.forEach((item)=>{
        const title=item.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if(title.includes(inputVal)){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    })
}

searchInput.addEventListener("keyup",filterProduct);

searchBtn.addEventListener("click",filterProduct);

categoryBtns.forEach((btn)=>{
    btn.addEventListener("click",colorChange);
})

categoryBtns.forEach((btn)=>{
    btn.addEventListener("click",setCategory);
})