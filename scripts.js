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
]

function randomTitle() {
    var rand = Math.floor(Math.random() * titles.length);
    document.getElementById('titleDisplay').innerHTML = titles[rand];
}

function roll_dice() {
    var num_dice = parseInt(document.getElementById("num").value);
    var die_type = parseInt(document.getElementById("dieType").value);
    var modifier = parseInt(document.getElementById("modifier").value);

    var roll = num_dice * Math.floor(Math.random() * die_type) + modifier + 1;

    document.getElementById('result').innerHTML = roll;
}