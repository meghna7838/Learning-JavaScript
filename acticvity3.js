function isValidIdentifier(name)
{
    let isTrue=true;
    for(let i=0;i<name.length;i++){
        if((name.charCodeAt(i)>=32 && name.charCodeAt(i)<36) ||(name.charCodeAt(i)>=37 && name.charCodeAt(i)<=47)|| (name.charCodeAt(i)>=58 && name.charCodeAt(i)<=64)||(name.charCodeAt(i)>=91 && name.charCodeAt(i)<95)||(name.charCodeAt(i)>=123 && name.charCodeAt(i)<=126)|| name.charCodeAt(i)===96){
            console.log(name+" is not a valid identifier");
            isTrue=false;
        break;
        }

    }
   
    if(name.startsWith('1')||name.startsWith('2')||name.startsWith('3')||name.startsWith('4')||name.startsWith('5')||name.startsWith('6')||name.startsWith('7')||name.startsWith('8')||name.startsWith('9')||name.startsWith('0')){
        console.log(name+" is not a valid identifier");
        isTrue=false;
    }

    if(isTrue){
    console.log(name + "is a valid identifier");
    }
}

isValidIdentifier("abvms_er23$");