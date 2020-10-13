document.getElementById('hamburger-toggler').checked = false
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
    nav_op = nav_op > 0.8 ? 0.8 : nav_op
    console.log(nav_op)
    document.getElementsByTagName("nav")[0].style.backgroundImage = "linear-gradient(180deg, #404244c0, rgba(40, 42, 44, " + nav_op * nav_op + "))";
}, false)