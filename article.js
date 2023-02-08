const card = document.querySelector(".card");
const socialSection = document.querySelector(".social-section");
const social = document.querySelector(".social")
const shareSection = document.querySelector(".share-section");
const share = document.querySelector(".icon-share");
const shareArrow = document.querySelector(".icon-share-arrow");


share.addEventListener("click", showOptions);
function showOptions() {
    if (card.clientWidth < 750) {
        socialSection.style.backgroundColor = "var(--grayish-blue-dark)";
        social.style.display = "none";
        shareSection.style.display = "grid";
        share.style.backgroundColor = "var(--blue-dark)";
        shareArrow.src = "./images/icon-share-clicked.svg";
    } else {
        socialSection.style.gridTemplateColumns = "5fr 0 1fr";
        shareSection.style.display = "grid";
        share.style.backgroundColor = "var(--grayish-blue-dark)";
        shareArrow.src = "./images/icon-share-clicked.svg";
    }
}