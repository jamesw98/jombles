const titles = [
    "Time for Crab",
    "Try jumping",
    "Illusory wall ahead",
    "Listen carefully, skeleton!",
    "Nice job, skeleton...",
    "Rescue, skeleton!",
    "Don't give up, skeleton!",
    "Skeleton ahead, therefore, Hurrah!",
    "Beanpole ahead",
    "Liar ahead...",
    "IT TOOK 12 YEARS TO MAKE!",
    "IT BROKE NEW GROUND!!!",
    "What are next?",
    "You can't spell Sony without Y",
    "Folding chables",
    "You didn't notice, but your brain did",
    "Goodnight, sweet cats",
    "Oh my GAAAAAAAAAAAAWWWWWWD",
    "That's right Jay",
    "Don't ask questions just consume product then get excited for next product",
    "Star Wars Episode One the Phantom Menace is the most disapointing thing since my son",
    "I want that juicy Shaq meat",
    "Always eat the cake when it's handed to you",
    "Anythings possible with Bush in the Whitehouse",
    "Jimmy Fallon? The only thing he should host is a parasite",
    "AT-STs! AT-STs!",
    "I clapped when I saw Darth Vader",
    "A long time ago in a Galaxy Far Far Away, but no title craw",
    "I CLAAAAPPED!!!",
    "FUCK YOU IT'S JANUARY!",
    "You'll be dead guy!",
    "Coffeeee, Cheetooos, Chickeeen",
    "Use the tree for cover and DRINK THE JUICE",
    "Yo. Merry Christmas",
    "Y'know, dont... say... s-swears...",
    "I TAUNT AFTER EVERY KILL",
    "R u crazy??",
    "At age six, I was born without a face",
    "Stay in school, don't do drugs, eat your teeth",
    "Do a flip!",
    "SHOW ME WHERE IN MY INVENTORY IT GOES!"
]

/**
 * generates a random title for the home page
 */
function randomTitle() {
    var rand = Math.floor(Math.random() * titles.length);
    document.getElementById('titleDisplay').innerHTML = titles[rand];
}

/**
 * dnd dice roller
 * can be any type of die, any number of die, and accepts modifiers 
 */
function roll_dice() {
    var num_dice = parseInt(document.getElementById("num").value);
    var die_type = parseInt(document.getElementById("dieType").value);
    var modifier = parseInt(document.getElementById("modifier").value);

    if (isNaN(modifier)) {
        modifier = 0;
    }

    var roll = num_dice * Math.floor(Math.random() * die_type) + modifier + 1;
    if (isNaN(roll)) {
        roll = "Please only enter numbers";
    }

    document.getElementById('result').innerHTML = roll;
}

function calc_stats() {
    var str = parseInt(document.getElementById("str").value);
    var dex = parseInt(document.getElementById("dex").value);
    var con = parseInt(document.getElementById("con").value);
    var int = parseInt(document.getElementById("int").value);
    var wis = parseInt(document.getElementById("wis").value);
    var cha = parseInt(document.getElementById("cha").value);

    var stats = [str, dex, con, int, wis, cha];
    var res = ["", "", "", "", "", ""]

    for (var i = 0; i < stats.length; i++) {
        var currStat = stats[i];

        if (currStat === 1) {
            res[i] = "-5";
            continue;
        }
        else if (currStat === 2 || currStat === 3) {
            res[i] = "-4";
            continue;
        }
        else if (currStat === 4 || currStat === 5) {
            res[i] = "-3";
            continue;
        }
        else if (currStat === 6 || currStat === 7) {
            res[i] = "-2";
            continue;
        }
        else if (currStat === 8 || currStat === 9) {
            res[i] = "-1";
            continue;
        }
        else if (currStat === 10 || currStat === 11) {
            res[i] = "0";
            continue;
        }
        else if (currStat === 10 || currStat === 11) {
            res[i] = "0";
            continue;
        }
        else if (currStat === 12 || currStat === 13) {
            res[i] = "+1";
            continue;
        }
        else if (currStat === 14 || currStat === 15) {
            res[i] = "+2";
            continue;
        }
        else if (currStat === 16 || currStat === 17) {
            res[i] = "+3";
            continue;
        }
        else if (currStat === 18 || currStat === 19) {
            res[i] = "+4";
            continue;
        }
        else if (currStat === 20 || currStat === 21) {
            res[i] = "+5";
            continue;
        }
        else if (currStat === 22 || currStat === 23) {
            res[i] = "+6";
            continue;
        }
        else if (currStat === 24 || currStat === 25) {
            res[i] = "+7";
            continue;
        }
        else if (currStat === 26 || currStat === 27) {
            res[i] = "+8";
            continue;
        }
        else if (currStat === 28 || currStat === 29) {
            res[i] = "+9";
            continue;
        }
        else if (currStat === 30) {
            res[i] = "+10"
            continue;
        }
    }

    document.getElementById('strMod').innerHTML = res[0];
    document.getElementById('dexMod').innerHTML = res[1];
    document.getElementById('conMod').innerHTML = res[2];
    document.getElementById('intMod').innerHTML = res[3];
    document.getElementById('wisMod').innerHTML = res[4];
    document.getElementById('chaMod').innerHTML = res[5];
}

/**
 * essentially does 4d6 drop lowset, but only rolls 3 dice because why not
 * calculates stat mods after rolling
 */
function random_stats() {
    document.getElementById('str').value = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    document.getElementById('dex').value = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    document.getElementById('con').value = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    document.getElementById('int').value = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    document.getElementById('wis').value = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    document.getElementById('cha').value = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);

    calc_stats();
}