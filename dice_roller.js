function roll_dice(){
    var num_dice = parseInt(document.getElementById("num").value);
    var die_type = parseInt(document.getElementById("dieType").value);  
    var modifier = parseInt(document.getElementById("modifier").value);
    
    var roll = num_dice * Math.floor(Math.random() * die_type) + modifier + 1; 

    document.getElementById('result').innerHTML = roll;
}