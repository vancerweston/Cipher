
function rot13(form) {
    let cipherInput = document.forms['create']['inputbox'].value;
    let codeA = 'A'.charCodeAt(0);
    let codeN = 'N'.charCodeAt(0);
    let codeZ = 'Z'.charCodeAt(0);
    let newArr = [];

    for(let i = 0; i < cipherInput.length; i++){
        let code = cipherInput.charCodeAt(i);
        if (code >= codeA && code <= codeZ){
            if(code >= codeN){
                newArr.push(String.fromCharCode(code - 13));
            }else{
                newArr.push(String.fromCharCode(code + 13));
            }
        } else {
            newArr.push(cipherInput[i]);
        }
        let output = newArr.join('');
        document.getElementById('cypheroutput').innerHTML = output;
    }
    return newArr.join('');
}

function decryptrot13(form) {
    let decryptInput = document.forms['decrypt']['inputbox2'].value;
    let rotA = 'A'.charCodeAt(0);
    let rotN = 'N'.charCodeAt(0);
    let rotZ = 'Z'.charCodeAt(0);
    let nextArr = [];

    for(let i = 0; i < decryptInput.length; i++){
        let decrypt = decryptInput.charCodeAt(i);
        if (decrypt >= rotA && decrypt <= rotZ){
            if(decrypt >= rotN){
                nextArr.push(String.fromCharCode(decrypt - 13));
            }else{
                nextArr.push(String.fromCharCode(decrypt + 13));
            }
        } else {
            nextArr.push(decryptInput[i]);
        }
        let output2 = nextArr.join('');
        document.getElementById('decryptoutput').innerHTML = output2;
    }
    return nextArr.join('');
}