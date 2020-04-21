function countingValleys(n, s) {
    let string = s.split("")
    let count = 0;
    let seaLevel = 0
    for(let i = 0; i < n; i++){
        
        if(string[i] == "U"){
            count += 1
            console.log(string[i])
        }else if(string[i] == "D"){
            count -= 1;
        }
        if(count === 0 && string[i] == 'U'){
            seaLevel+=1;
        }
    }

    return seaLevel

}

console.log(countingValleys(8,"DDUUUUDD"))