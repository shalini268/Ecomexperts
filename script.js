
function disableScroll() {
  document.body.style.overflow = "hidden";
}


function enableScroll() {
  document.body.style.overflow = "auto";
}


function openModal(buttonId, modalId) {
  const button = document.getElementById(buttonId);
  const modal = document.getElementById(modalId);

  if (button && modal) {
    button.addEventListener("click", () => {
      
      document.querySelectorAll(".modal").forEach(m => {
        m.style.display = "none";
      });

      modal.style.display = "block";

     
      disableScroll();
    });
  }
}

document.querySelectorAll(".close").forEach(closeBtn => {
  closeBtn.addEventListener("click", (e) => {
    const modalId = e.target.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "none";

    enableScroll();
  });
});



window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
      enableScroll();
    }
  });
});

openModal("button1", "modal1");
openModal("button2", "modal2");
openModal("button3", "modal3");
openModal("button4", "modal4");
openModal("button5", "modal5");
openModal("button6", "modal6");
