//==================================================
// class
//==================================================

class TestClass {
    constructor() {
        (() => {
            this.test2();
        })();
    }

    init() {
        console.log("!!");
    }

    test1() {
        let can = Myfunc.createCanvas(100,100,false,0,0,10);
        can.style.backgroundColor = "red";
        document.body.appendChild(can);

        let div = Myfunc.createDiv(50,50,11);
        div.style.transform = `rotate(30deg)`;
        let can2 = Myfunc.createCanvas(90,5,false,0,0,0);
        can2.style.backgroundColor = "blue";
        div.appendChildCenter(can2);
        document.body.appendChild(div);
    }

    test2() {
        ctx = document.getElementById("canvasB").getContext("2d");
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.strokeRect(0,0,700,360);
        ctx.strokeRect(30,0,640,360);
        ctx.strokeRect(30,40,640,120);
        ctx.beginPath();
        ctx.arc(130,260,100,0,Math.PI*2,true);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(570,260,100,0,Math.PI*2,true);
        ctx.closePath();  
        ctx.stroke();

    }
}

class Myfunction {
    createDiv(x,y,z) {
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        div.style.zIndex = z;
        div.width = 0;
        div.height = 0;
        return div;
    }

    createCanvas(w,h,isCenter,left,top,zIndex) {
        let canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.style.position = "absolute";
        canvas.style.left = left + "px";
        canvas.style.top = top + "px";
        canvas.style.zIndex = zIndex;
        let ctx = canvas.getContext("2d");
        if(isCenter) {ctx.translate(w/2,h/2)};
        return canvas;
    }

    createEllipseRing(x,y,r,d,h,r1,g1,b1,r2,g2,b2) {
        grad = ctx.createLinearGradient(-200,-200,-200,200);
        grad.addColorStop(0.0,`rgb(${r1},${g1},${b1})`);
        grad.addColorStop(1.0,`rgb(${r2},${g2},${b2})`);
        ctx.fillStyle = grad;
    
        ctx.beginPath();
        ctx.moveTo(x+r,y-h);
        ctx.arc(x,y,r,0,Math.PI,false);
        ctx.arc(x,y-h,r,Math.PI,0,false);
        ctx.moveTo(x+r+d,y-h);
        ctx.arc(x,y-h,r+d,0,Math.PI,true);
        ctx.arc(x,y,r+d,Math.PI,0,true);
        ctx.fill();
    
    }

    translateTosheet(s1,s2,s3,bpm) {
        class tmpSheet {
            constructor(t1,t2,c) {
                this.type1 = t1;
                this.type2 = t2;
                this.count = c;
            }
        }
    
        let r = [];
        let saved = ["0","0"];
    
        let tmp1 = [];
        let tmp2 = [];
        let tmp3 = [];
    
        for(let i = 0; i < s1.length; i ++) {tmp1.push(s1.charAt(i)); tmp2.push(s2.charAt(i)); tmp3.push(s3.charAt(i))};
    
        for(let i = 0; i < s1.length; i ++) {
            if(tmp1[i] !== "0" && tmp1[i] !== "9") {saved[0] = tmp1[i]};
            if(tmp2[i] !== "0" && tmp2[i] !== "9") {saved[1] = tmp2[i]};
            if(tmp1[i] === "9") {tmp1[i] = "b" + saved[0]};
            if(tmp2[i] === "9") {tmp2[i] = "b" + saved[1]};
        }
    
        let saved2 = [false,false];
    
        for(let i = tmp1.length -1; i >= 0; i --) {
            if(tmp1[i].charAt(0) === "b") {saved2[0] = true};
            if(tmp2[i].charAt(0) === "b") {saved2[1] = true};
            if(saved2[0] && !isNaN(tmp1[i]) && tmp1[i] !== "0") {tmp1[i] = "a" + tmp1[i]; saved2[0] = false};
            if(saved2[1] && !isNaN(tmp2[i]) && tmp2[i] !== "0") {tmp2[i] = "a" + tmp2[i]; saved2[1] = false};
        }
    
        for(let i = 0; i < tmp1.length; i ++) {
            if(tmp1[i].length === 1 && tmp1[i].charAt(0) === "0") {tmp1[i] = tmp1[i] + "0"};
            if(tmp2[i].length === 1 && tmp1[i].charAt(0) === "0") {tmp2[i] = tmp2[i] + "0"};  
            if(tmp1[i].length === 1) {tmp1[i] = tmp1[i] + "x"};
            if(tmp2[i].length === 1) {tmp2[i] = tmp2[i] + "x"};
        }
    
        for(let i = 0; i < tmp1.length; i ++) {
            if(tmp1[i].charAt(0) === "a") {tmp1[i] = tmp1[i].charAt(1) + "x" + "h"};
            if(tmp2[i].charAt(0) === "a") {tmp2[i] = tmp2[i].charAt(1) + "x" + "h"};
            if(tmp1[i].charAt(0) === "b") {tmp1[i] = tmp1[i].charAt(1) + "y" + "e"};
            if(tmp2[i].charAt(0) === "b") {tmp2[i] = tmp2[i].charAt(1) + "y" + "e"};
        }
    
        for(let i = 0; i < tmp1.length; i ++) {
            if(tmp1[i].length === 2) {tmp1[i] = tmp1[i] + "0"};
            if(tmp2[i].length === 2) {tmp2[i] = tmp2[i] + "0"};  
        }
    
        for(let i = 0; i < tmp1.length; i ++) {
            if(tmp3[i] !== "0") {tmp1[i] = tmp1[i] + tmp3[i]};
        }
    
        for(let i = 0; i < tmp1.length; i ++) {
            if(tmp1[i].length === 3) {tmp1[i] = tmp1[i] + "0"};
            if(tmp2[i].length === 3) {tmp2[i] = tmp2[i] + "0"};  
        }
    
        for(let i = 0; i < tmp1.length; i ++) {
            if(tmp1[i] === "0000" && tmp2[i] === "0000") {continue};
            let c = Math.round(i *250/bpm);
            r.push(new tmpSheet(tmp1[i],tmp2[i],c));
        }
    
        return r;
    }
}

class Myprototype {
    constructor() {
        (() => {
            Element.prototype.appendChildCenter = function(elm) {
                this.appendChild(elm);
                let w = elm.width;
                let h = elm.height;
                elm.style.left = `${-w/2}px`;
                elm.style.top = `${-h/2}px`;
            }
        })();
    }

}

class Controller {
    //初期値＆アロー関数
    constructor() {
        [this.A,this.B,this.Y,this.X,this.R,this.D,this.L,this.U] = ["0","0","0","0","0","0","0","0"];

        this.Rlast = "1";
        this.Llast = "1";

        this.reflect = (e) => {
            console.log(this);
            e.preventDefault(); //PC側の応答を停止

            let XL = [130,260]; //左側の中心軸
            let XR = [570,260]; //右側の中心軸
            let R = 150; //半径

            
            if(false) {
                for(let i = 1; i >= 0; i--) {
                    let x = (e.touches[i] === undefined)? undefined : parseInt(e.touches[i].pageX), y = (e.touches[i] === undefined)? undefined : parseInt(e.touches[i].pageY);
                    x = x - XL[0], y = y - XL[1];
                    if(isNaN(x)) {
                        [this.A,this.B,this.Y,this.X,this.R,this.D,this.L,this.U] = ["0","0","0","0","0","0","0","0"];
                    }
                    if(x**2 + y**2 <= R**2) {
                        if(y <= x && y >= -x ){this.L = "2"};
                        if(y >= x && y >= -x ){this.D = "3"};
                        if(y >= x && y <= -x ){this.R = "5"};
                        if(y <= x && y <= -x ){this.U = "7"};
                        console.log(x,y);
                    }
                    x = x + XL[0] - XR[0], y = y + XL[1] - XR[1];
                    if((x**2 + y**2 <= R**2)) {
                        if(y <= x && y >= -x ){this.A = "2"};
                        if(y >= x && y >= -x ){this.B = "3"};
                        if(y >= x && y <= -x ){this.Y = "5"};
                        if(y <= x && y <= -x ){this.X = "7"};
                    }
    
                }
            }
            
            this.Llast = this.Llast.charAt(0) + "y";
            this.Rlast = this.Rlast.charAt(0) + "y";

            for(let i = 1; i >= 0; i--) {
                let x = (e.touches[i] === undefined)? undefined : parseInt(e.touches[i].pageX), y = (e.touches[i] === undefined)? undefined : parseInt(e.touches[i].pageY);
                x = x - XL[0], y = y - XL[1];

                if(isNaN(x)) {
                    [this.A,this.B,this.Y,this.X,this.R,this.D,this.L,this.U] = ["0","0","0","0","0","0","0","0"];
                }

                if(x**2 + y**2 <= R**2) {
                    if(y <= x && y >= -x ){this.Llast = "2x",this.L = "2"};
                    if(y >= x && y >= -x ){this.Llast = "3x",this.D = "3"};
                    if(y >= x && y <= -x ){this.Llast = "5x",this.R = "5"};
                    if(y <= x && y <= -x ){this.Llast = "7x",this.U = "7"};
                    console.log(x,y);
                }
                x = x + XL[0] - XR[0], y = y + XL[1] - XR[1];
                if((x**2 + y**2 <= R**2)) {
                    if(y <= x && y >= -x ){this.Rlast = "2x",this.A = "2"};
                    if(y >= x && y >= -x ){this.Rlast = "3x",this.B = "3"};
                    if(y >= x && y <= -x ){this.Rlast = "5x",this.Y = "5"};
                    if(y <= x && y <= -x ){this.Rlast = "7x",this.X = "7"};
                }

            }

            console.log(this.Rlast,this.Llast);
        
        }

        (() => {
            this.init();
        })();
    }

    init() {
        window.ontouchstart = this.reflect;
        window.ontouchend = this.reflect;
    }

    tick() {
        this.display();
    }

    display() {
        let result = `${this.L + this.D + this.R + this.U + this.A + this.B + this.Y + this.X + this.Llast + this.Rlast}`;
        
        document.getElementById("result2").textContent = result;
    }

}

class Administrator {
    constructor() {
        [this.COOL,this.FINE,this.SAFE,this.SAD,this.WORST] = [0,0,0,0,0];

        (() => {this.init()});
    }

    init() {

    }

    tick() {

        
        /*
        if(sheet[j2].count === i2) {
        //    confirm();
            don.currentTime = 0;
            don.play();
            this.verdict();
            j2 ++;
        }
        */

        
        
        
        if(sheet[j2].count > i2 + 10) { //早すぎ

        } else if(sheet[j2].count + 10 < i2) { //遅すぎ
            this.verdict();
            j2 ++;
            console.log("miss");
        } else { //ok
            let [Rn,Ln] = [sheet[j2].type1.slice(0,2),sheet[j2].type2.slice(0,2)];

            if(Ln !== "0x" && Rn !== "0x") { //同時押し
                if((Rn === Con.Rlast && Ln === Con.Llast) || (Rn === Con.Llast && Ln === Con.Rlast)) {
                    console.log("!");
                    this.verdict();
                   j2 ++ ;
                   Con.Llast = Con.Llast.charAt(0);
                   Con.Rlast = Con.Rlast.charAt(0);
                }
            } else if(Ln === "0x" && Rn !== "0x") { //メインのみ
                if((Rn === Con.Rlast) || (Rn === Con.Llast)) {
                    console.log("!");
                   this.verdict();
                   j2 ++ ;
                   Con.Llast = Con.Llast.charAt(0);
                   Con.Rlast = Con.Rlast.charAt(0);
                }
            } else if(Ln !== "0x" && Rn === "0x") { //サブのみ
                if((Ln === Con.Rlast) || (Ln === Con.Llast)) {
                    console.log("!");
                    this.verdict();
                   j2 ++ ;
                   Con.Llast = Con.Llast.charAt(0);
                   Con.Rlast = Con.Rlast.charAt(0);
                }
            }


        }
        
    }

    verdict() {
        if(sheet[j2].type1.charAt(2) === "h" || sheet[j2].type2.charAt(2) === "h"){Judge.fill()};
        if(sheet[j2].type1.charAt(2) === "e" || sheet[j2].type2.charAt(2) === "e"){Judge.clear()};

        let t = Math.floor((Math.abs(sheet[j2].count - i2))/3);
        console.log(t);
        switch(t) {
            case 0: this.COOL ++; break;
            case 1: this.FINE ++; break;
            case 2: this.SAFE ++; break;
            case 3: this.SAD ++; break;
            case 4: this.WORST ++; break;
        }

        document.getElementById("result1").textContent = `COOL:${this.COOL} FINE:${this.FINE} SAFE:${this.SAFE} SAD:${this.SAD} WORST:${this.WORST} `

        

        noteFolder[0].remove();
        noteFolder.shift();
    }



}

class JudgeNote {
    constructor() {
        this.div = Myfunc.createDiv(130,100,200);
        this.canvas1 = Myfunc.createCanvas(60,120,true,0,0,0);

        (() => {this.init()})();
    }

    init() {
        this.div.appendChildCenter(this.canvas1);
        ctx = this.canvas1.getContext("2d");
        
        ctx.strokeStyle = "grey";
        ctx.strokeRect(0,-60,1,120);



        scon.appendChild(this.div);

    }

    tick() {

    }

    fill() {
        let t,image,imageTable; 

        imageTable = ["","","A","B","","Y","","X"];
        t = (sheet[j2].type1.charAt(2) === "h")? sheet[j2].type1.charAt(0):0;
        ctx = this.canvas1.getContext("2d");
        image = document.getElementById(`button${imageTable[t]}`);
        if(image !== null){ctx.drawImage(image,-30,0,60,60)};

        imageTable = ["","","R","D","","L","","U"];
        t = (sheet[j2].type2.charAt(2) === "h")? sheet[j2].type2.charAt(0):0;
        image = document.getElementById(`button${imageTable[t]}`);
        if(image !== null){ctx.drawImage(image,-30,-60,60,60)};
    }

    clear() {
        ctx = this.canvas1.getContext("2d");
        ctx.strokeStyle = "grey";
        if(sheet[j2].type1.charAt(2) === "e"){ctx.clearRect(-30,0,60,60),ctx.strokeRect(0,-60,1,120)};
        if(sheet[j2].type2.charAt(2) === "e"){ctx.clearRect(-30,-60,60,60),ctx.strokeRect(0,-60,1,120)};
        
    }


}

class Note {
    constructor(t1,t2) {
        this.t1 = parseInt(t1);
        this.t2 = parseInt(t2);
        this.div = Myfunc.createDiv(630,100,100);

        this.div1 = Myfunc.createDiv(0,30,0);
        this.canvas1 = Myfunc.createCanvas(60,60,false,0,0,0);
        this.div2 = Myfunc.createDiv(0,-30,0);
        this.canvas2 = Myfunc.createCanvas(60,60,false,0,0,0);

        (() => {this.init()})();
    }

    init() {
        let imageTable,image;

        this.div1.appendChildCenter(this.canvas1);
        this.div2.appendChildCenter(this.canvas2);  
        this.div.appendChild(this.div1);
        this.div.appendChild(this.div2);
        scon.appendChild(this.div);
        
        ctx = this.canvas1.getContext("2d");
        imageTable = ["","","A","B","","Y","","X"];
        image = document.getElementById(`button${imageTable[this.t1]}`);
        if(image !== null) {ctx.drawImage(image,0,0,60,60)};

        ctx = this.canvas2.getContext("2d");
        imageTable = ["","","R","D","","L","","U"];
        image = document.getElementById(`button${imageTable[this.t2]}`);
        if(image !== null) {ctx.drawImage(image,0,0,60,60)};

    }

    tick() {
        let x = this.div.style.left;
        this.div.style.left = `${parseInt(x.slice(0,x.length-2))-5}px`;
    }

    remove() {
        this.div.remove();
    }
}
//==================================================
// global variable
//==================================================

let scon = document.getElementById("container");
let ctx = document.getElementById("canvasT").getContext("2d");
let music = document.getElementById("music");
let don = document.getElementById("don");

let [i1,j1,i2,j2] = [0,0,-100,0];

let bpm = 92;
let delay = 980;
let sheet1 = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000200000200200000000200000200000200200000000000000000000000000900000000000000000000000000000200200200200000200000000300000300000300000300000000000000000000000900000000000000000000000000000500000500000500500000000500000500000500500000000000000000000000000000000000000000000000000900000700700700700000700000000700000700000700000700000000000000000000000000000000000000000700700200000700700000200200700200200000700000000500500700000500500000700700500700700000700000000000000000000500500300000500500000000300000300000300000300000000000000000000900000000000000000000200200300000200200000200200300200200000200000000300300200000200000200000200200000000700000700700000000000000200000200000200000000000000000000000900000000000700000700000700000700000500500700000500000700000000000000000000000000000000000000000000000000000000000000000000000000000000000900000000000300000300000200000200000000000000000900000000000500000500000700000700000500000500500000700000000500000500000500000500000700000700700000000200000200000000000000000000000000000000000900000500500500000700700000700700000000000200000200200000000700000700000700000700000000000000000000000000000200000200000200000200200000000000000000000000000500000000000500000000000300000300200000000000000000000000000000000000000000000900200000000000000500000000000300000000000300000300200000000200000200000000000900000000000700000000000000000000000900000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
let sheet2 = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000200000700000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000500500000500500500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000700000000000000000900000000000500000500000500000000000000000000000000000000000000000000000000000700000000000900000000000200000000000900000000000700000000000000000000000000000000000900000000000300000300000200000200000000000000000900000000000000000000000000000000000500000500500000700000000000000000000000000000000700000700700000000000000000000000000000000300000300000000000000000000000000000000000000000000000000000000000900300000000000000000000000000000000500000500500000500000000000000000000000000000000300000300300000000000000000000000000000000000000000000000000000000000000700000000000500000000000700000700700000000000000000000000000000000000000000000000000000000000000000000000000200000000000700000000000000000000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
let sheet3 = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000L00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000u00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000L00000000000000000000000000000000000000000000000000000000u00000000000000000000000000000000000000000000000L00000000000000000000000000000000000000000000000L00000000000000000000000000000000000000000000u00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000L00000000000000000000000000000000000000000000000L00000000000000000000000000000000000000000L00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000u00000000000000000000d00000000000000000000000000000u00000000000d00000000000000000000000000000000000000000000000u00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
let sheet = [];
let noteFolder = [];

let Admin = new Administrator();
let Con = new Controller();
let Myfunc = new Myfunction();
let Mypro = new Myprototype();
let Test = new TestClass();
let Judge = new JudgeNote();

//let note = new Note(2,2);

//==================================================
// function
//==================================================

function init() {
    onkeydown = mykeydown;

    sheet = Myfunc.translateTosheet(sheet1,sheet2,sheet3,bpm);

    //noteFolder.push(note);
}

function tick() {
    Con.tick();
    Admin.tick();

    noteFolder.forEach(function(e) {
        e.tick();
    })

    if(sheet[j1].count === i1) {
        noteFolder.push(new Note(sheet[j1].type1.charAt(0),sheet[j1].type2.charAt(0)));
        j1 ++;
    }

    i1 ++;
    i2 ++;
}

function start() {
    music.currentTime = 0;
    setTimeout(function(){music.play()},delay);

    setInterval(tick,20);
}


function mykeydown(e) {
    switch(e.key) {
        case "q":
            start()
            break;
    } 
}

let x = "1234567";
console.log(x.slice(0,x.length-2));