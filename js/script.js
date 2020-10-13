// Parallax Code
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
var $start = document.getElementById('start')
$start.onclick = () => {
    document.getElementById('start').hidden = true
    var hei = 100
    var i = setInterval(() => {
        hei = hei - 1;
        document.getElementById('ossa').style.height = hei + "vh"
        if (hei == 30) clearInterval(i)
    }, 2);
}

if (document.documentElement.scrollTop > document.documentElement.clientHeight * 0.2) {
    document.getElementById('ossa').style.height = "30vh"
} else {
    document.getElementById('ossa').style.height = "100vh"
}

function change(a) {
    document.getElementsByClassName('p404')[0].innerHTML = a
    document.getElementsByClassName('p404')[1].innerHTML = a
}
var onFrame = false
window.addEventListener('scroll', (e) => {
    console.log(document.documentElement.scrollTop, document.body.clientHeight - document.documentElement.clientHeight)
    if (document.body.clientHeight - document.documentElement.clientHeight - document.documentElement.scrollTop < document.documentElement.clientHeight) {
        if (!onFrame) {
            frame();
        }
    } else {
        stop();
    }
}, false)

ossa.addEventListener('touchmove', () => {
    setTimeout(() => {
        console.log("touch0")
        if (document.getElementById('ossa').style.height == "100vh") {
            var hei = 100
            var i = setInterval(() => {
                hei = hei - 1;
                document.getElementById('ossa').style.height = hei + "vh"
                if (hei == 30) clearInterval(i)
            }, 2);
            document.getElementById('start').hidden = true
            setTimeout(() => {
                // change("Talk&nbspis&nbspcheap.Show&nbspme&nbspthe&nbspcode")
                // document.getElementsByClassName('p404')[0].style.fontSize = "50px"
                // document.getElementsByClassName('p404')[1].style.fontSize = "50px"
                change("Welcome")
            }, 500);
        }
        //  else if (document.getElementById('ossa').style.height == "30vh"){
        //     document.getElementById('start').hidden = false
        //     var hei = 30
        //     var i = setInterval(() => {
        //         hei = hei + 1;
        //         document.getElementById('ossa').style.height = hei + "vh"
        //         if (hei == 100) clearInterval(i)
        //     }, 2);
        //     setTimeout(() => {
        //         change("OSSA")
        //     }, 500);
        // }
    }, 20);

}, false);

// var hei = 100
// window.addEventListener('scroll', (e) => {
//     // e.preventDefault();
//     let scrolled = document.documentElement.scrollTop / (1080 - document.documentElement.clientHeight)
//     // console.log(document.documentElement.clientHeight,document.documentElement.scrollTop)
//     // console.log(scrolled)
//     if (hei > 100 - 200 * scrolled && 100 - 200 * scrolled > 30) {
//         hei = 100 - 200 * scrolled
//         // e.preventDefault()
//     } else {
//         hei = 30
//     }
//     // hei = 100 - 50 * scrolled
//     document.getElementById('ossa').style.height = hei + "vh"
// }, false)
// window.addEventListener('scroll', (e) => {
//     if (document.documentElement.scrollTop < 300) {
//         document.getElementsByTagName("header")[0].style.backgroundColor = "#ffffff00"
//         document.getElementsByTagName("header")[0].style.color = "#87b1ff20"
//     } else {
//         document.getElementsByTagName("header")[0].style.backgroundColor = "#222222e0"
//         document.getElementsByTagName("header")[0].style.color = "#87b1ff"
//     }
// })

//兼容性写法，该函数也是网上别人写的，不过找不到出处了，蛮好的，所有我也没有必要修改了
//判断鼠标滚轮滚动方向
if (window.addEventListener) //FF,火狐浏览器会识别该方法
    window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel; //W3C
//统一处理滚轮滚动事件
function wheel(event) {
    var delta = 0;

    if (!event) event = window.event;
    if (event.wheelDelta) { //IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta; //因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
    } else if (event.detail) { //FF浏览器使用的是detail,其值为“正负3”
        delta = -event.detail / 3;
    }
    if (delta)
        handle(delta);
    event = event || window.event;
}


//上下滚动时的具体处理函数
function handle(delta) {
    if (delta < 0) { //向下滚动
        if (document.getElementById('ossa').style.height == "100vh") {
            var hei = 100
            var i = setInterval(() => {
                hei = hei - 1;
                document.getElementById('ossa').style.height = hei + "vh"
                if (hei == 30) clearInterval(i)
            }, 2);
            document.getElementById('start').hidden = true
            setTimeout(() => {
                // change("Talk&nbspis&nbspcheap.Show&nbspme&nbspthe&nbspcode")
                // document.getElementsByClassName('p404')[0].style.fontSize = "50px"
                // document.getElementsByClassName('p404')[1].style.fontSize = "50px"
                change("Welcome")
            }, 500);
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }, 200);

        }
    } else { //向上滚动
        if (document.documentElement.scrollTop == 0 && document.getElementById('ossa').style.height == '30vh') {
            document.getElementById('start').hidden = false
            var hei = 30
            var i = setInterval(() => {
                hei = hei + 1;
                document.getElementById('ossa').style.height = hei + "vh"
                if (hei == 100) clearInterval(i)
            }, 2);
            setTimeout(() => {
                change("OSSA")
            }, 500);

        }
    }
}

//cmiic code
function project3D(x, y, z, vars) {

    var p, d;
    x -= vars.camX;
    y -= vars.camY - 8;
    z -= vars.camZ;
    p = Math.atan2(x, z);
    d = Math.sqrt(x * x + z * z);
    x = Math.sin(p - vars.yaw) * d;
    z = Math.cos(p - vars.yaw) * d;
    p = Math.atan2(y, z);
    d = Math.sqrt(y * y + z * z);
    y = Math.sin(p - vars.pitch) * d;
    z = Math.cos(p - vars.pitch) * d;
    var rx1 = -1000;
    var ry1 = 1;
    var rx2 = 1000;
    var ry2 = 1;
    var rx3 = 0;
    var ry3 = 0;
    var rx4 = x;
    var ry4 = z;
    var uc = (ry4 - ry3) * (rx2 - rx1) - (rx4 - rx3) * (ry2 - ry1);
    var ua = ((rx4 - rx3) * (ry1 - ry3) - (ry4 - ry3) * (rx1 - rx3)) / uc;
    var ub = ((rx2 - rx1) * (ry1 - ry3) - (ry2 - ry1) * (rx1 - rx3)) / uc;
    if (!z) z = 0.000000001;
    if (ua > 0 && ua < 1 && ub > 0 && ub < 1) {
        return {
            x: vars.cx + (rx1 + ua * (rx2 - rx1)) * vars.scale,
            y: vars.cy + y / z * vars.scale,
            d: (x * x + y * y + z * z)
        };
    } else {
        return {
            d: -1
        };
    }
}

function elevation(x, y, z) {

    var dist = Math.sqrt(x * x + y * y + z * z);
    if (dist && z / dist >= -1 && z / dist <= 1) return Math.acos(z / dist);
    return 0.00000001;
}

function rgb(col) {

    col += 0.000001;
    var r = parseInt((0.5 + Math.sin(col) * 0.5) * 16);
    var g = parseInt((0.5 + Math.cos(col) * 0.5) * 16);
    var b = parseInt((0.5 - Math.sin(col) * 0.5) * 16);
    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}


function interpolateColors(RGB1, RGB2, degree) {

    var w2 = degree;
    var w1 = 1 - w2;
    return [w1 * RGB1[0] + w2 * RGB2[0], w1 * RGB1[1] + w2 * RGB2[1], w1 * RGB1[2] + w2 * RGB2[2]];
}


function rgbArray(col) {

    col += 0.000001;
    var r = parseInt((0.5 + Math.sin(col) * 0.5) * 256);
    var g = parseInt((0.5 + Math.cos(col) * 0.5) * 256);
    var b = parseInt((0.5 - Math.sin(col) * 0.5) * 256);
    return [r, g, b];
}


function colorString(arr) {

    var r = parseInt(arr[0]);
    var g = parseInt(arr[1]);
    var b = parseInt(arr[2]);
    return "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2);
}


function process(vars) {


    if (vars.points.length < vars.initParticles)
        for (var i = 0; i < 5; ++i) spawnParticle(vars);
    var p, d, t;

    p = Math.atan2(vars.camX, vars.camZ);
    d = Math.sqrt(vars.camX * vars.camX + vars.camZ * vars.camZ);
    d -= Math.sin(vars.frameNo / 80) / 25;
    t = Math.cos(vars.frameNo / 300) / 165;
    vars.camX = Math.sin(p + t) * d;
    vars.camZ = Math.cos(p + t) * d;
    vars.camY = -Math.sin(vars.frameNo / 220) * 15;
    vars.yaw = Math.PI + p + t;
    vars.pitch = elevation(vars.camX, vars.camZ, vars.camY) - Math.PI / 2;

    var t;
    for (var i = 0; i < vars.points.length; ++i) {

        x = vars.points[i].x;
        y = vars.points[i].y;
        z = vars.points[i].z;
        d = Math.sqrt(x * x + z * z) / 1.0075;
        t = .1 / (1 + d * d / 5);
        p = Math.atan2(x, z) + t;
        vars.points[i].x = Math.sin(p) * d;
        vars.points[i].z = Math.cos(p) * d;
        vars.points[i].y += vars.points[i].vy * t * ((Math.sqrt(vars.distributionRadius) - d) * 2);
        if (vars.points[i].y > vars.vortexHeight / 2 || d < .25) {
            vars.points.splice(i, 1);
            spawnParticle(vars);
        }
    }
}

function drawFloor(vars) {

    var x, y, z, d, point, a;
    for (var i = -25; i <= 25; i += 1) {
        for (var j = -25; j <= 25; j += 1) {
            x = i * 2;
            z = j * 2;
            y = vars.floor;
            d = Math.sqrt(x * x + z * z);
            point = project3D(x, y - d * d / 85, z, vars);
            if (point.d != -1) {
                size = 1 + 15000 / (1 + point.d);
                a = 0.15 - Math.pow(d / 50, 4) * 0.15;
                if (a > 0) {
                    vars.ctx.fillStyle = colorString(interpolateColors(rgbArray(d / 26 - vars.frameNo / 40), [0, 128, 32], .5 + Math.sin(d / 6 - vars.frameNo / 8) / 2));
                    vars.ctx.globalAlpha = a;
                    vars.ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
                }
            }
        }
    }
    vars.ctx.fillStyle = "#82f";
    for (var i = -25; i <= 25; i += 1) {
        for (var j = -25; j <= 25; j += 1) {
            x = i * 2;
            z = j * 2;
            y = -vars.floor;
            d = Math.sqrt(x * x + z * z);
            point = project3D(x, y + d * d / 85, z, vars);
            if (point.d != -1) {
                size = 1 + 15000 / (1 + point.d);
                a = 0.15 - Math.pow(d / 50, 4) * 0.15;
                if (a > 0) {
                    vars.ctx.fillStyle = colorString(interpolateColors(rgbArray(-d / 26 - vars.frameNo / 40), [32, 0, 128], .5 + Math.sin(-d / 6 - vars.frameNo / 8) / 2));
                    vars.ctx.globalAlpha = a;
                    vars.ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
                }
            }
        }
    }
}

function sortFunction(a, b) {
    return b.dist - a.dist;
}

function draw(vars) {

    vars.ctx.globalAlpha = .15;
    vars.ctx.fillStyle = "rgba(0,0,0,0.9)";
    vars.ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawFloor(vars);

    var point, x, y, z, a;
    for (var i = 0; i < vars.points.length; ++i) {
        x = vars.points[i].x;
        y = vars.points[i].y;
        z = vars.points[i].z;
        point = project3D(x, y, z, vars);
        if (point.d != -1) {
            vars.points[i].dist = point.d;
            size = 1 + vars.points[i].radius / (1 + point.d);
            d = Math.abs(vars.points[i].y);
            a = .8 - Math.pow(d / (vars.vortexHeight / 2), 10000) * .8;
            vars.ctx.globalAlpha = a >= 0 && a <= 1 ? a : 0;
            vars.ctx.fillStyle = rgb(vars.points[i].color);
            if (point.x > -1 && point.x < vars.canvas.width && point.y > -1 && point.y < vars.canvas.height) vars.ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
        }
    }
    vars.points.sort(sortFunction);
}


function spawnParticle(vars) {

    var p, ls;
    pt = {};
    p = Math.PI * 2 * Math.random();
    ls = Math.sqrt(Math.random() * vars.distributionRadius);
    pt.x = Math.sin(p) * ls;
    pt.y = -vars.vortexHeight / 2;
    pt.vy = vars.initV / 20 + Math.random() * vars.initV;
    pt.z = Math.cos(p) * ls;
    pt.radius = 200 + 800 * Math.random();
    pt.color = pt.radius / 1000 + vars.frameNo / 250;
    vars.points.push(pt);
}
onPlay = true

var requestId

function frame(vars) {
    onFrame = true
    if (vars === undefined) {
        var vars = {};
        vars.canvas = document.querySelector("canvas");
        vars.ctx = vars.canvas.getContext("2d");
        // vars.canvas.width = document.body.clientWidth;
        // vars.canvas.height = document.body.clientHeight;
        vars.canvas.width = window.innerWidth;
        vars.canvas.height = window.innerHeight;
        window.addEventListener("resize", function () {
            vars.canvas.width = window.innerWidth;
            vars.canvas.height = window.innerHeight;
            vars.cx = vars.canvas.width / 2;
            vars.cy = vars.canvas.height / 2;
        }, true);
        vars.frameNo = 0;

        vars.camX = 0;
        vars.camY = 0;
        vars.camZ = -14;
        vars.pitch = elevation(vars.camX, vars.camZ, vars.camY) - Math.PI / 2;
        vars.yaw = 0;
        vars.cx = vars.canvas.width / 2;
        vars.cy = vars.canvas.height / 2;
        vars.bounding = 10;
        vars.scale = 500;
        vars.floor = 26.5;

        vars.points = [];
        vars.initParticles = 700;
        vars.initV = .01;
        vars.distributionRadius = 800;
        vars.vortexHeight = 25;
    }

    vars.frameNo++;
    requestId = requestAnimationFrame(function () {
        frame(vars);
    });

    process(vars);
    draw(vars);
}

function stop() {
    cancelAnimationFrame(requestId)
    onFrame = false
}