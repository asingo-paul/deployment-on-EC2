const roles = ["Cloud Architect", "Cloud Engineer", "DevOps Engineer"];
let current = 0;
let letter = 0;
const span = document.getElementById("typed-text");

function typeRole() {
  if (letter < roles[current].length) {
    span.textContent = roles[current].substring(0, letter + 1);
    letter++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(() => {
      letter = 0;
      current = (current + 1) % roles.length;
      typeRole();
    }, 1500);
  }
}

window.onload = typeRole;
