const a = '1'

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