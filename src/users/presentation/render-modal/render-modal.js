import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";

let modal, form;

export const showModal = () => {
  //TODO cargar usuario por id
  modal?.classList.remove("hide-modal");
};
export const hideModal = () => {
  //TODO Reset del formulario
  modal?.classList.add( "hide-modal" );
  clearForm();
};

const clearForm = () => {
  form?.reset();
}

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userLike)=> Promise<void>} callback
 */

export const renderModal = (element, callback) => {
  if (modal) return;

  modal = document.createElement("div");
  modal.innerHTML = modalHtml;
  modal.className = "modal-container hide-modal";

  form = modal.querySelector("form");

  modal.addEventListener("click", (event) => {
    if (!event.target.classList.contains("modal-container")) return;
    hideModal();
  } );
  

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const userLike = {};

    for (const [key, value] of formData) {
      if (key === "balance") {
        userLike[key] = +value;
        continue
      }
      if (key === "isActive") {
        userLike[key] = value === 'on';
        continue
      }
      userLike[key] = value;
    }

    //TODO guardar usuario;

    hideModal();

    
  });

  element.append(modal);
};
