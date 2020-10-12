window.addEventListener('scroll', (e) => {
    var nav_op = document.documentElement.scrollTop / document.documentElement.clientHeight * 3
    nav_op = nav_op > 0.8 ? 0.8 : nav_op
    document.getElementsByTagName("nav")[0].style.backgroundImage = "linear-gradient(180deg, #000000c0, rgba(40, 42, 44, " + nav_op * nav_op + "))";
}, false)
var pre_backgroundImage
document.getElementById('hamburger-toggler').onchange = (ev) =>{

    if (document.getElementById('hamburger-toggler').checked) {
        pre_backgroundImage = document.getElementsByTagName("nav")[0].style.backgroundImage;
        document.getElementsByTagName("nav")[0].style.backgroundImage = "linear-gradient(180deg, #000000ff, rgba(0,0,0, 1))";
    } else {
        setTimeout(() => {
            document.getElementsByTagName("nav")[0].style.backgroundImage = pre_backgroundImage
        }, 1000);
    }
}