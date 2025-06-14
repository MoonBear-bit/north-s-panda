let StartButton=document.getElementById('Starter');
let startimg=document.getElementById('startimg');
let credits=document.getElementById('credits')
let popki=document.getElementById('popki');
let grass=document.getElementById('world');
let golder=document.getElementById('money');
let tree_num=document.getElementById('tree_num');
let rock_num=document.getElementById('rock_num');
let diamond_num=document.getElementById('diamond_num');
let alerts=document.getElementById('alert');
let yes=document.getElementById('yes');
let no=document.getElementById('no');
let techtree=document.getElementById('techtree');
let iftechtreebutton=document.getElementById('iftechtreebutton');
let techtree_second=document.getElementById('techtree_second');
let iftechtreebutton_second=document.getElementById('iftechtreebutton_second');
let techtree_in_1=document.getElementById('techtree_in_1');
let techtree_in_2=document.getElementById('techtree_in_2');
let techtree_in_3=document.getElementById('techtree_in_3');
let techtree_in_4=document.getElementById('techtree_in_4');
let techtree_in_5=document.getElementById('techtree_in_5');
let techtree2_in_1=document.getElementById('techtree2_in_1');
let techtree2_in_2=document.getElementById('techtree2_in_2');
let build=document.getElementById('build');
let buildbutton=document.getElementById('buildbutton');
let build_what=document.getElementById('build_what');
let build_next=document.getElementById('build_next')
let nobuild=document.getElementById('nobuild')
let time=document.getElementById('time')
let timebutton=document.getElementById('timebutton')
let diedimg=document.getElementById('died')
let noi=document.getElementById('noi')
document.querySelectorAll('[id="span"]').forEach(el=>{
  el.style.display='none';
});
let gold=0;
let tree=0;
let rock=0;
let diamond=0;
let opening=new Audio("Sound/North's panda.mp3");
let goldsound=new Audio('Sound/gold.mp3')
let eggsound=new Audio('Sound/egg.mp3')
let treesound=new Audio('Sound/tree.mp3')
let rocksound=new Audio('Sound/rock.mp3')
let diamondsound=new Audio('Sound/diamond.mp3')
let start=new Audio('Sound/system start.mp3')
let music=new Audio('Sound/dark.mp3')
let credits_music=new Audio('Sound/main.mp3')
let war_music=new Audio('Sound/war.mp3')
let scream=new Audio('Sound/scream.mp3')
let damage=new Audio('Sound/damage.mp3')
let damage_time=new Audio('Sound/damage.mp3')
let diedsound=new Audio('Sound/died.mp3')
let opener=new Audio('Sound/opener.mp3')
let ifstart=false;
let ifcredits=false;
let money=0;
let all=[];
let golds=[];
let trees=[];
let rocks=[];
let diamonds=[];
let entity=['Northpolebear','Firebear','Whatgo','Fiveridecoo','Twistworm','Realdotdog','Blackpig','Silverlongfish'];
let boss_entity=['TheRifleHunter','','','','','','','','']
let entity_all={
    Northpolebear_all:{power:3,speed:1,get:1,create:1},
    Firebear_all:{power:3,speed:1,get:1,create:1},
    Whatgo_all:{power:1,speed:1,get:1,create:3},
    Fiveridecoo_all:{power:1,speed:1,get:1,create:1},
    Twistworm_all:{power:2,speed:1,get:2,create:2},
    Realdotdog_all:{power:1,speed:1,get:3,create:1},
    Blackpig_all:{power:1,speed:1,get:1,create:1},
    Silverlongfish_all:{power:1,speed:1,get:1,create:3},
}
let house={
    움집:false,
    초가집:false,
    성:false,
    주택:false,
    국방부:false
}
let house_=['움집','초가집','성','주택','국방부','end']
let house_what=0
let yosae={
    토성:false,
    감시초소:false,
    탑:false,
    전망대:false,
    스나이퍼타워:false
}
let yosae_=['토성','감시초소','탑','전망대','스나이퍼타워','end']
let yosae_what=0
let sangsan={
    공방:false,
    대장간:false,
    공장:false,
    ai공장:false
}
let sangsan_=['공방','대장간','공장','ai공장','end']
let sangsan_what=0
let doback={
    주점:false,
    아지트:false,
    카지노:false
}
let doback_=['주점','아지트','카지노','end']
let doback_what=0
let cheeryo={
    온천:false,
    의원:false,
    동네병원:false,
    대학병원:false
}
let cheeryo_=['온천','의원','동네병원','대학병원','end']
let wheels=['움집','초가집','성','주택','국방부','토성','감시초소','탑','전망대','스나이퍼타워','공방','대장간',
    '공장','ai공장','주점','아지트','카지노','온천','의원','동네병원','대학병원']
let cheeryo_what=0
let need_diamond=[1,1,1,1,1]
let follow=[];
let name=''
let ifwar=false;
let ifmouseinthebuildwhat=false
let ifbuild=false
let enemy=[]
let enemy_bow=[]
let enemy_rifle
let warman_num=0
let until_time=0
popki.style.display='none';
golder.style.display='none';
tree_num.style.display='none';
rock_num.style.display='none';
diamond_num.style.display='none';
alerts.style.display='none';
yes.style.display='none';
no.style.display='none';
techtree.style.display='none';
iftechtreebutton.style.display='none';
techtree_second.style.display='none';
iftechtreebutton_second.style.display='none';
techtree_in_1.style.display='none'
techtree_in_2.style.display='none'
techtree_in_3.style.display='none'
techtree_in_4.style.display='none'
techtree_in_5.style.display='none'
techtree2_in_1.style.display='none'
techtree2_in_2.style.display='none'
build.style.display='none';
buildbutton.style.display='none';
build_what.style.display='none'
startimg.style.display='block'
nobuild.style.display='none'
time.style.display='none'
timebutton.style.display='none'
diedimg.style.display='none'
music.volume=0.8
credits_music.volume=0.3
war_music.volume=0.5
let need_money=null;
async function wait(timeout){
    await new Promise(resolve=>setTimeout(resolve(),timeout));
}
noi.addEventListener('click',()=>{
    noi.style.display='none'
    opener.play()
})
function starttutorial(){
    alert('There is an earthworm in front of you.')
    alert('Click on the worm. and click again to move it to the location you want it to be moved to.')
    alert('Click on the worm again to stop it moving.')
    alert('You can enhance your tech tree with diamonds to increase your construction and production capabilities.')
    alert('Use the mouse wheel to select what you want to build, then click on the location where you want to build to build it.')
    alert('Move your allies to get resources close by.')
    alert('And, collect money and click on the egg. You will get an ally.')
    alert('As time goes by, your enemies will strangle you. Fight them and survive.')
    alert('Kill the salmon.')
    alert('Are you ready?')
    alert('Go.')
}
opener.addEventListener('ended',()=>{
    opener.play()
})

yes.addEventListener('click', (()=>{
    starttutorial();
    alerts.style.display='none';
    yes.style.display='none';
    no.style.display='none';
}));
no.addEventListener('click', ()=>{
    alerts.style.display='none';
    yes.style.display='none';
    no.style.display='none';
});
function what_(name){
    alerts.style.display='block';
    yes.style.display='block';
    no.style.display='block';
    if (name=='튜토리얼'){
        alerts.textContent='Tutorial?'; 
    }
}
function update(){
    if (ifstart){
        StartButton.style.display="none";
        credits.style.display="none";
        startimg.style.display='none'
        create(entity[4]);
        popki.style.display='block'
        golder.style.display='block'
        tree_num.style.display='block'
        rock_num.style.display='block'
        diamond_num.style.display='block'
        iftechtreebutton.style.display='block';
        iftechtreebutton_second.style.display='block';
        buildbutton.style.display='block';
        timebutton.style.display='block'
        gold_make();
        tree_make();
        rock_make();
        diamond_make();
    }else if(ifcredits){
        StartButton.style.display="none";
        credits.style.display="none";
        startimg.style.display='none'
        start_credits();
    }else{
        StartButton.style.display="block";
        credits.style.display="block";
    }
}
update();
iftechtreebutton.addEventListener('click',()=>{
    if (techtree.style.display=='block'){
        techtree.style.display='none'
    }else{
        techtree.style.display='block'
    }
});
iftechtreebutton_second.addEventListener('click',()=>{
    if (techtree_second.style.display=='block'){
        techtree_second.style.display='none'
    }else{
        techtree_second.style.display='block'
    }
});
buildbutton.addEventListener('click',()=>{
    if (build.style.display=='block'){
        build.style.display='none'
    }else{
        build.style.display='block'
    }
});
timebutton.addEventListener('click',()=>{
    if (time.style.display=='block'){
        time.style.display='none'
    }else{
        time.style.display='block'
    }
});
let war_num=1
function create_enemy(n,nhp,npower,nspeed){
    let creater=document.createElement("button");
    creater.id=n;
    creater.hp=nhp
    creater.power=npower
    creater.speed=nspeed
    creater.className='enemy';
    creater.type="button";
    creater.style.position="absolute";
    creater.style.left=String(Math.floor(Math.random()*(window.innerWidth-151)))+'px';
    creater.style.top=String(Math.floor(100+Math.random()*(window.innerHeight-300)))+'px';
    document.body.appendChild(creater);
    enemy.push(creater);
    creater.addEventListener('click',()=>{
        for(var i=0;i<all.length;i++){
            if (math(creater,all[i])<200){
                creater.hp-=entity_all[all[i].id+'_all']['power']
                scream.play()
                if (creater.hp<0){
                    creater.remove()
                    enemy=enemy.filter(e=>e!==creater);
                    warman_num-=1
                    if (warman_num<1){
                        ifwar=false
                        music.play()
                        war_music.pause()
                        war_music.currentTime=0
                        if (war_num==1){
                            the_second_war()
                        }
                        if (war_num==2){
                            the_third_war()
                        }
                        if (war_num==3){
                            the_fourth_war()
                        }
                        if (war_num==4){
                            the_fifth_war_boss()
                        }
                    }
                }
            }
        }
    });
    
}
function create_bow_enemy(n,nhp,npower){
    let creater=document.createElement("button");
    creater.id=n;
    creater.hp=nhp
    creater.power=npower
    creater.speed=nspeed
    creater.className='enemy_bow';
    creater.type="button";
    creater.style.position="absolute";
    creater.style.left=String(Math.floor(Math.random()*(window.innerWidth-151)))+'px';
    creater.style.top=String(Math.floor(100+Math.random()*(window.innerHeight-300)))+'px';
    document.body.appendChild(creater);
    enemy_bow.push(creater);
    creater.addEventListener('click',()=>{
        for(var i=0;i<all.length;i++){
            if (math(creater,all[i])<200){
                creater.hp-=entity_all[all[i].id+'_all']['power']
                scream.play()
                if (creater.hp<0){
                    creater.remove()
                    enemy_bow=enemy_bow.filter(e=>e!==creater);
                    warman_num-=1
                    if (warman_num<1){
                        ifwar=false
                        music.play()
                        war_music.pause()
                        war_music.currentTime=0
                        if (war_num==4){
                            the_fifth_war_boss()
                        }
                    }
                }
            }
        }
    });
    
}
function create_boss_enemy_TheRifleHunter(n,nhp,npower,nspeed){
    let creater=document.createElement("button");
    creater.id=n;
    creater.hp=nhp
    creater.power=npower
    creater.className='TheRifleHunter';
    creater.type="button";
    creater.style.position="absolute";
    creater.style.left=String(Math.floor(Math.random()*(window.innerWidth-151)))+'px';
    creater.style.top=String(Math.floor(100+Math.random()*(window.innerHeight-300)))+'px';
    document.body.appendChild(creater);
    enemy_bow.push(creater);
    creater.addEventListener('click',()=>{
        for(var i=0;i<all.length;i++){
            if (math(creater,all[i])<200){
                creater.hp-=entity_all[all[i].id+'_all']['power']
                scream.play()
                if (creater.hp<0){
                    creater.remove()
                    enemy_bow=enemy_bow.filter(e=>e!==creater);
                    warman_num-=1
                    if (warman_num<1){
                        ifwar=false
                        music.play()
                        war_music.pause()
                        war_music.currentTime=0
                        if (war_num==5){
                            the_sixth_war()
                        }
                    }
                }
            }
        }
    });
    
}
function the_sixth_war(){}
function the_fifth_war_boss(){
    until_time=150
    warman_num=0
    setTimeout(()=>{
        for(var i=0;i<5;i++){
            create_bow_enemy(warman_num,5,1)
            warman_num+=1
        }
        create_boss_enemy_TheRifleHunter(warman_num,20,3,1)
    }, 150000);
}
function the_fourth_war(){
    until_time=100
    warman_num=0
    setTimeout(()=>{
        war_num=4
        for(var i=0;i<5;i++){
            create_enemy(warman_num,5,1,2)
            warman_num+=1
        }
        for(var i=0;i<5;i++){
            create_bow_enemy(warman_num,3,1)
            warman_num+=1
        }
    }, 100000);
}
function the_third_war(){
    until_time=100
    warman_num=0
    setTimeout(()=>{
        war_num=3
        for(var i=0;i<10;i++){
            create_enemy(warman_num,5,2,1)
            warman_num+=1
        }
    }, 100000);
}
function the_second_war(){
    until_time=50
    warman_num=0
    setTimeout(()=>{
        war_num=2
        for(var i=0;i<6;i++){
            create_enemy(warman_num,5,1,1)
            warman_num+=1
        }
    }, 50000);
}
function the_first_war(){
    warman_num=0
    for(var i=0;i<3;i++){
        create_enemy(warman_num,3,1,1)
        warman_num+=1
    }
    create_bow_enemy(warman_num,3,1)
    ifwar=true
    music.pause()
    music.currentTime=0
    war_music.play()
    war_music.addEventListener('ended',()=>{
        war_music.play()
    })
}
function startwar(){
    until_time=10
    setTimeout(()=>{
        the_first_war()
    },10000);
}
StartButton.addEventListener('click',()=>{
    let name='튜토리얼'
    what_(name);
    ifstart=true;
    opener.pause()
    music.play();
    update();
    startwar()
});
credits.addEventListener('click',()=>{
    ifcredits=true;
    update();
    opener.pause()
})
music.addEventListener('ended',()=>{
    music.play();
})
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
        reterner=0;
    }
    return reterner;
}   
function create(wt){
    let createrplayer=document.createElement("button");
    createrplayer.id=wt;
    createrplayer.className=wt;
    createrplayer.type="button";
    createrplayer.style.position="absolute";
    createrplayer.hp=10
    createrplayer.power=0
    createrplayer.style.left=String(Math.floor(Math.random()*(window.innerWidth-151)))+'px';
    createrplayer.style.top=String(Math.floor(100+Math.random()*(window.innerHeight-300)))+'px';
    document.body.appendChild(createrplayer);
    all.push(createrplayer);
    follow=[]
    for (var i=0; i<all.length; i++){
        follow.push(false);
    }
    follow.push(false);
    const i_=all.length-1
    createrplayer.addEventListener('click',()=>{
        if (follow[i_]===true){
            follow[i_]=false
        }else{
            if (!follow[i_]){
                follow[i_]=true;
            }
        } 
    });
}
function create_gold(){
    if (golds.length<20){
        let xrandom=Math.floor(Math.random()*(window.innerWidth-151));
        let yrandom=Math.floor(100+Math.random()*(window.innerHeight-300));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let creategold=document.createElement('button');
        creategold.className='gold';
        creategold.type='button';
        creategold.style.left=xrandom;
        creategold.style.top=yrandom;
        creategold.style.display='block';
        document.body.appendChild(creategold);
        golds.push(creategold);
        golds[golds.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],creategold)<200){
                    goldsound.play();
                    creategold.remove();
                    golds.splice(0,1)
                    gold+=1;
                    return
                }
            }
        });
    }
    
}
function create_tree(){
    if (trees.length<10){
        let xrandom=Math.floor(Math.random()*(window.innerWidth-151));
        let yrandom=Math.floor(100+Math.random()*(window.innerHeight-300));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let createtree=document.createElement('button');
        createtree.className='tree';
        createtree.type='button';
        createtree.style.left=xrandom;
        createtree.style.top=yrandom;
        createtree.style.display='block';
        document.body.appendChild(createtree);
        trees.push(createtree);
        trees[trees.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],createtree)<200){
                    treesound.play();
                    createtree.remove();
                    trees.splice(0,1)
                    tree+=1;
                    return
                }
            }
            
        });
    }
    
}
function create_rock(){
    if (rocks.length<10){
        let xrandom=Math.floor(Math.random()*(window.innerWidth-151));
        let yrandom=Math.floor(100+Math.random()*(window.innerHeight-300));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let createrock=document.createElement('button');
        createrock.className='rock';
        createrock.type='button';
        createrock.style.left=xrandom;
        createrock.style.top=yrandom;
        createrock.style.display='block';
        document.body.appendChild(createrock);
        rocks.push(createrock);
        rocks[rocks.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],createrock)<200){
                    rocksound.play();
                    createrock.remove();
                    rocks.splice(0,1)
                    rock+=1;
                    return
                }
            }
            
        });  
    }
    
}
function create_diamond(){
    if (diamonds.length<1){
        let xrandom=Math.floor(Math.random()*(window.innerWidth-151));
        let yrandom=Math.floor(100+Math.random()*(window.innerHeight-300));
        xrandom=String(xrandom)+'px';
        yrandom=String(yrandom)+'px';
        let creatediamond=document.createElement('button');
        creatediamond.className='diamond';
        creatediamond.type='button';
        creatediamond.style.left=xrandom;
        creatediamond.style.top=yrandom;
        creatediamond.style.display='block';
        document.body.appendChild(creatediamond);
        diamonds.push(creatediamond);
        diamonds[diamonds.length-1].addEventListener('click',()=>{
            for (var i=0;i<all.length;i++){
                if (math(all[i],creatediamond)<200){
                    diamondsound.play();
                    creatediamond.remove();
                    diamonds.splice(0,1)
                    diamond+=1;
                    return
                }
            }
        });
    }
    
}
function math(elem1,elem2){
    let x1=parseInt(elem1.style.left);
    let y1=parseInt(elem1.style.top);
    let x2=parseInt(elem2.style.left);
    let y2=parseInt(elem2.style.top)
    let dx=x1-x2;
    let dy=y1-y2;
    return Math.sqrt(dx*dx+dy*dy);
}
function what(){
    random_what=__random__();
    if (random_what=='Nothing'){
    }else{
        create(entity[random_what]);
    }
}
popki.addEventListener('mouseenter',()=>{
    popki.style.opacity=0.5;
});
popki.addEventListener('mouseleave',()=>{
    popki.style.opacity=1;
});
golder.addEventListener('mouseenter',()=>{
    golder.style.opacity=0.5;
});
golder.addEventListener('mouseleave',()=>{
    golder.style.opacity=1;
});
tree_num.addEventListener('mouseenter',()=>{
    tree_num.style.opacity=0.5;
});
tree_num.addEventListener('mouseleave',()=>{
    tree_num.style.opacity=1;
});
rock_num.addEventListener('mouseenter',()=>{
    rock_num.style.opacity=0.5;
});
rock_num.addEventListener('mouseleave',()=>{
    rock_num.style.opacity=1;
});
diamond_num.addEventListener('mouseenter',()=>{
    diamond_num.style.opacity=0.5;
});
diamond_num.addEventListener('mouseleave',()=>{
    diamond_num.style.opacity=1;
});
document.addEventListener("mousemove",(event)=>{
    x=event.clientX;
    y=event.clientY;
});
function gold_make(){
    setTimeout(()=>{
        create_gold();
        gold_make();
    },Math.floor(1000+(Math.random()*(8000-1000))))
}
function tree_make(){
    setTimeout(()=>{
        create_tree();
        tree_make();
    },Math.floor(5000+(Math.random()*(15000-5000))))
}
function rock_make(){
    setTimeout(()=>{
        create_rock();
        rock_make();
    },Math.floor(5000+(Math.random()*(15000-5000))))
}
function diamond_make(){
    setTimeout(()=>{
        create_diamond();
        diamond_make();
    },Math.floor(6500+(Math.random()*(20000-6500))))
}
popki.addEventListener('click',()=>{
    if (gold>=need_money){
        gold-=need_money;
        create(entity[__random__()]);
    }
});
function move(i__,xxy,yyx,n_){
    if (follow[i__]){
        if (xxy>0){
            all[i__].style.left=String(parseInt(all[i__].style.left.replace('px',''))+n_)+"px";
        }else if (xxy<0){
            all[i__].style.left=String(parseInt(all[i__].style.left.replace('px',''))-n_)+"px";
        }
        if (yyx>0){
            all[i__].style.top=String(parseInt(all[i__].style.top.replace('px',''))+n_)+"px";
        }else if (yyx<0){
            all[i__].style.top=String(parseInt(all[i__].style.top.replace('px',''))-n_)+"px";
        }
    }
}
let ifhit=true
damage.addEventListener('ended',()=>{
    ifhit=true;
});
damage_time.addEventListener('ended',()=>{
    setTimeout(() => {
        ifhit=true
    }, 100);
})
function set(){
    setTimeout(() => {
        if (until_time>0){
            until_time-=1
        }
        set()
    }, 1000);
}
set()
function died(){
    diedsound.play()
    diedsound.addEventListener('ended',()=>{
        diedsound.play();
    });
    diedimg.style.display='block'
}
function moveEnemy(enemys){
    if (all.length!=0){
        for (var i=0;i<enemys.length;i++){
            let what_the_small=0
            for (var ii=0;ii<all.length;ii++){
                if (math(enemys[i],all[ii])<math(enemys[i],all[what_the_small])){
                    what_the_small=ii
                }
            }
            console.log(all[what_the_small], what_the_small)
            if (parseInt(all[what_the_small].style.left.replace('px',''))<parseInt(enemys[i].style.left.replace('px',''))){
                enemys[i].style.left=String(parseInt(enemys[i].style.left.replace('px',''))-enemys[i].speed)+'px'
            }else{
                enemys[i].style.left=String(parseInt(enemys[i].style.left.replace('px',''))+enemys[i].speed)+'px'
            }
            if (parseInt(all[what_the_small].style.top.replace('px',''))<parseInt(enemys[i].style.top.replace('px',''))){
                enemys[i].style.top=String(parseInt(enemys[i].style.top.replace('px',''))-enemys[i].speed)+'px'
            }else{
                enemys[i].style.top=String(parseInt(enemys[i].style.top.replace('px',''))+enemys[i].speed)+'px'
            }
        }
    }
}
function whatdied(){
    if (all.length==0 && ifstart){
        ifstart=false
        war_music.pause()
        music.pause()
        credits_music.pause()
        died()
    }
}
function yee(){
    whatdied()
    moveEnemy(enemy);
    for (var i=0;i<all.length;i++){
        for (var ii=0;ii<enemy.length;ii++){
            if (math(all[i],enemy[ii])<70 && ifhit){
                all[i].hp-=enemy[ii].power
                damage.play()
                ifhit=false
            }
        }
    }
    for (var i=0;i<all.length;i++){
        for (var ii=0;ii<enemy_bow.length;ii++){
            if (math(all[i],enemy_bow[ii])<250 && ifhit){
                all[i].hp-=enemy_bow[ii].power
                damage_time.play()
                ifhit=false
                
            }
        }
    }
    for (var i=0;i<all.length;i++){
        if (all[i].hp<0){
            let target=all[i]
            all[i].remove()
            all.splice(all.indexOf(target),1)
        }
    }
    techtree_in_1.textContent=house_[house_what]+' '+need_diamond[0]
    techtree_in_2.textContent=yosae_[yosae_what]+' '+need_diamond[1]
    techtree_in_3.textContent=sangsan_[sangsan_what]+' '+need_diamond[2]
    techtree_in_4.textContent=doback_[doback_what]+' '+need_diamond[3]
    techtree_in_5.textContent=cheeryo_[cheeryo_what]+' '+need_diamond[4]
    if (techtree.style.display=='block'){
        iftechtreebutton.style.left='50vw'
        techtree_in_1.style.display='block'
        techtree_in_2.style.display='block'
        techtree_in_3.style.display='block'
        techtree_in_4.style.display='block'
        techtree_in_5.style.display='block'
    }else{
        iftechtreebutton.style.left='0vw'
        techtree_in_1.style.display='none'
        techtree_in_2.style.display='none'
        techtree_in_3.style.display='none'
        techtree_in_4.style.display='none'
        techtree_in_5.style.display='none'
    }
    if (techtree_second.style.display=='block'){
        iftechtreebutton_second.style.left='50vw'
        techtree2_in_1.style.display='block'
        techtree2_in_2.style.display='block'
    }else{
        iftechtreebutton_second.style.left='0vw'
        techtree2_in_1.style.display='none'
        techtree2_in_2.style.display='none'
    }
    if (build.style.display=='block'){
        buildbutton.style.left='50vw'
        build_what.style.display='block'
        build_next.style.display='block'
    }else{
        buildbutton.style.left='0vw'
        build_what.style.display='none'
        build_next.style.display='none'
    }
    if (time.style.display=='block'){
        timebutton.style.top='10vh'
    }else{
        timebutton.style.top='0vh'
    }
    if (follow.includes(true)){
        grass.style.cursor='crosshair';
    }else{
        grass.style.cursor='default';
    }
    need_money=all.length*10;
    popki.textContent=String(need_money);
    golder.textContent=String(gold);
    tree_num.textContent=String(tree);
    rock_num.textContent=String(rock);
    diamond_num.textContent=String(diamond);
    time.textContent='Until the next wave       '+until_time+"sec"
    for (var i=0; i<all.length; i++){
        var l=parseInt(all[i].style.left.replace('px',''))+35;
        var t=parseInt(all[i].style.top.replace('px',''))+35;
        var xx=x-l
        var yy=y-t
        move(i,xx,yy,1);
    }
    requestAnimationFrame(yee);
}
yee();
function start_credits(){
    credits_music.play();
    grass.style.display='none'
    document.querySelectorAll('[id="span"]').forEach(el => {
        el.style.display = 'block';
    });
    credits_music.addEventListener('ended',()=>{
        credits_music.play()
    })
}
function build_what_move(){
    if (build_what.textContent=='null'){
        build_what.textContent=wheels[0]
        if (house[build_what.textContent]){
            build_what.style.border='5px solid cyan'
        }else{
            build_what.style.border='5px solid red'
        }
    }else{
        var what_the_textContent_in_build_what=null
        what_the_textContent_in_build_what=wheels[wheels.indexOf(build_what.textContent)]
        if (house_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==house_[house_.length-2]){
                build_what.textContent=yosae_[0]
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=house_[1]
                }
                else{
                    build_what.textContent=house_[house_.indexOf(what_the_textContent_in_build_what)+1]
                }
            }
            if (house[build_what.textContent]){
                build_what.style.border='5px solid cyan'
            }else{
                build_what.style.border='5px solid red'
            }
        }
        if (yosae_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==yosae_[yosae_.length-2]){
                build_what.textContent=sangsan_[0]
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=yosae_[1]
                }
                else{
                    build_what.textContent=yosae_[yosae_.indexOf(what_the_textContent_in_build_what)+1]
                }
            }
            if (yosae[build_what.textContent]){
                build_what.style.border='5px solid cyan'
            }else{
                build_what.style.border='5px solid red'
            }
        }
        if (sangsan_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==sangsan_[sangsan_.length-2]){
                build_what.textContent=doback_[0]
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=sangsan_[1]
                }
                else{
                    build_what.textContent=sangsan_[sangsan_.indexOf(what_the_textContent_in_build_what)+1]
                }
            }
            if (sangsan[build_what.textContent]){
                build_what.style.border='5px solid cyan'
            }else{
                build_what.style.border='5px solid red'
            }
        }
        if (doback_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==doback_[doback_.length-2]){
                build_what.textContent=cheeryo_[0]
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=doback_[1]
                }
                else{
                    build_what.textContent=doback_[doback_.indexOf(what_the_textContent_in_build_what)+1]
                }
            }
            if (doback[build_what.textContent]){
                build_what.style.border='5px solid cyan'
            }else{
                build_what.style.border='5px solid red'
            }
        }
        if (cheeryo_.includes(what_the_textContent_in_build_what)){
            if (what_the_textContent_in_build_what==cheeryo_[cheeryo_.length-2]){
                build_what.textContent=house_[0]
            }else{
                if (what_the_textContent_in_build_what==null){
                    build_what.textContent=cheeryo_[1]
                }
                else{
                    build_what.textContent=cheeryo_[cheeryo_.indexOf(what_the_textContent_in_build_what)+1]
                }
            }
            if (cheeryo[build_what.textContent]){
                build_what.style.border='5px solid cyan'
            }else{
                build_what.style.border='5px solid red'
            }
        }
    }
}
techtree_in_1.addEventListener('click',()=>{
    if (diamond>need_diamond[0]-1 && house_what<5){
        house_what+=1
        diamondsound.play()
        diamond-=need_diamond[0]
        need_diamond[0]=need_diamond[0]*3
        house[house_[house_what-1]]=true
    }
});
techtree_in_2.addEventListener('click',()=>{
    if (diamond>need_diamond[1]-1 && yosae_what<5){
        yosae_what+=1
        diamondsound.play()
        diamond-=need_diamond[1]
        need_diamond[1]=need_diamond[1]*3
        yosae[yosae_[yosae_what-1]]=true
    }
});
techtree_in_3.addEventListener('click',()=>{
    if (diamond>need_diamond[2]-1 && sangsan_what<4){
        sangsan_what+=1
        diamondsound.play()
        diamond-=need_diamond[2]
        need_diamond[2]=need_diamond[2]*3
        sangsan[sangsan_[sangsan_what-1]]=true
    }
});
techtree_in_4.addEventListener('click',()=>{
    if (diamond>need_diamond[3]-1 && doback_what<3){
        doback_what+=1
        diamondsound.play()
        diamond-=need_diamond[3]
        need_diamond[3]=need_diamond[3]*3
        doback[doback_[doback_what-1]]=true
    }
});
techtree_in_5.addEventListener('click',()=>{
    if (diamond>need_diamond[4]-1 && cheeryo_what<4){
        cheeryo_what+=1
        diamondsound.play()
        diamond-=need_diamond[4]
        need_diamond[4]=need_diamond[4]*3
        cheeryo[cheeryo_[cheeryo_what-1]]=true
    }
});
build_what.addEventListener('mouseenter',()=>{
    ifmouseinthebuildwhat=true
});
build_what.addEventListener('mouseleave',()=>{
    ifmouseinthebuildwhat=false
});
build_what.addEventListener('wheel',()=>{
    if (ifmouseinthebuildwhat){
        build_what_move()
    }
});
build_next.addEventListener('click',()=>{
    build_what_move()
})
let iffirstbuild=true
build_what.addEventListener('click',()=>{
    build.style.display='none'
    buildbutton.style.left='0vw'
    if (iffirstbuild){
        alert('Click to build. Right click to cancel.')
        iffirstbuild=false
    }
    nobuild.style.display='block'
    ifbuild=true
});
grass.addEventListener('mousedown',()=>{
    if (ifbuild){
        //
        ifbuild=false;
    }
});
nobuild.addEventListener('click',()=>{
    ifbuild=false
    nobuild.style.display='none'
})