let StartButton=document.getElementById('Starter');
let popki=document.getElementById('popki');
let egg=document.getElementById('egg');
let grass=document.getElementById('world');
let golder=document.getElementById('money');
let tree_num=document.getElementById('tree_num');
egg.style.display='none'
let gold=0;
let tree=0;
let opening=new Audio("Sound/North's panda.mp3");
let goldsound=new Audio('Sound/gold.mp3')
let eggsound=new Audio('Sound/egg.mp3')
let treesound=new Audio('Sound/bomb.mp3')
let ifstart=false;
let money=0;
let all=[];
let golds=[]
let trees=[]
let entity=['Northpolebear','Firebear','Whatgo','Fiveridecoo','Twistworm','Realdotdog','Blackpig','Silverlongfish'];
let entity_all={
    Northpolebear_all:{power:3,speed:2,get:1,create:1},
    Firebear_all:{power:3,speed:2,get:1,create:1},
    Whatgo_all:{power:1,speed:2,get:1,create:3},
    Fiveridecoo_all:{power:1,speed:2.5,get:1,create:1},
    Twistworm_all:{power:2,speed:2,get:2,create:2},
    Realdotdog_all:{power:1,speed:2,get:3,create:1},
    Blackpig_all:{power:1,speed:2.5,get:1,create:1},
    Silverlongfish_all:{power:1,speed:2,get:1,create:3},
}
let follow=[];
popki.style.display='none'
golder.style.display='none'
tree_num.style.display='none'
let need_money=null;
function update(){
    if (ifstart){
        StartButton.style.display="none";
        create(entity[4]);
        popki.style.display='block'
        golder.style.display='block'
        tree_num.style.display='block'
        gold_make();
        tree_make();
    }else{
        StartButton.style.display="block";
    }
}
update();
StartButton.addEventListener('click',()=>{
    if (ifstart){
        ifstart=false;
    }else{
        ifstart=true;
    }
    update();
});
function __random__(){
    let random=Math.random();
    console.log(random);
    let num=1/8;
    let reterner=null;
    if (random<num && random>0){
        reterner=0;
    }else if (random<num*2 && random>num){
        reterner=1;
    }else if (random<num*3 && random>num*2){
        reterner=2;
    }else if (random<num*4 && random>num*3){
        reterner=3;
    }else if (random<num*5 && random>num*4){
        reterner=4;
    }else if (random<num*6 && random>num*5){
        reterner=5;
    }else if (random<num*7 && random>num*6){
        reterner=6;
    }else if (random<num*8 && random>num*7){
        reterner=7;
    }else{
        reterner='Nothing';
    }
    return reterner;
}   
function create_egg(y,x){
    const egg_start=document.createElement("div");
    egg_start.className="egg";
    egg_start.style.position="absolute";
    egg_start.style.top=y;
    egg_start.style.left=x;
    egg_start.style.opacity=1;
    egg_start.src="/Image/egg.png";
    document.body.appendChild(egg_start);
    egg_start.addEventListener('click',()=>{
        eggsound.play();
        egg_start.remove();
    });
}
function create(wt){
    const creater=document.createElement("button");
    creater.id=wt;
    creater.className=wt;
    creater.type="button";
    creater.style.position="absolute";
    creater.style.top=String(Math.floor(Math.random()*(window.innerHeight-51)))+'px';
    creater.style.left=String(Math.floor(Math.random()*(window.innerWidth-51)))+'px';
    document.body.appendChild(creater);
    all.push(creater);
    create_egg(creater.style.top,creater.style.left);
    follow=[]
    for (var i=0; i<all.length; i++){
        follow.push(false);
    }
    follow.push(false);
    forfor();
}
function create_gold(){
    let xrandom=Math.floor(Math.random()*(window.innerWidth-51));
    let yrandom=Math.floor(Math.random()*(window.innerHeight-51));
    xrandom=String(xrandom)+'px';
    yrandom=String(yrandom)+'px';
    let creategold=document.createElement('button');
    creategold.className='gold';
    creategold.type='button';
    creategold.style.left=xrandom;
    creategold.style.top=yrandom;
    creategold.style.display='block';
    creategold.id='gold';
    document.body.appendChild(creategold);
    golds.push(creategold);
    golds[golds.length-1].addEventListener('click',()=>{
        for (var i=0;i<all.length;i++){
            if (math(all[i],creategold)<150){
                goldsound.play();
                creategold.remove();
                gold+=1;
                return
            }
        }
    });
}
function create_tree(){
    let xrandom=Math.floor(Math.random()*(window.innerWidth-51));
    let yrandom=Math.floor(Math.random()*(window.innerHeight-51));
    xrandom=String(xrandom)+'px';
    yrandom=String(yrandom)+'px';
    let createtree=document.createElement('button');
    createtree.className='tree';
    createtree.type='button';
    createtree.style.left=xrandom;
    createtree.style.top=yrandom;
    createtree.style.display='block';
    createtree.id='tree';
    document.body.appendChild(createtree);
    trees.push(createtree);
    trees[trees.length-1].addEventListener('click',()=>{
        for (var i=0;i<all.length;i++){
            if (math(all[i],createtree)<150){
                treesound.play();
                createtree.remove();
                tree+=1;
                return
            }
        }
        
    });
}
function math(elem1,elem2){
    const x1 = elem1.offsetLeft;
    const y1 = elem1.offsetTop;
    const x2 = elem2.offsetLeft;
    const y2 = elem2.offsetTop;
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}
function what(){
    random_what=__random__();
    if (random_what=='Nothing'){
    }else{
        create(entity[random_what]);
    }
}
function add_2(i){
    if (follow[i]===true){
        follow[i]=false
    }else{
        if (!follow[i]){
                follow[i]=true;
                console.log(i)
        }
    } 
}
function add(i){
    all[i].addEventListener("click",()=>{
        console.log(follow[i])
        add_2(i);  
    });
}
function forfor(){
    add(all.length-1)
}
popki.addEventListener('mouseenter',()=>{
    popki.style.opacity=0.5;
});
popki.addEventListener('mouseleave',()=>{
    popki.style.opacity=1;
});
document.addEventListener("mousemove",(event)=>{
    x=event.clientX;
    y=event.clientY;
});
function gold_make(){
    if (ifstart){
        setTimeout(()=>{
            create_gold();
            gold_make();
        },Math.floor(5000+(Math.random()*(10000-5000))))
    }
}
function tree_make(){
    if (ifstart){
        setTimeout(()=>{
            create_tree();
            tree_make();
        },Math.floor(5000+(Math.random()*(10000-5000))))
    }
}
popki.addEventListener('click',()=>{
    if (gold>=need_money){
        gold-=need_money;
        create(entity[__random__()]);
    }
});
function move(i,xx,yy,n){
    if (follow[i]){
        if (xx>0){
            all[i].style.left=String(parseInt(all[i].style.left.replace('px',''))+Math.random()*n)+"px";
        }else if (xx<0){
            all[i].style.left=String(parseInt(all[i].style.left.replace('px',''))-Math.random()*n)+"px";
        }
        if (yy>0){
            all[i].style.top=String(parseInt(all[i].style.top.replace('px',''))+Math.random()*n)+"px";
        }else if (yy<0){
            all[i].style.top=String(parseInt(all[i].style.top.replace('px',''))-Math.random()*n)+"px";
        }
    }
}
function yee(){
    if (follow.includes(true)){
        grass.style.cursor='crosshair';
    }else{
        grass.style.cursor='default';
    }
    need_money=all.length*15;
    popki.textContent=String(need_money);
    golder.textContent=String(gold);
    tree_num.textContent=String(tree);
    for (var i=0; i<all.length; i++){
        var l=parseInt(all[i].style.left.replace('px',''))+35;
        var t=parseInt(all[i].style.top.replace('px',''))+35;
        var xx=x-l
        var yy=y-t
        var n=entity_all[all[i].id+"_all"]
        n=n['speed'];
        move(i,xx,yy,n);
    }
    requestAnimationFrame(yee);
}
yee();