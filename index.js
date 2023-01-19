(()=>{
    "use strict";

    const menu = document.querySelector(".collapsable-content");
    const closeBtn = document.querySelector(".btn-close");
    const openBtn = document.querySelector(".open-menu");

    const paraTiBtn = document.querySelector("#para-ti");
    const negocioBtn = document.querySelector("#negocio");
    const empresaBtn = document.querySelector("#empresa");
    
    const paraTiPanel = document.querySelector("#para-ti-panel");
    const negocioPanel = document.querySelector("#negocio-panel");
    const empresaPanel = document.querySelector("#empresa-panel");

    document.addEventListener( 'DOMContentLoaded', StartCarrousel);
    openBtn.addEventListener("click", HandleMenu);
    closeBtn.addEventListener("click", HandleMenu);
    paraTiBtn.addEventListener("click", ()=> HandlePanel("para-ti-panel"));
    negocioBtn.addEventListener("click", ()=> HandlePanel("negocio-panel"));
    empresaBtn.addEventListener("click", ()=> HandlePanel("empresa-panel"));

    function StartCarrousel(){
        var splide = new Splide( '.splide', {
            type: "loop",
            heigh:"90vh",
            width: "100vw",
            arrows: false,
            padding:0,
            autoplay:true,
            interval: 4000,
        });
        
        splide.mount();
    }

    function HandleMenu(){
        menu.classList.toggle("d-none");
    }

    function HandlePanel(type){
        switch(type){
            case "para-ti-panel":
                paraTiBtn.classList.remove("active");
                paraTiBtn.classList.add("active");
                empresaBtn.classList.remove("active");
                negocioBtn.classList.remove("active");

                negocioPanel.classList.remove("d-none");
                negocioPanel.classList.add("d-none");
                empresaPanel.classList.remove("d-none");
                empresaPanel.classList.add("d-none");
                paraTiPanel.classList.remove("d-none");
                break;
            case "negocio-panel":
                negocioBtn.classList.remove("active");
                negocioBtn.classList.add("active");
                empresaBtn.classList.remove("active");
                paraTiBtn.classList.remove("active");

                paraTiPanel.classList.remove("d-none");
                paraTiPanel.classList.add("d-none");
                empresaPanel.classList.remove("d-none");
                empresaPanel.classList.add("d-none");
                negocioPanel.classList.remove("d-none");
                break;
            case "empresa-panel":
                empresaBtn.classList.remove("active");
                empresaBtn.classList.add("active");
                negocioBtn.classList.remove("active");
                paraTiBtn.classList.remove("active");

                paraTiPanel.classList.remove("d-none");
                paraTiPanel.classList.add("d-none");
                negocioPanel.classList.remove("d-none");
                negocioPanel.classList.add("d-none");
                empresaPanel.classList.remove("d-none");
                break;
            default:
                paraTiPanel.classList.add("d-none");
                negocioPanel.classList.add("d-none");
                empresaPanel.classList.add("d-none");
                break;
        }
    }





})();