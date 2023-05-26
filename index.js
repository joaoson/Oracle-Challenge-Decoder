var letters ={
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
    l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
}


function detect(mode){
    let input = document.getElementById("input")
    let soma = 0
    
    let resultado = input.value
    let defaultmsg = "Digite um texto que você deseja criptografar ou descriptografar."

    
    resultado = resultado.toLowerCase()
    
    let senha = "veryhard"
    
    let finalword = ""

    let cont = 0

    for(i=0;i<resultado.length;i++){
        
        while(cont>senha.length - 1){
            cont = cont -senha.length
        }
        
        const verif =  /^[a-zA-Z]+$/;
        
        if(resultado[i].match(verif)){
            let keyvalue = letters[senha[cont]]
            let wordvalue = letters[resultado[i]]
            if (mode === 1){
                soma = keyvalue + wordvalue - 1
                if(soma >26){
                    soma = soma - 26
                }
            }
            else if(mode === 2){
                soma = wordvalue - keyvalue + 1
                if(soma < 1){
                    soma = soma + 26
                }
            }
            
            let key = Object.keys(letters).find(k=>letters[k]===soma);
            cont += 1
            
            finalword = finalword + key
        }
        else{
            finalword = finalword + resultado[i]
        }
    }
    if(resultado.length == 0){
        finalword = defaultmsg
        document.getElementById('responseimg').classList.remove("hidden")
        document.getElementById('responseheader').classList.remove("hidden")
        document.getElementById('copy').classList.add("hidden")
        document.getElementById('responsetext').classList.remove("responsetext")
        document.getElementById('responsecont').classList.remove("responsecontresult")
    }
    else{
        document.getElementById('responseheader').classList.add("hidden")
        document.getElementById('responseimg').classList.add("hidden")
        document.getElementById('copy').classList.remove("hidden")
        document.getElementById('responsetext').classList.add("responsetext")
        document.getElementById('responsecont').classList.add("responsecontresult")
    }
    document.getElementById("responsetext").innerHTML = finalword
}

function darkMode(){
    
    if(document.getElementById('outer').dataset.value == "lightmode"){
        document.getElementById('imgmoon').classList.add("nosize")
        document.getElementById('imgsun').classList.remove("nosize")
        document.getElementById('inner').classList.add("darkmodeactive")
        document.getElementById('outer').classList.add("darkmodeouteractive")
        document.getElementById('outer').dataset.value = "darkmode"
    }
    else{
        document.getElementById('imgmoon').classList.remove("nosize")
        document.getElementById('imgsun').classList.add("nosize")
        document.getElementById('inner').classList.remove("darkmodeactive")
        document.getElementById('outer').classList.remove("darkmodeouteractive")
        document.getElementById('outer').dataset.value = "lightmode"
    }
}

document.getElementById("outer").addEventListener("click",darkMode)