// javascript tolong carikan document html yang classnya diberi nama navbar-nav
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik maka tampilkan class active di css
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
