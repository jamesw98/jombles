const titles = [
    // dark souls
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

    // rlm
    "IT TOOK 12 YEARS TO MAKE!",
    "IT BROKE NEW GROUND!!!",
    "What are next?",
    "You can't spell Sony without Y",

    // star_ and jerma
    "Coffeeee, Cheetooos, Chickeeen",
    "Use the tree for cover and DRINK THE JUICE",
    "Yo. Merry Christmas",
    "Y'know, dont... say... s-swears...",
    "I TAUNT AFTER EVERY KILL",
    "R u crazy??",
]

function randomTitle(){
    var rand = Math.floor(Math.random() * titles.length);
    console.log(rand, titles[rand]);
    document.getElementById('titleDisplay').innerHTML = titles[rand];
}