/************ Menu Toogle Settings ***********/

const btnToogle = document.querySelector(".icon-menu-toogle");
const menuToogle = document.querySelector(".toogle-menu");

function activeMenu() {
    menuToogle.classList.add("active");
}

 btnToogle.addEventListener("click", activeMenu);

 document.addEventListener("click",(event) =>{
        const insideMenu = menuToogle.contains(event.target);
        const onButton = btnToogle.contains(event.target);
        if (!insideMenu && !onButton) {
            menuToogle.classList.remove("active");
        }
 });




/*************** Modal Contato Open/Close  *************/


const modal = document.querySelector(".modal-overlay");
const container = document.querySelector(".container")
const btnContato = document.querySelectorAll(".btn-contato");

function openModal() {
    modal.classList.add("active");
    document.body.classList.add("no-scroll")
    container.classList.add("no-scroll")
}

function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll")
    container.classList.remove("no-scroll")
}

modal.addEventListener("click", (event) => {
    if (event.target=== modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key==="Escape") {
        closeModal();
    }
});

btnContato.forEach((button) => {
    button.addEventListener("click", openModal);
});



/**********Abertura de Modal **************/

const modalButtons = document.querySelectorAll(".modal-open");
const modals = document.querySelectorAll(".modal-overlay");
const closeButtons = document.querySelectorAll(".close-modal");

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add("active");
    document.body.classList.add("modal-is-open");

}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("active");

    const hasActiveModal = document.querySelector(".modal-overlay.active")

    if(!hasActiveModal) {
        document.body.classList.remove("modal-is-open");
    }
}

modalButtons.forEach((button)=> {
    button.addEventListener("click", () => {
        const targetModal = button.dataset.modal;
        openModal(targetModal);
    });
});

closeButtons.forEach((button)=> {
    button.addEventListener("click", (event) => {
        const modal = event.target.closest(".modal-overlay");
        closeModal(modal);
    });
});
modals.forEach((modal)=> {
    modal.addEventListener("click",(event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

document.addEventListener ("keydown", (event) => {
    if(event.key ==="Escape") {
        const activeModal = document.querySelector(".modal-overlay.active");
        closeModal(activeModal);
    }
});