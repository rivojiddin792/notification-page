let notifs = document.querySelectorAll(".new-notif");
let notif_number = document.querySelector(".notif-number");
let all_read = document.querySelector(".all-read");

all_read.addEventListener("click", () => {
    for ( let i = 0; i < 3; i++) {
        let notif = notifs[i];
        notif.setAttribute("data-check", "true");
    }

    notif_number.textContent = 0;
});

for ( let i = 0; i < 3; i++) {
    let notif = notifs[i];
    notif.addEventListener("click", () => {
        if (notif.getAttribute("data-check") === "false") {
            notif.setAttribute("data-check", "true");
            notif_number.textContent -= 1; 
        }
    });
}