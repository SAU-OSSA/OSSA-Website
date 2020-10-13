window.addEventListener('scroll', (e) => {
    var nav_op = document.documentElement.scrollTop / document.documentElement.clientHeight * 3
    nav_op = nav_op > 0.8 ? 0.8 : nav_op
    document.getElementsByTagName("nav")[0].style.backgroundImage = "linear-gradient(180deg, #000000c0, rgba(40, 42, 44, " + nav_op * nav_op + "))";
}, false)
