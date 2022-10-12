function Check() {
    var input = inp.value
    var song = new Audio ("bukunmi.mp3")
    if(input >= 70 && input ==100) {
        disp.innerHTML ='Excellent'
        song.play()
    }
    else if(input <= 69 && input >=50){
       disp.innerHTML ='V.Good'
    }
    else if(input <=49 && input >=30){
        disp.innerHTML ='Good'
    }
    else if(input <=29 && input >=20){
        disp.innerHTML ='Poor'
    }
    else if(input <=19 && input >=1){
        disp.innerHTML ='Failed'
    }
    else{
        disp.innerHTML = 'Input valid number between 1-100 '
    }
}