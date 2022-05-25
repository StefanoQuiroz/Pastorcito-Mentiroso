let JSON_CUENTO = {
    nombre:"El pastorcito mentiroso",
    tipo:"Cuento de hadas",
    descripcion:"Pedro es un niño que se pasa los días pastoreando a sus ovejas, de un lado para el otro. Hasta que una tarde tediosa se le ocurre hacer una broma que dejará sorprendidos a todo el pueblo. Una y otra vez los campesinos subirán el monte para ver si el lobo ronda amenazando a Pedro y a sus ovejas, hasta ya perder casi por completo su esperanza en los gritos del niño.   ¿Acudirán por siempre los campesinos a la ayuda de Pedro?",
    creditos:[
                ["Adaptación:","Copec"],
                ["Ilustraciones:","Copec"],
                ["Narración:","Nicole Castillo Ramírez"],
                ["Edición a cargo de:","Copec"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"]
    ],
    ID:0, 
    imagenes:[
        "img/pedro_lobo/pedro_fondo_esc0.jpg",
        "img/pedro_lobo/pedro_fondo_esc1.jpg",
        "img/pedro_lobo/pedro_fondo_esc2.jpg",
        "img/pedro_lobo/pedro_fondo_esc3.jpg",
        "img/pedro_lobo/pedro_fondo_esc4.jpg",
        "img/pedro_lobo/pedro_esc0_barba.png",
        "img/pedro_lobo/pedro_esc0_bigote1.png",
        "img/pedro_lobo/pedro_esc0_bigote2.png",
        "img/pedro_lobo/pedro_esc0_caballo.png",
        "img/pedro_lobo/pedro_esc0_dama.png",
        "img/pedro_lobo/pedro_esc0_oveja.png",
        "img/pedro_lobo/pedro_esc0_pedro.png",
        "img/pedro_lobo/pedro_esc0_perro.png",
        "img/pedro_lobo/pedro_esc1_oveja.png",
        "img/pedro_lobo/pedro_esc1_pedro.png",
        "img/pedro_lobo/pedro_esc1_perro.png",
        "img/pedro_lobo/pedro_esc2_barba.png",
        "img/pedro_lobo/pedro_esc2_bigote1.png",
        "img/pedro_lobo/pedro_esc2_bigote2.png",
        "img/pedro_lobo/pedro_esc2_bigote3.png",
        "img/pedro_lobo/pedro_esc2_dama.png",
        "img/pedro_lobo/pedro_esc2_lobo.png",
        "img/pedro_lobo/pedro_esc2_oveja4.png",
        "img/pedro_lobo/pedro_esc2_pedro6.png",
        "img/pedro_lobo/pedro_esc2_pedroCorre.png",
        "img/pedro_lobo/pedro_esc2_pedroGrita.png",
        "img/pedro_lobo/pedro_esc2_perroA.png",
        "img/pedro_lobo/pedro_esc3_lobo.png",
        "img/pedro_lobo/pedro_esc4_boca.png",
        "img/pedro_lobo/pedro_sprite.png",
        "img/pedro_lobo/pedro_portada.jpg",
        "img/pedro_lobo/pedro_sprite_pajaro_amarillo.png",
        "img/pedro_lobo/pedro_sprite_pajaro_azul.png",
    ], 
    fx_sonido:[
        {nombre:"musica_pastoril_loop",url:"audio/pedro_lobo/fx/musica_pastoril_loop.mp3"},
        {nombre:"caballo_camina",url:"audio/pedro_lobo/fx/caballo_camina.mp3"},
        {nombre:"perro_ladra",url:"audio/pedro_lobo/fx/perro_ladra.mp3"},
        {nombre:"ovejas_balan",url:"audio/pedro_lobo/fx/ovejas_balan.mp3"},
        {nombre:"pajaritos",url:"audio/pedro_lobo/fx/pajaritos.mp3"},
        {nombre:"risa",url:"audio/pedro_lobo/fx/risa.mp3"},
        {nombre:"sube_cerro",url:"audio/pedro_lobo/fx/sube_cerro.mp3"},
        {nombre:"asombro",url:"audio/pedro_lobo/fx/asombro.mp3"},
        {nombre:"persecucion_a",url:"audio/pedro_lobo/fx/persecucion_a.mp3"},
        {nombre:"persecucion_b",url:"audio/pedro_lobo/fx/persecucion_b.mp3"},
        {nombre:"persecucion_c",url:"audio/pedro_lobo/fx/persecucion_c.mp3"},
        {nombre:"grunido",url:"audio/pedro_lobo/fx/grunido.mp3"},
        {nombre:"corriendo",url:"audio/pedro_lobo/fx/corriendo.mp3"},
        {nombre:"lobo_pataleando",url:"audio/pedro_lobo/fx/lobo_pataleando.mp3"},
        {nombre:"parrafo_final",url:"audio/pedro_lobo/fx/parrafo_final.mp3"},
        {nombre:"primer_parrafo",url:"audio/pedro_lobo/fx/primer_parrafo.mp3"},
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/pedro_lobo/pl_mini_0.jpg",
            audio:"audio/pedro_lobo/pedro_lobo_escena_01.mp3",
            parrafos:
            [
                {
                    texto: 'En un pequeño pueblo entre las montañas, vivía un niño llamado Pedro,',
                    tiempo:[0,7.7,15]
                },
                {
                    texto: 'quien ayudaba a sus padres cuidando a las ovejas después de la escuela.',
                    tiempo:[8.2,13.8,0.5]
                },
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/pedro_lobo/pl_mini_1.jpg",
            audio:"audio/pedro_lobo/pedro_lobo_escena_02.mp3",
            parrafos:
            [
                {
                    texto: 'A Pedro le aburría su trabajo.',
                    tiempo:[0,3.2,3] 
                },
                {
                    texto: 'Debía buscar pastos verdes para las ovejas y acompañarlas mientras pastaban.',
                    tiempo:[3.7,10.3,0.5] 
                },
                {
                    texto: 'Siempre lo mismo, día tras día.',
                    tiempo:[10.8,15.5,0.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/pedro_lobo/pl_mini_2.jpg",
            audio:"audio/pedro_lobo/pedro_lobo_escena_03.mp3",
            parrafos:
            [
                {
                    texto: 'Pedro pensaba que era una pérdida de tiempo llevar a las ovejas de un lado a otro cuando ellas podían hacerlo solas.',
                    tiempo:[0,9.6,3]
                },
                {
                    texto: 'Mientras cuidaba a sus ovejas, pensó que sería divertido jugar una broma a los vecinos del pueblo.',
                    tiempo:[10.1,19.2, 1.1]
                },
                {
                    texto: 'Tomó aire y gritó lo más fuerte que pudo: “¡Ayuda, que viene el lobo y me come!”',
                    tiempo:[19.5,31,2]
                },
                {
                    texto: 'Cerro arriba partieron los vecinos armados de palos y herramientas para proteger a Pedro y su rebaño.',
                    tiempo:[31.5,41.2,3]
                },
                {
                    texto: 'Grande fue su disgusto cuando lo encontraron tan feliz y campante.',
                    tiempo:[41.7,48.5,6]
                },
                {
                    texto: '“Pedrito - le dijo el panadero - temimos por tu vida. No lo vuelvas a hacer.”',
                    tiempo:[49,56.7,1.7]
                },
                {
                    texto: 'Pero Pedro volvió a repetir su broma varias veces más.',
                    tiempo:[57.2,63,6]
                },
                {
                    texto: 'Los vecinos, cansados, dejaron de confiar en él.',
                    tiempo:[63.5,68.6,0.5]
                },
                {
                    texto: 'Una tarde, mientras Pedro dormía bajo un árbol, las ovejas comenzaron a balar.',
                    tiempo:[69.1,76.55,13]
                },
                {
                    texto: 'Abrió los ojos y vio que un aterrador lobo saltaba sobre él.',
                    tiempo:[77.05,83.5,0.5]
                },
                {
                    texto: 'Corrió cerro abajo gritando: “¡Auxilio, socorro, que el lobo me come!” Pero ya nadie le creía, así que nadie lo ayudó.',
                    tiempo:[84,99,1]
                },
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/pedro_lobo/pl_mini_3.jpg",
            audio:"audio/pedro_lobo/pedro_lobo_escena_04.mp3",
            parrafos:
            [
                {
                    texto: 'Pedro llegó hasta el mismísimo pueblo dando gritos y corriendo con el lobo pisándole los talones.',
                    tiempo:[0,8.1,2]
                },
                {
                    texto: 'Allí lo vieron los campesinos y corrieron a prestarle ayuda.',
                    tiempo:[8.6,13.8,1.5]
                },
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/pedro_lobo/pl_mini_4.jpg",
            audio:"audio/pedro_lobo/pedro_lobo_escena_05.mp3",
            parrafos:
            [
                {
                    texto: 'Pedro estaba triste y asustado, y tiritaba como una hoja.',
                    tiempo:[0,5.4,2]
                },
                {
                    texto: '“Pedrito, tuviste suerte. El lobo se comió a varias de nuestras ovejas y podría haberte comido a ti” -le dijo su papá.',
                    tiempo:[5.9,16.6,1.2]
                },
                {
                    texto: '“Espero que hayas aprendido por qué no debes decir mentiras.”',
                    tiempo:[17.1,22.4,0.8]
                },
                {
                    texto: '“Desde hoy vigilaré desde la colina <br> y traeré a cada oveja perdida en la neblina.”',
                    tiempo:[23.2,29.2, 0.5]
                },
                {
                    texto: '“Aprendí a respetar al lobo rabioso y jamás volveré a ser mentiroso.”',
                    tiempo:[29.7,38]
                },
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/pedro_lobo/pl_mini_0.jpg",
            audio:"audio/pedro_lobo/pedro_lobo_escena_06.mp3",
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,6,15]
                }/* ,
                {
                    texto: 'Dispuesto a subir la más alta colina para encontrar a sus ovejas grises como neblina.',
                    tiempo:[6.5,13,1]
                },
                {
                    texto: 'Y el lobo siempre recordó a esa horda de vecinos rabiosos, que protegieron a un niño veloz y mentiroso.',
                    tiempo:[13.5,20]
                }, */
            ]
        },
    ]    
};

let ANIM = {
     /* ↓↓↓↓↓ HOLA CATA - COPIA DESDE LA LÍNEA SIGUIENTE ↓↓↓↓↓ */
    main_tl:undefined,
    arrLetras:['A','B','C','D','E','F','G','H','I','J'],
    creapartes:() => {
        // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
        let cont0 = $('#escena_00 .rebano');
        let arrOvejas = Array(7).fill(7);
        cont0.append(ANIM.creaElementos(arrOvejas, ANIM.arrLetras, 'oveja'));
        
        let cont1 = $('#escena_01 .rebano');
        cont1.append(ANIM.creaElementos(arrOvejas, ANIM.arrLetras, 'oveja'));
        
        $('#escena_02 .oveja').append('<div class="sprite masca"></div>');
        
        let cont3 = $('#escena_03 .humitos');
        let arrHumos = Array(15).fill(15);
        cont3.append(ANIM.creaElementos(arrHumos, ['A'], 'humo', 'sprite'));
        
        
    },
    fadeVolume:(cual, desde = 1, hasta=0.2 , t = 1) => {
        let o = {vol:desde};
        let fade = new TimelineMax({onUpdate:function(){
            Player.cambiaVolume(cual, o.vol);
        }});
        
        fade.to(o, t,{vol:hasta});
        fade.play();
    },
    arrWaitSounds:[],
    waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
        
        if(!ANIM[`wait_sound_${cual}`]){
            ANIM[`wait_sound_${cual}`] = new TimelineMax({repeat:cuantasVeces-1});
            
            let o = {val:0};
            let waitTL = `+=${waitFor}`;
            ANIM[`wait_sound_${cual}`]

            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX(cual);
                Player.cambiaVolume(cual,volume);
            },waitTL)
            .to(o, cuantoDura+cuantoDejoAlFinal,{val:100})
            .addLabel('final')
            ;
            
//            ANIM[`wait_sound_${cual}`].add(TweenMax.to(o, cuantoDura+cuantoDejoAlFinal,{val:100}),waitFor);   
            
            if(fade){
                ANIM[`wait_sound_${cual}`].addCallback(function(){
                    ANIM.fadeVolume(cual,volume,volFadeTo, cuantoDura-fadeFrom);
                },waitFor+fadeFrom);
            }
            
            ANIM.arrWaitSounds.push(ANIM[`wait_sound_${cual}`]);
        }
        ANIM[`wait_sound_${cual}`].play(0);
    },
    pauseWaitSound:() => {
         ANIM.arrWaitSounds.map((item, i) => {
            item.pause();
        });
    },
    scalaMe:(que, cuanto, from = 'bottom left', pos = '0% 0%') => {
        TweenMax.set(que,{scale:cuanto, transformOrigin:from, backgroundPosition:pos});
    },
    arrAnimacionesSprite:[],
    pauseAnimaciones:() => {
        ANIM.arrAnimacionesSprite.map((item, i) => {
            item.tl.pause();
        });
        try{ANIM.anim_rebano_01.pause();}catch(err){}
        try{TweenMax.killTweensOf('#escena_01 .pajarito.amarillo', {x:true, y:true,scaleX:true,scaleY:true});}catch(err){}
        try{TweenMax.killTweensOf('#escena_01 .pajarito.azul', {x:true, y:true,scaleX:true,scaleY:true});}catch(err){}
        try{ANIM.anim_sol_01.pause();}catch(err){}
        try{ANIM.anim_sol_02.pause();}catch(err){}
        try{ANIM.anim_mejilla_02.pause();}catch(err){}
        try{ANIM.tl_jo_lobo.pause();}catch(err){}
        try{ANIM.tl_boca_04.pause();}catch(err){}
        try{ANIM.tl_ojo_1.pause();}catch(err){}
        try{ANIM.tl_ojo_2.pause();}catch(err){}
    },
    getTlAnimacionesSprite:(escena,clase,frames, timeOn=1, timeOff = 0, repeatOn=1, yoyo=false, repeatOff = -1) => {
        if(!ANIM[`tl_${clase}_${escena}`]){
            ANIM[`tl_${clase}_${escena}`] = new TimelineMax({repeat:repeatOff});
            ANIM[`tl_${clase}_${escena}`]
                .fromTo(`#escena_${escena} .${clase}`,timeOn,{backgroundPosition:'0% 0%'},{backgroundPosition:`-${(frames-1)*100}% 0%`, ease:
SteppedEase.config(frames-1),repeat:repeatOn,yoyo:yoyo,immediateRender:false})
            .addCallback(function(){/*nada*/},`+=${timeOff}`)
            ;
            ANIM.arrAnimacionesSprite.push({name:`tl_${clase}_${escena}`, tl:ANIM[`tl_${clase}_${escena}`]});
        }
        return ANIM[`tl_${clase}_${escena}`];
    },
    creaElementos:(arr1, arr2,clase, claseAdicional ='') => {
        let count = -1;
        let newArr = arr1.map((item, i) => {
            if(i % arr2.length == 0 ){
                count+=1;
            }
            let j = i-count*arr2.length;
            let letra = arr2[j];
            return `<div class="${claseAdicional} ${clase} ${clase}${letra} ${clase}${(i+1)}"></div>`;
        });
        return newArr.join("");
    },
    aguaLoop:() => {
        let yS = Utils.randomInt(50,120)/100;
        let t = Utils.randomInt(70,100)/100;
        TweenMax.to('#escena_00 .agua',t,{scaleY:yS,transformOrigin:'100% 70%', ease:Back.easeInOut.config(1.7), onComplete:function(){
            if(Player.escena_actual === 0 || Player.escena_actual === 5){
                ANIM.aguaLoop();
            }
        }});  
    },
    animaEscena0:() =>{
        let barba = ANIM.getTlAnimacionesSprite('00','barba',2,Utils.randomInt(30,50)/100);
        barba.resume();
        let bigote1 = ANIM.getTlAnimacionesSprite('00','bigote1',2,Utils.randomInt(30,50)/100);
        bigote1.resume();
        let bigote2 = ANIM.getTlAnimacionesSprite('00','bigote2',2,Utils.randomInt(30,50)/100);
        bigote2.resume();
        let dama = ANIM.getTlAnimacionesSprite('00','dama',2,Utils.randomInt(30,50)/100);
        dama.resume();
        
        ANIM.aguaLoop();
    },

    
    animaEscena1:() => {
        // lo siguiente es para la loma (copiado y pegado del proyecto anterior)
        let keyFrames = [
//			{ top: '100%', left: '83%', transform: 'rotate(60deg)', speed: 0 },
			 { top: '62%', left: '72%', transform: 'rotate(47deg)', zIndex: 1, speed: 2 },
			  { top: '49.5%', left: '65%', transform: 'rotate(23deg)', zIndex: 1, speed: 1 },
			   { top: '46%', left: '60%', transform: 'rotate(6deg)', zIndex: 1, speed: 1 }, 
			   { top: '47%', left: '54%', transform: 'rotate(-16deg)', zIndex: 1, speed: 1 },
			    { top: '53%', left: '48%', transform: 'rotate(-33deg)', zIndex: 1, speed: 1 }, 
			    { top: '70%', left: '39%', transform: 'rotate(-38deg)', zIndex: 1, speed: 1 }, 
			    { top: '100%', left: '39%', transform: 'rotate(0deg)', zIndex: 1, speed: 2 },
			// Se enconden en la primera loma
			{ top: '100%', left: '49%', transform: 'rotate(70deg)', zIndex: 3, speed: 1 },
			 { top: '82.5%', left: '45.5%', transform: 'rotate(60deg)', zIndex: 3, speed: 1 },
			  { top: '63.5%', left: '40.5%', transform: 'rotate(52deg)', zIndex: 3, speed: 1 },
			   { top: '51.7%', left: '36.5%', transform: 'rotate(51deg)', zIndex: 3, speed: 1 },
			    { top: '40%', left: '31.5%', transform: 'rotate(36deg)', zIndex: 3, speed: 1 },
			     { top: '33%', left: '26.5%', transform: 'rotate(23deg)', zIndex: 3, speed: 1 },
			      { top: '30%', left: '22%', transform: 'rotate(3deg)', zIndex: 3, speed: 1 }, 
			      { top: '32%', left: '17%', transform: 'rotate(-28deg)', zIndex: 3, speed: 1 },
			       { top: '44%', left: '11%', transform: 'rotate(-53deg)', zIndex: 3, speed: 1 }, 
			       { top: '70%', left: '4.1%', transform: 'rotate(-62deg)', zIndex: 3, speed: 1 }, 
			       { top: '110%', left: '-3%', transform: 'rotate(-70deg)', zIndex: 3, speed: 2 }
			       ];
        
        let vals = keyFrames.map((item, i) => {
            return {
                y: ANIM.gimePosForPercentage(item.top.replace('%',''),'top'), // convertí el valor de % a px
                x: ANIM.gimePosForPercentage(item.left.replace('%',''),'left'), // convertí el valor de % a px
                zIndex: item.zIndex, 
                rotation: parseFloat(item.transform.replace('rotate(','').replace('deg)',''))};
        });
        
        let rebano = ['perro', 'ovejaA','pedro','ovejaB','ovejaC','ovejaD','ovejaE','ovejaF','ovejaG'];
        
        //para que muevan la patas
       let mueveLasPatas = () => {
            rebano.map((item, i) => {
                let camina = ANIM.getTlAnimacionesSprite('01',item,2, Utils.randomInt(30,70)/100);
                camina.resume();
             });
        }
        
        if(!ANIM.anim_rebano_01){
            ANIM.anim_rebano_01 = new TimelineMax({repeat:-1, onStart:function(){mueveLasPatas();}, onUpdate:function(){mueveLasPatas();}});
            rebano.map((item, i) => {
                let temp = new TimelineMax();
                temp
                .set(`#escena_01 .${item}`,{y:1080, x:2093,rotation:60})
                .to(`#escena_01 .${item}`,21,{bezier:
                                                   {
                                                       curviness:0.25,
                                                       autoRotate:false,
                                                       values:vals
                                                   },
                                                    ease:Power0.easeNone
                                               })
                ;
                ANIM.anim_rebano_01.add(temp, i);
            });
        }
        ANIM.anim_rebano_01.resume(0);
        ANIM.anim_rebano_01.timeScale(0.5);
        
        
        if(!ANIM.anim_sol_01){
            ANIM.anim_sol_01 = new TimelineMax({repeat:-1});
            ANIM.anim_sol_01
                .to('#escena_01 .sol',2,{scale:2, repeat:1, yoyo:true})
            ;
        }
        ANIM.anim_sol_01.resume();
    },
    animaEscena2:() => {
       
        //mariposa
        ANIM.animaMariposa('escena_02');
        
        //pajarito
        ANIM.animaPajarito('02');
        
        if(!ANIM.anim_sol_02){
            ANIM.anim_sol_02 = new TimelineMax({repeat:-1});
            ANIM.anim_sol_02
                .to('#escena_02 .sol',2,{scale:2, repeat:1, yoyo:true})
            ;
        }
        ANIM.anim_sol_02.resume();
        
        if(!ANIM.anim_mejilla_02){
            ANIM.anim_mejilla_02 = new TimelineMax({repeat:-1});
            ANIM.anim_mejilla_02
                .fromTo('#escena_02 .oveja .masca',0.7,{scale:0.7},{scale:0.6, transformOrigin:'bottom left',repeat:15, yoyo:true})
            ;
        }
        ANIM.anim_mejilla_02.resume();
    },
    animaEscena4:() => {
         
        
         if(!ANIM.tl_ojo_1){
            ANIM.tl_ojo_1 = new TimelineMax({repeat:-1});
            ANIM.tl_ojo_1
                .fromTo('#escena_04 .ojos1',0.1,{alpha:0},{alpha:1})
                .to('#escena_04 .ojos1',0.1,{alpha:0})
                .addCallback(function(){/*nada*/},`+=${Utils.randomInt(20,30)/10}`)
                .to('#escena_04 .ojos1',0.1,{alpha:1})
                .to('#escena_04 .ojos1',0.1,{alpha:0})
                .to('#escena_04 .ojos1',0.1,{alpha:1})
                .to('#escena_04 .ojos1',0.1,{alpha:0})
                .addCallback(function(){/*nada*/},`+=${Utils.randomInt(30,70)/10}`)   
            ;
        }
        ANIM.tl_ojo_1.resume(0);
        
        if(!ANIM.tl_ojo_2){
            ANIM.tl_ojo_2 = new TimelineMax({repeat:-1});
            ANIM.tl_ojo_2
                .fromTo('#escena_04 .ojos2',0.1,{alpha:0},{alpha:1})
                .staggerFromTo('#escena_04 .lagrima',0.3,{alpha:0, scaleY:0},{alpha:1, scaleY:1},0.2)
                .staggerTo('#escena_04 .lagrima',2,{y:90},0.2,'-=0.3')
                .staggerTo('#escena_04 .lagrima',1,{alpha:0},0.2,'-=1')
                .to('#escena_04 .ojos2',0.1,{alpha:0})
//                .to('#escena_04 .ojos2',0.1,{alpha:0})
                .addCallback(function(){/*nada*/},`+=${Utils.randomInt(20,30)/10}`)
            ;
        }
        ANIM.tl_ojo_2.resume(0);
         
       
    },
    animaOjoLobo:() => {
        if(!ANIM.tl_jo_lobo){
            ANIM.tl_jo_lobo = new TimelineMax({repeat:-1});
            ANIM.tl_jo_lobo
                .to('#escena_03 .lobo .ojo',0.1,{alpha:1})
                .to('#escena_03 .lobo .ojo',0.1,{alpha:0},'+=0.1')
                .to('#escena_03 .lobo .ojo',0.1,{alpha:1},'+=0.1')
                .to('#escena_03 .lobo .ojo',0.1,{alpha:0},'+=0.1')
                .to('#escena_03 .lobo .ojo',0.1,{alpha:1},'+=1')
                .to('#escena_03 .lobo .ojo',0.1,{alpha:0},'+=0.1')
                .to('#escena_03 .lobo .ojo',0.1,{alpha:1},'+=0.1')
                .to('#escena_03 .lobo .ojo',0.1,{alpha:0},'+=0.1')
                .to('#escena_03 .lobo .ojo',0.1,{alpha:1},'+=2')
                .to('#escena_03 .lobo .ojo',0.1,{alpha:0},'+=0.1')
            ;
        }
        ANIM.tl_jo_lobo.play(0);
    }, 
    animaBocaPapa:() => {
        if(!ANIM.tl_boca_04){
            ANIM.tl_boca_04 = new TimelineMax({});
            ANIM.tl_boca_04
                .fromTo('#escena_04 .boca',0.3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease:
SteppedEase.config(2),repeat:3,yoyo:true})
//                .addCallback(function(){/*nada*/},'+=2')
                .fromTo('#escena_04 .boca',0.1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease:
SteppedEase.config(2),repeat:5,yoyo:true})
                .fromTo('#escena_04 .boca',0.2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease:
SteppedEase.config(2),repeat:7,yoyo:true})
                .fromTo('#escena_04 .boca',0.2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease:
SteppedEase.config(2),repeat:3,yoyo:true})
//                .addCallback(function(){/*nada*/},'+=2')
                .fromTo('#escena_04 .boca',0.3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease:
SteppedEase.config(2),repeat:5,yoyo:true})
                .fromTo('#escena_04 .boca',0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease:
SteppedEase.config(2),repeat:7,yoyo:true})
                .addCallback(function(){/*nada*/},'+=1.5')
            ;
        }
        ANIM.tl_boca_04.resume(0);
        
    },
    gimePosForPercentage:(n, topOleft) => {
        let valor = topOleft == 'top' ? 1080 : 2522; // el 2522 es a proporción respecto del tamaño del cuento antiguo (sí, es extraño)
        return (parseFloat(n) * valor)/100;
    },
    animaMariposa:(cualEscena = 'escena_01',maxY = 700) => {
        let t = Utils.randomInt(5,15);
        let delay = Utils.randomInt(1,7);
        TweenMax.to(`#${cualEscena} .mariposa`,t,{ bezier:{curviness:1.25, autoRotate:true,
                    values:ANIM.randomPathMariposa(maxY)},
                    ease:Power0.easeNone,
                    delay:delay, 
                    onComplete:function(a,b){ANIM.animaMariposa(a,b);},
                    onCompleteParams:[cualEscena,maxY]
                  }); 
    },
    animaPajarito:(cualEscena = '01') => {
        let tweensActives = TweenMax.getTweensOf(`#escena_${cualEscena} .pajarito.amarillo`,true);
        let tweensActives2 = TweenMax.getTweensOf(`#escena_${cualEscena} .pajarito.azul`,true);
            if(tweensActives.length === 0 && tweensActives2.length === 0){
            let cual = Utils.randomInt(0,1) === 0 ? 'azul':'amarillo';
            let dir = Utils.randomInt(0,1) === 0 ? 1 :-1;
            let t = Utils.randomInt(3,7);
            let fromY = Utils.randomInt(50,150);
            let toY = Utils.randomInt(30,350);
            let scale = Utils.randomInt(70,130)/100;
            let delay = Utils.randomInt(1,5);
            let ancho = 100;
            let fromX = dir === 1 ? 0-(ancho*scale) :1920+(ancho*scale);
            let toX = dir === 1 ? 1920+(ancho*scale) : 0-(ancho*scale);
            
            let aleteo = ANIM.getTlAnimacionesSprite(`${cualEscena}`,`pajarito`,2, 0.5);
                aleteo.resume(0);    
                aleteo.timeScale(1/scale);
            if(cual === 'azul'){
                TweenMax.set(`#escena_${cualEscena} .pajarito.amarillo`,{x:fromX});
            } else {
                TweenMax.set(`#escena_${cualEscena} .pajarito.azul`,{x:fromX});
            }
                
            TweenMax.fromTo(`#escena_${cualEscena} .pajarito.${cual}`,t,{ x:fromX , y:fromY,  scaleX:scale*dir, scaleY:scale},
                            {x:toX,y:toY, scaleX:scale*dir, scaleY:scale,
                        ease:Power0.easeNone,
                        delay:delay, 
                        onComplete:function(a){
                            let aleteo = ANIM.getTlAnimacionesSprite(`${a}`,`pajarito`,2, 0.5);
                            aleteo.pause();   
                            ANIM.animaPajarito(a);
                        },
                        onCompleteParams:[cualEscena]
                      });
        }
    },
    randomPathMariposa:(maxY = 700, maxX = 2000) => {
        let cant = Math.floor(Utils.randomInt(2,6)/2) + 1;
        let arr = Array(cant).fill(cant);
        
        let path = arr.map((item, i) => {
            let x = Utils.randomInt(0,maxX);
            let y = Utils.randomInt(0,maxY);
            return {x:x, y:y};
        });
        
        path.unshift({x:0,y:Utils.randomInt(0,maxY)});
        path.push({x:maxX,y:Utils.randomInt(0,maxY)});
        
        return path;
    },
    subeCerro:(cual, keyframes, lastPOS,t=5) => {
//        keyframes.push(lastPOS);
//        let arrFinal = keyframes.concat(lastPOS);
//        console.log(keyframes);
        
        let arrTemp = keyframes.concat(lastPOS);
        let arrFinal = arrTemp.map((item,i)=>{
            let tempItem = {x:item.x, y:item.y, rotation:item.rotation, scaleX:1.4, scaleY:1.4};
            return tempItem;
        });
        console.log(arrFinal);
        return TweenMax.to(`#escena_02 .${cual}`,t,{bezier:
                                                   {
                                                       curviness:0.25,
                                                       autoRotate:false,
                                                       values:arrFinal
                                                   },
                                                    ease:Power1.easeOut,
                                                    onStart:function(){
                                                        let camina = ANIM.getTlAnimacionesSprite('02',cual,2,0.3);
                                                        camina.resume(0);
                                                    },
                                                    onComplete:function(){
                                                        let camina = ANIM.getTlAnimacionesSprite('02',cual,2,0.3);
                                                        camina.pause(0);
                                                    }
                                               });
    },
    bajaCerro:(cual, keyframes, lastPOS,zIndex) => {
        let arrTemp = keyframes.concat(lastPOS).reverse();
        let arrFinal = arrTemp.map((item,i)=>{
            let tempItem = {x:item.x, y:item.y, rotation:item.rotation, scaleX:-1.4, scaleY:1.4};
            return tempItem;
        });
        $(`#escena_02 .${cual}`).css({'z-index':zIndex});
        arrFinal.push({x:2020, y:880, rotation:0, scaleX:-1.4, scaleY:1.4});
        return TweenMax.to(`#escena_02 .${cual}`,3,{bezier:
                                                   {
                                                       curviness:0.25,
                                                       autoRotate:false,
                                                       values:arrFinal
                                                   },
                                                    ease:Power1.easeIn,
                                                    onStart:function(){
                                                        let camina = ANIM.getTlAnimacionesSprite('02',cual,2,0.3);
                                                        camina.resume(0);
                                                    },
                                                    onComplete:function(){
                                                        let camina = ANIM.getTlAnimacionesSprite('02',cual,2,0.3);
                                                        camina.pause(0);
                                                    }
                                               });
    },
    init:() => {
        ANIM.creapartes();
        Player.creaMainTL();
        /***/
        
        ANIM.main_tl.add( TweenMax.to('#escena_00 .caballo',6,{x:-600,y:-60, 
            onStart:function(){
                let camina = ANIM.getTlAnimacionesSprite('00','caballo',2,0.4);
                camina.resume(0);
            },
            onUpdate:function(){
                let camina = ANIM.getTlAnimacionesSprite('00','caballo',2,0.4);
                camina.resume();
            }, 
            onComplete:function(){
                let camina = ANIM.getTlAnimacionesSprite('00','caballo',2,0.4);
                camina.pause();
            }, 
         ease:Power1.easeIn}),'escena_0+=4.5');
        
        
        $('#escena_00 .oveja').each(function(i){
            ANIM.main_tl.add( TweenMax.from(`#escena_00 .oveja${ANIM.arrLetras[i]}`,14,{x:Utils.randomInt(2500,2900),
                onStart:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`oveja${ANIM.arrLetras[i]}`,2, Utils.randomInt(30,70)/100);
                    camina.resume(0);
                },
                onUpdate:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`oveja${ANIM.arrLetras[i]}`,2, Utils.randomInt(30,70)/100);
                    camina.resume();
                },
                onComplete:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`oveja${ANIM.arrLetras[i]}`,2);
                    camina.pause();
                }, 
                ease:Power0.easeNone}),'0_0-=3');
        });
        
        ANIM.main_tl.add( TweenMax.from(`#escena_00 .pedro`,14,{x:Utils.randomInt(2500,2900),
                onStart:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`pedro`,2, Utils.randomInt(30,70)/100);
                    camina.resume(0);
                },
                onUpdate:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`pedro`,2, Utils.randomInt(30,70)/100);
                    camina.resume();
                },
                onComplete:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`pedro`,2);
                    camina.pause();
                }, 
                ease:Power0.easeNone}),'0_0-=3');
        
        ANIM.main_tl.add( TweenMax.from(`#escena_00 .perro`,14,{x:Utils.randomInt(2500,2900),
                onStart:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`perro`,2, Utils.randomInt(30,70)/100);
                    camina.resume(0);
                },
                onUpdate:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`perro`,2, Utils.randomInt(30,70)/100);
                    camina.resume();
                },
                onComplete:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`perro`,2);
                    camina.pause();
                }, 
                ease:Power0.easeNone}),'0_0-=3');
        
        ANIM.main_tl.add( TweenMax.to('#escena_00 .rebano',6,{y:-130}),'0_1-=0.4');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena0();},'0_1-=2');
        ANIM.main_tl.addCallback(function(){
                ANIM.aguaLoop();
                Player.playSoundFX('musica_pastoril_loop');
        },'escena_0+=0.1');
        ANIM.main_tl.addCallback(function(){
                Player.playSoundFX('caballo_camina');
        },'escena_0+=4.5');
        
        ANIM.main_tl.addCallback(function(){
                ANIM.fadeVolume('musica_pastoril_loop',1,0,3);
        },'0_0-=3');
        
        ANIM.main_tl.addCallback(function(){
                Player.playSoundFX('perro_ladra');
                Player.cambiaVolume('perro_ladra', 0.2);
        },'0_0-=1.3');
        ANIM.main_tl.addCallback(function(){
                Player.playSoundFX('ovejas_balan');
                Player.cambiaVolume('ovejas_balan', 0.2);
        },'0_0+=0.1');
        
        //01
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('pajaritos');
            Player.playSoundFX('ovejas_balan');
            ANIM.fadeVolume('pajaritos',1,0,3);
            ANIM.fadeVolume('ovejas_balan',1,0,3);
        },'escena_1+=0.1');
        
        ANIM.main_tl.addCallback(function(){
            ANIM.fadeVolume('pajaritos',1,0,3);
        },'1_0-=3');
        
        ANIM.main_tl.addCallback(function(){
            ANIM.fadeVolume('perro_ladra',1,0,3);
            //Player.playSoundFX('perro_ladra');
        },'1_0-=1.3');
        
        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena1();
        },'1_0+=0.1');
        
        //seteo escena 02 (la del cerro)
        ANIM.main_tl.add( TweenMax.set('#escena_02 .bigote1',{x:1920,y:880, scaleX:1.4, scaleY:1.4, rotation:0}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .bigote2',{x:1920,y:880, scaleX:1.4, scaleY:1.4, rotation:0}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .bigote3',{x:1920,y:880, scaleX:1.4, scaleY:1.4, rotation:0}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .dama',{x:1920,y:880, scaleX:1.4, scaleY:1.4, rotation:0}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .barba',{x:1920,y:880, scaleX:1.4, scaleY:1.4, rotation:0}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .lobo',{x:1920,y:880, scaleX:-1.4, scaleY:1.4, rotation:0}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .humito',{alpha:0}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .pedroC',{alpha:0}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .perroC',{alpha:0, scaleX:-1.4, scaleY:1.4}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .ovejaA',{scaleX:-0.8,scaleY:0.8,backgroundPosition:'-100% 0%'}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .ovejaB',{scaleX:0.8,scaleY:0.8,backgroundPosition:'-100% 0%'}),'escena_2-=0.4');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .ovejaC',{scaleX:-0.8,scaleY:0.8,backgroundPosition:'-100% 0%'}),'escena_2-=0.4');
//        ANIM.main_tl.add(  TweenMax.set('#escena_02 .pedroA',{backgroundPosition:'0% -200%'}),'escena_2+=0.01');
         
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('pajaritos');
        },'escena_2+=0.1');
        
        ANIM.main_tl.addCallback(function(){
            ANIM.fadeVolume('pajaritos',1,0,3);
        },'2_0-=3');
        
        //zoom y ampolleta
        ANIM.main_tl.add( TweenMax.to('#escena_02',0.1,{scale:2, transformOrigin:'180px 120px'}),'escena_2-=0.2'); 
//        ANIM.main_tl.add( TweenMax.fromTo('#escena_02 .ampolleta',0.3,{scale:0},{scale:1, ease: Back.easeOut}),'2_1+=4'); 
//        ANIM.main_tl.add( TweenMax.to('#escena_02 .ampolleta', 0.3, {scale:0, ease: Back.easeIn, immediateRender:false}),'2_1+=5.3'); 
        ANIM.main_tl.add( TweenMax.to('#escena_02',5,{scale:1, transformOrigin:'180px 120px', ease: Sine.easeInOut}),'2_2+=0.1');
        
        //llamado1
        ANIM.main_tl.add( TweenMax.to('#escena_02 .pedroA',0.1,{alpha:0}),'2_2+=5');
        ANIM.main_tl.add( TweenMax.fromTo('#escena_02 .pedroB',0.1,{alpha:0},{alpha:1}),'2_2+=5');
        ANIM.main_tl.addCallback(function(){
            let grita = ANIM.getTlAnimacionesSprite('02','pedroB',2, 0.2, 1, 3, false, 2);
            grita.resume(0);
        },'2_2+=6.5');
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('pajaritos');
            Player.playSoundFX('oveja_bala');
        },'2_3-=6');
        ANIM.main_tl.addCallback(function(){
            ANIM.fadeVolume('pajaritos',1,0,3);
            ANIM.fadeVolume('oveja_bala',1,0,3);
        },'2_3-=3');
        
        ANIM.main_tl.add( TweenMax.to('#escena_02 .pedroB',0.1,{alpha:0}),'2_3-=3.5');
        ANIM.main_tl.add( TweenMax.to('#escena_02 .pedroA',0.1,{alpha:1}),'2_3-=3.5');
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('sube_cerro');
            Player.resetSubtitulos();
        },'2_3+=9.7');
        
        //gente sube montaña
        let keyframes = [
            {x:1220,    y:880, rotation:0},
            {x:1120,    y:860, rotation:5},
            {x:1020,    y:800, rotation:9},
            {x:620,    y:310,  rotation:15},
        ];
        
        ANIM.main_tl.add(  ANIM.subeCerro('bigote3',keyframes,{x:400,    y:200,  rotation:0}),'2_3+=9.7');
        ANIM.main_tl.add(  ANIM.subeCerro('dama',keyframes,{x:410,    y:220,  rotation:0}),'2_3+=9.8');
        ANIM.main_tl.add(  ANIM.subeCerro('barba',keyframes,{x:490,    y:230,  rotation:0}),'2_3+=9.9');
        ANIM.main_tl.add(  ANIM.subeCerro('bigote1',keyframes,{x:500,    y:210,  rotation:0}),'2_3+=10');
        ANIM.main_tl.add(  ANIM.subeCerro('bigote2',keyframes,{x:500,    y:250,  rotation:0}),'2_3+=10.1');
        
//        ANIM.main_tl.add(  TweenMax.set('#escena_02 .pedroA',{backgroundPosition:'0% 0%',immediateRender:false}),'2_5-=1.4');
//        risa
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .pedroA',0.3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%',ease:
SteppedEase.config(1), repeat:4, immediateRender:false}),'2_5-=1.5');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .perroA',0.1,{alpha:0}),'2_5-=1.5');
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('risa');
        },'2_5-=1.5');
        
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .pedroA',0.1,{backgroundPosition:'0% -200%',ease:
SteppedEase.config(1),immediateRender:false}),'2_5+=0.1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .perroA',0.1,{alpha:1}),'2_5+=0.1');
        ANIM.main_tl.add( TweenMax.to('#escena_02 .bigote3',0.2,{y:195,yoyo:true, repeat:5}),'2_5+=0.1');
        ANIM.main_tl.add( TweenMax.to('#escena_02 .bigote3',0.2,{y:195,yoyo:true, repeat:7}),'2_5+=4');
        ANIM.main_tl.add( TweenMax.to('#escena_02 .bigote3',0.2,{y:195,yoyo:true, repeat:7}),'2_5+=6');
        
        ANIM.main_tl.add( TweenMax.set('#escena_02 .bigote1',{ scaleX:-1.4, scaleY:1.4}),'2_5+=7.8');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .bigote2',{ scaleX:-1.4, scaleY:1.4}),'2_5+=7.8');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .bigote3',{ scaleX:-1.4, scaleY:1.4}),'2_5+=7.8');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .barba',{ scaleX:-1.4, scaleY:1.4}),'2_5+=7.8');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .dama',{ scaleX:-1.4, scaleY:1.4}),'2_5+=7.8');
        ANIM.main_tl.add(  ANIM.bajaCerro('bigote3',keyframes,{x:400,    y:200,  rotation:0},7),'2_5+=7.8');
        ANIM.main_tl.add(  ANIM.bajaCerro('barba',keyframes,{x:490,    y:230,  rotation:0},6),'2_5+=8.2');
        ANIM.main_tl.add(  ANIM.bajaCerro('bigote2',keyframes,{x:500,    y:250,  rotation:0},5),'2_5+=8.4');
        ANIM.main_tl.add(  ANIM.bajaCerro('dama',keyframes,{x:410,    y:220,  rotation:0},4),'2_5+=8.6');
        ANIM.main_tl.add(  ANIM.bajaCerro('bigote1',keyframes,{x:500,    y:210,  rotation:0},3),'2_5+=8.8');

        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('sube_cerro',false,1);
            Player.resetSubtitulos();
        },'2_5+=7.8');
        
         //llamado 2
       
        ANIM.main_tl.add( TweenMax.to('#escena_02 .pedroA',0.1,{alpha:0}),'2_7+=5');
        ANIM.main_tl.add( TweenMax.fromTo('#escena_02 .pedroB',0.1,{alpha:0},{alpha:1}),'2_7+=5');
        ANIM.main_tl.addCallback(function(){
            let grita = ANIM.getTlAnimacionesSprite('02','pedroB',2, 0.2, 1, 3, false, 2);
            grita.resume(0);
        },'2_7+=5.2');
        ANIM.main_tl.add( TweenMax.to('#escena_02 .pedroB',0.1,{alpha:0}),'2_7+=5.9');
        ANIM.main_tl.add( TweenMax.to('#escena_02 .pedroA',0.1,{alpha:1}),'2_7+=5.9');
        
        ANIM.main_tl.add(  ANIM.subeCerro('bigote3',keyframes,{x:400,    y:200,  rotation:0},2),'2_7+=5.5');
        ANIM.main_tl.add(  ANIM.subeCerro('dama',keyframes,{x:410,    y:220,  rotation:0},2),'2_7+=5.6');
        ANIM.main_tl.add(  ANIM.subeCerro('barba',keyframes,{x:490,    y:230,  rotation:0},2),'2_7+=5.7');
        ANIM.main_tl.add(  ANIM.subeCerro('bigote1',keyframes,{x:500,    y:210,  rotation:0},2),'2_7+=5.8');
        ANIM.main_tl.add(  ANIM.subeCerro('bigote2',keyframes,{x:500,    y:250,  rotation:0},2),'2_7+=5.9');
        
//        ANIM.main_tl.add(  TweenMax.set('#escena_02 .pedroA',{backgroundPosition:'0% 0%',immediateRender:false}),'2_7+=8');
        //risa
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .pedroA',0.3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%',ease:
SteppedEase.config(1), repeat:4,immediateRender:false}),'2_7+=8.1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .perroA',0.1,{alpha:0}),'2_7+=8.1');
         ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('risa');
        },'2_7+=8.1');
        
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .pedroA',0.1,{backgroundPosition:'0% -200%',ease:
SteppedEase.config(1),immediateRender:false}),'2_7+=9.9');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .perroA',0.1,{alpha:1}),'2_7+=9.9');
        
        ANIM.main_tl.add( TweenMax.set('#escena_02 .bigote1',{ scaleX:-1.4, scaleY:1.4}),'2_7+=11');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .bigote2',{ scaleX:-1.4, scaleY:1.4}),'2_7+=11');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .bigote3',{ scaleX:-1.4, scaleY:1.4}),'2_7+=11');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .barba',{ scaleX:-1.4, scaleY:1.4}),'2_7+=11');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .dama',{ scaleX:-1.4, scaleY:1.4}),'2_7+=11');
        
        ANIM.main_tl.add(  ANIM.bajaCerro('bigote3',keyframes,{x:400,    y:200,  rotation:0},7),'2_7+=11.1');
        ANIM.main_tl.add(  ANIM.bajaCerro('barba',keyframes,{x:490,    y:230,  rotation:0},6),'2_7+=11.5');
        ANIM.main_tl.add(  ANIM.bajaCerro('bigote2',keyframes,{x:500,    y:250,  rotation:0},5),'2_7+=11.7');
        ANIM.main_tl.add(  ANIM.bajaCerro('dama',keyframes,{x:410,    y:220,  rotation:0},4),'2_7+=11.9');
        ANIM.main_tl.add(  ANIM.bajaCerro('bigote1',keyframes,{x:500,    y:210,  rotation:0},3),'2_7+=12.1');
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('sube_cerro',false,3);
            Player.playSoundFX('pajaritos');
            Player.resetSubtitulos();
        },'2_7+=5.5');
        
         ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('sube_cerro');
        },'2_7+=11.1');
        
        //LOBO acecha
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('persecucion_a', false, 0.6);
        },'2_8+=1');
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('ovejas_balan');
            Player.cambiaVolume('ovejas_balan',0.5);
        },'2_8+=3');
        ANIM.main_tl.addCallback(function(){
            ANIM.fadeVolume('ovejas_balan',0.5,0,1);
        },'2_9-=1');
//         ANIM.main_tl.addCallback(function(){
//            Player.playSoundFX('persecucion_a', false, 2.2);
//        },'2_8+=5.5');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .lobo',3,{x:980,y:850, rotation:20}),'2_8+=1');
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .lobo',3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-1000% 0%',ease:
SteppedEase.config(10),immediateRender:false}),'2_8+=1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .lobo',1.7,{x:700,y:440, ease:Power0.easeNone}),'2_8+=5');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .lobo',0.7,{rotation:55}),'2_8+=5');
        //LOBO ataca
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .lobo',1.7,{backgroundPosition:'0% 0%'},{backgroundPosition:'-500% 0%',ease:
SteppedEase.config(5),immediateRender:false}),'2_8+=5');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .lobo',7,{x:400,y:100, rotation:40, ease: SlowMo.ease.config(0.7,0.7,false)}),'2_8+=6.7');
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('ovejas_balan');
            Player.cambiaVolume('ovejas_balan',0.5);
        },'2_9+=0.1');
        ANIM.main_tl.addCallback(function(){
            ANIM.fadeVolume('ovejas_balan',0.5,0,1);
        },'2_10-=1');
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('ovejas_balan');
            Player.cambiaVolume('ovejas_balan',0.5);
            Player.playSoundFX('grunido');
        },'2_10-=1');
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('ovejas_balan',false,1.1);
            Player.cambiaVolume('ovejas_balan',0.5);
            Player.playSoundFX('grunido',false,1.1);
        },'2_10+=0.1');
        ANIM.main_tl.addCallback(function(){
//            Player.playSoundFX('persecucion_b');
        },'2_10+=1.2');
        ANIM.main_tl.addCallback(function(){
//            Player.playSoundFX('persecucion_b');
        },'2_10+=2.3');
        ANIM.main_tl.addCallback(function(){
            ANIM.fadeVolume('grunido',1,0,3);
        },'2_10+=4.3');
        
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .lobo',0.5,{x:70,y:280, rotation:-5}),'2_9+=5.75');
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .lobo',0.1,{backgroundPosition:'-100% 0%'},{backgroundPosition:'0% 0%',ease:
SteppedEase.config(1),immediateRender:false}),'2_9+=5.95');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .lobo',0.02,{scaleX:1.4}),'2_9+=6.1');
        //lobo corre abajo
        ANIM.main_tl.add(
                            TweenMax.to('#escena_02 .lobo',6,{bezier:
                                                   {
                                                       curviness:0.25,
                                                       autoRotate:false,
                                                       values:[
                                                           {x:200,y:260, rotation:-5},
                                                           {x:600,y:400, rotation:30},
                                                           {x:900,y:800, rotation:20},
                                                           {x:2000,y:860, rotation:-5}
                                                       ]
                                                   },
                                          ease:Sine.easeIn
                                           })
            ,'2_9+=6.3');
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .lobo',0.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%',ease:
SteppedEase.config(1),immediateRender:false, repeat:12}),'2_9+=6.3');
        
        //perro y pedro se asustan
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('asombro');
        },'2_9+=0.01');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .pedroA',0.1,{backgroundPosition:'0% -100%',ease:
SteppedEase.config(1),immediateRender:false}),'2_9-=0.2'); 
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .perroA',0.1,{backgroundPosition:'0% -100%',ease:
SteppedEase.config(1),immediateRender:false}),'2_9-=0.2');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .pedroA',0.1,{alpha:0}),'2_9+=5.9');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .perroA',0.1,{alpha:0}),'2_9+=5.9');

        ANIM.main_tl.add(  TweenMax.to('#escena_02 .humito',0.1,{alpha:1}),'2_9+=5.9');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .humito',1,{alpha:0, scale:0.7}),'2_9+=6');
        
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .pedroC',0.1,{alpha:1}),'2_9+=5.9');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .perroC',0.1,{alpha:1}),'2_9+=5.9');

        ANIM.main_tl.add(
                            TweenMax.to('#escena_02 .perroC',8.5,{bezier:
                                                   {
                                                       curviness:1.25,
                                                       autoRotate:false,
                                                       values:[
                                                           {x:200,y:60, rotation:-5},
                                                           {x:300,y:100, rotation:-2},
                                                           {x:600,y:400, rotation:30},
                                                           {x:900,y:600, rotation:20},
                                                           {x:2000,y:550, rotation:-5}
                                                       ]
                                                   },
                                                    ease:Sine.easeOut,
                                                    onStart:function(){
                                                        let corre = ANIM.getTlAnimacionesSprite('02', 'perroC',2,0.3);
                                                        corre.resume(0);
                                                    },
                                                    onUpdate:function(){
                                                        let corre = ANIM.getTlAnimacionesSprite('02', 'perroC',2,0.3);
                                                        corre.resume();
                                                    },
                                                    onComplete:function(){
                                                        let corre = ANIM.getTlAnimacionesSprite('02', 'perroC',2,0.2);
                                                        corre.pause();
                                                    }
                                           })
            ,'2_9+=6');
        ANIM.main_tl.add(
                            TweenMax.to('#escena_02 .pedroC',7.5,{bezier:
                                                   {
                                                       curviness:1.25,
                                                       autoRotate:false,
                                                       values:[
                                                           {x:200,y:60, rotation:-5},
                                                           {x:300,y:100, rotation:-2},
                                                           {x:600,y:400, rotation:30},
                                                           {x:900,y:600, rotation:20},
                                                           {x:2000,y:550, rotation:-5}
                                                       ]
                                                   },
                                                    ease:Sine.easeOut,
                                                    onStart:function(){
                                                        let corre = ANIM.getTlAnimacionesSprite('02', 'pedroC',2,0.3);
                                                        corre.resume(0);
                                                    },
                                                    onUpdate:function(){
                                                        let corre = ANIM.getTlAnimacionesSprite('02', 'pedroC',2,0.3);
                                                        corre.resume();
                                                    },
                                                    onComplete:function(){
                                                        let corre = ANIM.getTlAnimacionesSprite('02', 'pedroC',2,0.2);
                                                        corre.pause();
                                                    }
                                           })
            ,'2_9+=6');
        
        //Ovejas se asustan
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaC',0.03,{backgroundPosition:'0% 0%',ease:
SteppedEase.config(1)}),'2_8+=3'); 
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .ovejaC .masca',0.1,{alpha:1},{alpha:0}),'2_8+=3');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaC',0.03,{scaleX:0.8}),'2_8+=3');
        
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaB',0.03,{backgroundPosition:'0% 0%',ease:
SteppedEase.config(1)}),'2_8+=5.3'); 
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .ovejaB .masca',0.03,{alpha:1},{alpha:0}),'2_8+=5.3');
        
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaA',0.03,{backgroundPosition:'0% 0%',ease:
SteppedEase.config(1)}),'2_8+=7'); 
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .ovejaA .masca',0.03,{alpha:1},{alpha:0}),'2_8+=7');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaA',0.03,{scaleX:0.8}),'2_8+=7');
        
        // se arrancan
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaC',0.03,{backgroundPosition:'-100% -100%',ease:
SteppedEase.config(1)}),'2_8+=6.1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaC',0.2,{backgroundPosition:'0% -100%',ease:
SteppedEase.config(1),repeat:3, yoyo:true}),'2_8+=6.11'); 
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaC',1,{x:700, ease:Sine.easeOut}),'2_8+=6.1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaC',6,{x:800, ease:Power0.easeNone}),'2_8+=7.1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaC',1,{x:1200, ease:Sine.easeIn}),'2_8+=13.1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaC',0.2,{backgroundPosition:'0% -100%',ease:
SteppedEase.config(1),repeat:5, yoyo:true}),'2_8+=13.1');
        
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaB',0.03,{backgroundPosition:'-100% -100%',ease:
SteppedEase.config(1)}),'2_8+=6.4');
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_02 .ovejaB',0.2,{backgroundPosition:'-100% -100%'},{backgroundPosition:'0% -100%',ease:
SteppedEase.config(1),repeat:3, yoyo:true}),'2_8+=6.41'); 
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaB',0.7,{x:600, y:160, ease:Sine.easeOut}),'2_8+=6.4');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaB',6,{x:700, ease:Power0.easeNone}),'2_8+=7.1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaB',1.5,{x:1500, ease:Sine.easeIn}),'2_8+=13.1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaB',0.2,{backgroundPosition:'0% -100%',ease:
SteppedEase.config(1),repeat:7, yoyo:true}),'2_8+=13.1');
        
        
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaA',0.03,{backgroundPosition:'-100% -100%',ease:
SteppedEase.config(1),immediateRender:false}),'2_8+=13.1');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaA',0.2,{backgroundPosition:'0% -100%',ease:
SteppedEase.config(1),repeat:31, yoyo:true,immediateRender:false}),'2_8+=13.2'); 
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaA',1,{x:400, y:400, ease:Sine.easeIn}),'2_8+=13.2');
        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaA',1,{x:1800, y:430, ease:Sine.easeOut}),'2_8+=14.2');
//        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaA',6,{x:600, y:290, ease:Power0.easeNone}),'2_8+=5.1');
//        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaA',1.5,{x:1900, ease:Sine.easeIn}),'2_8+=13.1');
//        ANIM.main_tl.add(  TweenMax.to('#escena_02 .ovejaA',0.2,{backgroundPosition:'0% -100%',ease:
//SteppedEase.config(1),repeat:7, yoyo:true}),'2_8+=13.1');
        
        
        
        //03
        //set zoom
        ANIM.main_tl.add(  TweenMax.set('#escena_03',{scale:3.3,x:2200, y:100}),'escena_3+=0.01');
        //set lobo corre
        ANIM.main_tl.add(  TweenMax.set('#escena_03 .lobo_corre',{scaleX:-0.3, scaleY:0.3, transformOrigin:'top left'}),'escena_3+=0.01');
        
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('grunido');
//            ANIM.waitForSound('persecucion_c',0,1.823,4,0.15,0.3);
            Player.playSoundFX('corriendo',true);
            Player.cambiaVolume('grunido',0.3);            
//            Player.cambiaVolume('persecucion_c',0.3);
            Player.cambiaVolume('corriendo',0.3);
        },'3_0+=0.01');
        
        //movimiento de patas
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_03 .lobo_corre',0.3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', ease: SteppedEase.config(1),immediateRender:false, repeat:30}),'escena_3+=0.1');
        //recorido
        ANIM.main_tl.add(
                            TweenMax.fromTo('#escena_03 .lobo_corre',8,{x:0, y:0},{bezier:
                                                   {
                                                       curviness:1.25,
                                                       autoRotate:false,
                                                       values:[
                                                           {x:-100,y:0},
                                                           {x:-380,y:60},
                                                           {x:-525,y:60},
                                                       ]
                                                   },
                                          ease:Power0.easeNone
                                           })
            ,'escena_3+=1');
        
        //escala zorro
         ANIM.main_tl.add(  TweenMax.to('#escena_03 .lobo_corre',8,{scaleX:-0.4, scaleY:0.4, transformOrigin:'top left'}),'escena_3+=1');
        //zoom
        ANIM.main_tl.add(  TweenMax.to('#escena_03',8,{scale:1,x:0, y:0, ease:Power1.easeInOut}),'escena_3+=2');
        
        ANIM.main_tl.add(  TweenMax.set('#escena_03 .humo',{x:0, y:0,scale:0, alpha:0.3}),'3_1+=0.1');
        ANIM.main_tl.add(  TweenMax.set('#escena_03 .lobo .ojo',{alpha:0}),'3_1+=0.1');
        ANIM.main_tl.add(  TweenMax.staggerTo('#escena_03 .humo',0.9,{x:-100, y:0,scale:0.5, alpha:0, ease:Sine.easeOut},0.3),'3_1+=0.2');
        ANIM.main_tl.add(  TweenMax.from('#escena_03 .lobo',5,{x:-1400, ease:Power2.easeOut,
                                                               onStart:function(){
                                                                    let frena = ANIM.getTlAnimacionesSprite('03', 'cuerpo',2,0.5);
                                                                    frena.resume(0);
                                                                },
                                                                onUpdate:function(){
                                                                    let frena = ANIM.getTlAnimacionesSprite('03', 'cuerpo',2,0.5);
                                                                    frena.resume();
                                                                },
                                                                onComplete:function(){
                                                                    let frena = ANIM.getTlAnimacionesSprite('03', 'cuerpo',2,0.5);
                                                                    frena.pause();
                                                                    
                                                               }
                                                               }),'3_1+=0.2');
        ANIM.main_tl.add(  TweenMax.to('#escena_03 .lobo .ojo',0.1,{alpha:1}),'3_1+=1');
        ANIM.main_tl.addCallback( function(){ANIM.animaOjoLobo();},'3_1+=1');
          
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('lobo_pataleando');
        },'3_1+=1');
        
        
        
//        ANIM.main_tl.addCallback( function(){ANIM.animaBocaPapa();},'4_1+=0.1');
//        ANIM.main_tl.addCallback( function(){ANIM.animaBocaPapa();},'4_2+=0.1');
        
        
        //06 repetida
        ANIM.main_tl.addCallback(function(){
                ANIM.aguaLoop();
                Player.playSoundFX('musica_pastoril_loop');
        },'escena_5+=0.1');
        
        
        ANIM.main_tl.addCallback(function(){
                ANIM.fadeVolume('musica_pastoril_loop',1,0,3);
        },'5_0-=3');
        
        ANIM.main_tl.addCallback(function(){
                Player.playSoundFX('primer_parrafo');
        },'4_3+=0.1');
        ANIM.main_tl.addCallback(function(){
                Player.playSoundFX('parrafo_final');
        },'4_4+=0.1');

        ANIM.main_tl.addCallback(function(){
                Player.playSoundFX('perro_ladra');
        },'5_1-=1.3');
        ANIM.main_tl.addCallback(function(){
                Player.playSoundFX('ovejas_balan');
        },'5_1+=0.1');
        
        
        ANIM.main_tl.add( TweenMax.to('#escena_00',0.1,{left:"0px"}),'escena_5-=0.2'); 
        ANIM.main_tl.add( TweenMax.set('#escena_00 .caballo',{x:0, y:0, immediateRender:false}),'escena_5+=0.01'); 
        
        ANIM.main_tl.add( TweenMax.to('#escena_00 .caballo',6,{x:-600,y:-60, 
            onStart:function(){
                let camina = ANIM.getTlAnimacionesSprite('00','caballo',2,0.4);
                camina.resume(0);
            },
            onUpdate:function(){
                let camina = ANIM.getTlAnimacionesSprite('00','caballo',2,0.4);
                camina.resume();
            }, 
            onComplete:function(){
                let camina = ANIM.getTlAnimacionesSprite('00','caballo',2,0.4);
                camina.pause();
            }, 
         ease:Power1.easeIn, immediateRender:false}),'escena_5+=4.5');
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('caballo_camina');
        },'escena_5+=4.5');
        
        $('#escena_00 .oveja').each(function(i){
            ANIM.main_tl.add( TweenMax.set(`#escena_00 .oveja${ANIM.arrLetras[i]}`,{x:Utils.randomInt(2500,2900)}),'escena_5+=0.01');
            ANIM.main_tl.add( TweenMax.to(`#escena_00 .oveja${ANIM.arrLetras[i]}`,12,{x:0,
                onStart:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`oveja${ANIM.arrLetras[i]}`,2, Utils.randomInt(30,70)/100);
                    camina.resume(0);
                },
                onUpdate:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`oveja${ANIM.arrLetras[i]}`,2, Utils.randomInt(30,70)/100);
                    camina.resume();
                },
                onComplete:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`oveja${ANIM.arrLetras[i]}`,2);
                    camina.pause();
                }, 
                ease:Power0.easeNone, immediateRender:false}),'5_0-=6');
        });
        
        ANIM.main_tl.add( TweenMax.set(`#escena_00 .pedro`,{x:Utils.randomInt(2500,2900)}),'escena_5-=6');
        ANIM.main_tl.add( TweenMax.to(`#escena_00 .pedro`,12,{x:0,
                onStart:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`pedro`,2, Utils.randomInt(30,70)/100);
                    camina.resume(0);
                },
                onUpdate:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`pedro`,2, Utils.randomInt(30,70)/100);
                    camina.resume();
                },
                onComplete:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`pedro`,2);
                    camina.pause();
                }, 
                ease:Power0.easeNone, immediateRender:false}),'5_0-=6');
        
        ANIM.main_tl.add( TweenMax.set(`#escena_00 .perro`,{x:Utils.randomInt(2500,2900)}),'escena_5-=6');
        ANIM.main_tl.add( TweenMax.to(`#escena_00 .perro`,12,{x:0,
                onStart:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`perro`,2, Utils.randomInt(30,70)/100);
                    camina.resume(0);
                },
                onUpdate:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`perro`,2, Utils.randomInt(30,70)/100);
                    camina.resume();
                },
                onComplete:function(){
                    let camina = ANIM.getTlAnimacionesSprite('00',`perro`,2);
                    camina.pause();
                }, 
                ease:Power0.easeNone, immediateRender:false}),'5_0-=6');
        
        ANIM.main_tl.add( TweenMax.set('#escena_00 .rebano',{y:0}),'escena_5-=6');
        ANIM.main_tl.add( TweenMax.to('#escena_00 .rebano',6,{y:-130}),'5_0-=6');
        ANIM.main_tl.addCallback( function(){ANIM.animaEscena0();},'5_0-=6');

        //ANIM.main_tl.addCallback( function(){ANIM.animaEscena5();},'5_0-=5');
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            
            Player.hideOthersBut('escena_00');
        },"escena_0"); 
     
        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena0();
            Player.activaBtnSiguiente(); 
            ANIM.main_tl.pause();
            ANIM.waitForSound('musica_pastoril_loop',0,32,0);
//            ANIM.interactividad(0); 
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos(); 
        },"fin_escena_0"); 
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
//            ANIM.animaEscena1();
            ANIM.animaMariposa('escena_01');
            ANIM.animaPajarito('01');
            Player.hideOthersBut('escena_01');
        },"escena_1");

        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena1();
            ANIM.animaMariposa('escena_01');
            ANIM.animaPajarito('01');
            Player.playSoundFX('pajaritos',true);
            // waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
             ANIM.waitForSound('ovejas_balan',Utils.randomInt(0,50)/10,5.8,0,Utils.randomInt(1,90)/10);
             ANIM.waitForSound('perro_ladra',Utils.randomInt(0,90)/10,1.3,0,Utils.randomInt(1,190)/10);
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
//            ANIM.interactividad(1);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_1");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena2();
            Player.hideOthersBut('escena_02');
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena2();
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_2");
        
       
         /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_03');
        },"escena_3");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            Player.playSoundFX('pajaritos',true);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_3");
        
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena4();
            Player.hideOthersBut('escena_04');
        },"escena_4");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena4();
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            try{ANIM.tl_boca_04.pause(0);}catch(err){}
            Player.playSoundFX('pajaritos',true);
        },"fin_escena_4");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
//            ANIM.animaEscena0();
            Player.hideOthersBut('escena_00');
//            TweenMax
        },"escena_5");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.animaEscena0();
            //ANIM.animaEscena5();
//            ANIM.interactividad(0);
            //prueba pedro-rebano animacion
            ANIM.waitForSound('musica_pastoril_loop',0,32,0);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            console.log("fin_escena 5");
        },"fin_escena_5");
        
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
        
        //
        ANIM.anim_interact_1 = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_1
         
            .addLabel('inicio')
            .addCallback(function(){
//                Player.playSoundFX('duendes');
            })
            .to('#escena_01 .duende',3,{y:0, x:0},'+=1')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1.pause();
       
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_1, // agrego la interacción al array
        ];
        
        ANIM.setIniciales();
    },
    pausaInteractividad:() =>{
        ANIM.arr_interacts.map((anim) => { // y como la interacción está acá las pauso todas al mismo tiempo a voluntad
            anim.pause();
            anim.eventCallback("onComplete", null);  //<--- para matar los eventos de onComplete para evitar que muestren los botones en otra escenas
        });
       
        ANIM.setIniciales();
    },
    setIniciales:() => {
        //estado inicial
//        TweenMax.killTweensOf("#escena_00 .stuff");
        ANIM.scalaMe('#escena_00 .caballo',2);
        ANIM.scalaMe('#escena_00 .barba',2);
        ANIM.scalaMe('#escena_00 .bigote1',2);
        ANIM.scalaMe('#escena_00 .bigote2',2);
        ANIM.scalaMe('#escena_00 .dama',2);
        ANIM.scalaMe('#escena_00 .pedro',2);
        ANIM.scalaMe('#escena_00 .perro',2);
        ANIM.scalaMe('#escena_00 .oveja',2);
        
        TweenMax.set('.mariposa .anim',{rotation:50});
        TweenMax.set('.mariposa',{x:0,y:0});
        TweenMax.killTweensOf(".mariposa");
        ANIM.scalaMe('#escena_01 .pedro',2,'center center');
        ANIM.scalaMe('#escena_01 .perro',2,'center center');
        ANIM.scalaMe('#escena_01 .oveja',2,'center center');
        TweenMax.set(`#escena_01 .perro`,{y:0, x:0})            
        TweenMax.set(`#escena_01 .pedro`,{y:0, x:0})            
        TweenMax.set(`#escena_01 .ovejaA`,{y:0, x:0})            
        TweenMax.set(`#escena_01 .ovejaB`,{y:0, x:0})            
        TweenMax.set(`#escena_01 .ovejaC`,{y:0, x:0})            
        TweenMax.set(`#escena_01 .ovejaD`,{y:0, x:0})            
        TweenMax.set(`#escena_01 .ovejaE`,{y:0, x:0})            
        TweenMax.set(`#escena_01 .ovejaF`,{y:0, x:0})           
        
        ANIM.scalaMe('#escena_02 .pedroA',0.8,'bottom left', '0% -200%');
        ANIM.scalaMe('#escena_02 .pedroB',0.8);
        ANIM.scalaMe('#escena_02 .pedroC',0.8);
//        ANIM.scalaMe('#escena_02 .oveja',0.8,'center center','-100% 0%');
        
        TweenMax.set('#escena_02 .perroA',{rotation:-10});
//        ANIM.scalaMe('#escena_02 .bigote1',1.4);
        
        ANIM.scalaMe('#escena_03 .lobo',2);
//        ANIM.scalaMe('#escena_03 .humo',0.5,'-483px 0px');
        TweenMax.set('#escena_03 .humo',{transformOrigin:'bottom right'});
        TweenMax.set('#escena_03 .ojo',{scale:0.5, transformOrigin:'bottom right'});
        
        ANIM.scalaMe('#escena_04 .boca',2);
        ANIM.pauseAnimaciones();
        ANIM.pauseWaitSound();
        
        $('.indicador_interactividad').css({'display':'none'});
        
    },
    displayInteract:(cualEscena) => {
        $(cualEscena+' .interact').css({'display':'block'});
    },
    interactividad:(nEscena, callback = undefined, btn_especifico = "primario") => {
        let i_st = nEscena > 9 ? (nEscena) : `0${(nEscena)}`;
        
//        console.log(i_st);
        
        var btn = $('#escena_'+i_st +' .btn_interact.'+btn_especifico);
        var cb = callback;
        btn.css({"display":"block"});
        TweenMax.fromTo(btn,1,{alpha:0},{alpha:1});
        let muestralo = (div, cbb) => {
            if(cbb !== undefined){
                cbb();
            }
            div.css({"display":"block"});             
        }
         switch (nEscena){
            case 0:
              /**/
                break;
             case 1:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        if(ANIM.anim_interact_1.currentLabel() === 'final'){
                            ANIM.anim_interact_1.play(0);
                        } else {
                            ANIM.anim_interact_1.play();
                        }
                    });
                 }
                break;
            case 2:
                 if(btn.hasClass('btn_cejas')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_cejas.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_cejas.play(0);
                    });
                 }
                 if(btn.hasClass('btn_gatos')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_duendes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_duendes.play(0);
                    });
                 }
                 break;
             case 3:
                 
                 break;
            case 4:
                 
                 break;
             case 5:
                
                 break;
            case 6:
                
                 break;
             case 7:
                 
                 break;
             case 8:
                    
                 break;
             
        }
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
//        $('#escena_00').css({'bottom':dif+'px'});
//        $('#escena_01').css({'top':dif+'px'});
        $('#escena_02').css({'bottom':dif+'px'});
        $('#escena_03').css({'bottom':dif+'px'});
//        $('#escena_04').css({'bottom':dif+'px'});
//        $('#escena_05').css({'bottom':dif+'px'});
//        $('#escena_07').css({'bottom':dif+'px'});
//        $('#escena_08').css({'bottom':dif+'px'});
//        $('#escena_09').css({'bottom':dif+'px'});
//        $('#escena_10').css({'bottom':dif+'px'});
    }
         /*↑↑↑↑ HASTA LA ANTERIOR ↑↑↑↑↑*/
};

















