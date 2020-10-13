document.getElementById('hamburger-toggler').checked = false
document.getElementsByClassName('toTopBtn')[0].style.opacity = 0
var pre_backgroundImage
document.getElementById('hamburger-toggler').onchange = (ev) => {

    if (document.getElementById('hamburger-toggler').checked) {
        pre_backgroundImage = document.getElementsByTagName("nav")[0].style.backgroundImage;
        document.getElementsByTagName("nav")[0].style.backgroundImage = "linear-gradient(180deg, #000000ff, rgba(0,0,0, 1))";
    } else {
        setTimeout(() => {
            document.getElementsByTagName("nav")[0].style.backgroundImage = pre_backgroundImage
        }, 1000);
    }
}
window.addEventListener('scroll', (e) => {
    if (document.getElementById('hamburger-toggler').checked == true) return;
    var nav_op = document.documentElement.scrollTop / document.documentElement.clientHeight * 3
    if (nav_op > 2.5) {
        document.getElementsByClassName('toTopBtn')[0].style.opacity = 1
    } else {
        document.getElementsByClassName('toTopBtn')[0].style.opacity = 0
    }
    nav_op = nav_op > 0.8 ? 0.8 : nav_op
    console.log(nav_op)
    document.getElementsByTagName("nav")[0].style.backgroundImage = "linear-gradient(180deg, #404244c0, rgba(40, 42, 44, " + nav_op * nav_op + "))";
}, false)

function toTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}