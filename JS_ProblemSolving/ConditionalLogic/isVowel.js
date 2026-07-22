const a = 'a'

const CheckVowel = (a) => {
    if (/^[a-zA-Z]$/.test(a)) {

        if (a == 'a' || a == 'e')
            console.log("vowel")

        else if (a == 'i' || a == 'o')
            console.log("vowel")

        else if (a == 'u')
            console.log("vowel")

        else
            console.log("not a vowel")
    }
    else
        console.log("enter alphabet only")

}

CheckVowel(a)

const vovi = (a) =>{
    if(!/^[a-zA-Z]$/.test(a)){
        console.log("not a alpha")
        return
    }

    if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u')
        console.log("vov")

    else
        console.log('non vov')
}

vovi('s')