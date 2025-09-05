document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            img.classList.add("clicked");
            void img.offsetWidth;    
            setTimeout(() => {
                img.classList.remove("clicked");
            }, 600); 
        });
    });
});
