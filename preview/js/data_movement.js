data_movement = [
    {
        title: "Walk",
        icon: "walk",
        subtitle: "Cost: None",
        description: "Walk rate determines the farthest a character can move during a Combat Turn before they are considered to be Running.",
        reference: "SR5, pg. 162.",
        bullets: [
            "The Movement Rates (Walk and Run) for each metatype are noted on the Movement Table (see SR5 pg. 162)."
            ]
    },
    {
        title: "Run",
        icon: "run",
        subtitle: "Cost: Free Action",
        description: "As soon as the character exceeds their Walk rate they are considered to be Running.",
        reference: "SR5, pg. 162.",
        bullets: [
            "<i>Think of running as a trained combat hustle or a jog, something to get you to another point quickly but still leave you able to perform other actions, albeit with a penalty</i>",
            "Characters who are running take a –2 dice pool modifier to all actions performed while running.",
            "Characters charging into melee combat gain a +4 dice pool modifier (making a net bonus of +2 when combined with the general penalty) when running into melee combat.", 
            "When a character starts running, they are considered Running until the end of the Combat Turn and incur any penalties or benefits of running",
            "Running characters must use a Free Action in each Initiative Pass they are considered running.",
            "Characters cannot exceed their calculated Run Rate in a Combat Turn without making a Sprinting test.",
            "Characters making a ranged attack against a running opponent suffer a –2 dice pool penalty to their attack test."
            ]
    },
    {
        title: "Sprint",
        icon: "sprint",
        subtitle: "Cost: Complex Action",
        description: "Characters may attempt to increase their running distance by performing a Sprint Action during their Action Phase.",
        reference: "SR5, pgs. 162, 172.",
        bullets: [
            "Characters make a Running + STR [Physical] Test. Each hit increases the distance a character can move in a Combat Turn by either 1 meter (for dwarfs and trolls) or 2 meters (for elves, humans, and orks)",
            "Characters are allowed a maximum number of Sprinting tests equal to half their Running skill per Combat Turn (minimum of 1)",
            "Characters making a ranged attack against a sprinting opponent suffer a –4 dice pool modifier to their attack test",
            "Sprinting characters also suffer fatigue (see Fatigue from Running, p. 172) if they sprint for too long."
            ]
    },
    {
        title: "Climb",
        icon: "mountain-climbing",
        subtitle: "Cost: Complex Action",
        description: "Climbing, either assisted by ropes and harnesses or unassisted without any gear, is a Complex Acion.",
        reference: "SR5, pgs. 134, 448.",
        bullets: [
            "The Gymnastics skill is applied to both assisted and unassisted climbing tasks. Assisted climbing is accomplished with specialized gear such as ropes and harnesses (see p. 448). Assisted climbing is easier and safer, but requires more preparation. Unassisted climbing may be done on the fly, because you climb without any gear.",
            "The number of hits you get on your Gymnastics + STR [Physical] Test determines how far you can move vertically or laterally during your climb, as noted on the Climbing Table.",
            "The more difficult the climb, the more dice pool modifiers you get, which is also noted on the Climbing Table",
            "<table><thead><tr><th>Situation</th><th>Movement distance</th></tr></thead><tbody><tr><td>Climbing up (Assisted)<br></td><td>1 Meter per Hit</td></tr><tr><td>Climbing down (Assisted)<br></td><td>2 Meters</td></tr><tr><td>Climbing horizontally<br></td><td>1 Meter per 2 hits</td></tr><tr><td>Climbing upside down (assisted)</td><td>1 Meter per 3 Hits</td></tr><tr><td>Climbing up (unassisted)</td><td>1 Meter per 2 Hits</td></tr><tr><td>Climbing down (unassisted)</td><td>1 meter per hit</td></tr><tr><th>Situation</th><th>Dice Pool Modifier</th></tr><tr><td>Assisted Climbing</td><td>+2</td></tr><tr><th>Surface Is...</th><th>Dice Pool Modifier</th></tr><tr><td>Easily climbable (chain link fence)</td><td>+1</td></tr><tr><td>Broken (tree, loose stone wall)</td><td>+0</td></tr><tr><td>Flat (brick wall, side of old building) </td><td>-3</td></tr><tr><td>Sheer (metal wall, seamless stone)</td><td>-5</td></tr><tr><td>Slippery or wet</td><td>-2</td></tr><tr><td>Greased or gel-treated</td><td>-4</td></tr></tbody></table>"
            ]
    },
    {
        title: "Rapel",
        icon: "mountain-climbing",
        subtitle: "Cost: Complex Action",
        description: "Climbing, either assisted by ropes and harnesses or unassisted without any gear, is a Complex Acion.",
        reference: "SR5, pgs. 134, 448.",
        bullets: [
            "The Gymnastics skill is applied to both assisted and unassisted climbing tasks. Assisted climbing is accomplished with specialized gear such as ropes and harnesses (see p. 448). Assisted climbing is easier and safer, but requires more preparation. Unassisted climbing may be done on the fly, because you climb without any gear.",
            "The number of hits you get on your Gymnastics + STR [Physical] Test determines how far you can move vertically or laterally during your climb, as noted on the Climbing Table.",
            "The more difficult the climb, the more dice pool modifiers you get, which is also noted on the Climbing Table",
            "<table><thead><tr><th>Situation</th><th>Movement distance</th></tr></thead><tbody><tr><td>Climbing up (Assisted)<br></td><td>1 Meter per Hit</td></tr><tr><td>Climbing down (Assisted)<br></td><td>2 Meters</td></tr><tr><td>Climbing horizontally<br></td><td>1 Meter per 2 hits</td></tr><tr><td>Climbing upside down (assisted)</td><td>1 Meter per 3 Hits</td></tr><tr><td>Climbing up (unassisted)</td><td>1 Meter per 2 Hits</td></tr><tr><td>Climbing down (unassisted)</td><td>1 meter per hit</td></tr><tr><th>Situation</th><th>Dice Pool Modifier</th></tr><tr><td>Assisted Climbing</td><td>+2</td></tr><tr><th>Surface Is...</th><th>Dice Pool Modifier</th></tr><tr><td>Easily climbable (chain link fence)</td><td>+1</td></tr><tr><td>Broken (tree, loose stone wall)</td><td>+0</td></tr><tr><td>Flat (brick wall, side of old building) </td><td>-3</td></tr><tr><td>Sheer (metal wall, seamless stone)</td><td>-5</td></tr><tr><td>Slippery or wet</td><td>-2</td></tr><tr><td>Greased or gel-treated</td><td>-4</td></tr></tbody></table>"
            ]
    },
    {
        title: "Swim",
        icon: "swim",
        subtitle: "Cost: Complex Action",
        description: "This skill determines the character’s ability to swim in various bodies of water. The skill level affects the distance and speed at which a character can swim.",
        reference: "SR5, pgs. 134, 137.",
        bullets: [
            "Swimming is a Complex Action. A swimming character can move a number of meters in a Combat Turn equal to the average of their AGI and STR.",
            "You can take a Simple Action to “sprint” with a Swimming + STR [Physical] Test, adding 1 meter per hit, or 2 meters per hit if you’re an elf or a troll. Swimming on the surface of water or under it does not affect this rate of speed.",
            "You can tread water for a number of minutes equal to your STR rating. At the end of this time, make a Simple Swimming + STR [Physical] (2) Test. Failure means you slip and take 1 box of Stun damage that you can’t resist. If you have a flotation device, double the time between tests.",
            "A character can hold their breath for 60 seconds (20 Combat Turns) before needing to make a test. A character needing to hold their breath longer can make a Swimming + WIL Test. Each net hit extends the clock by 15 seconds (5 Combat Turns).",
            "As with the Running skill, swimmers suffer from fatigue after an extended time (Fatigue Damage, p. 172)."
            ]
    },
    {
        title: "Crawl",
        icon: "crawl",
        subtitle: "Cost: Complex Action",
        description: "description",
        reference: "PHB, pg. 182.",
        bullets: [
            ""
        ]
    },
    {
        title: "Stand up",
        icon: "strong",
        subtitle: "Cost: Simple Action",
        description: "description",
        reference: "PHB, pg. 190-191.",
        bullets: [
            ""
            ]
    },
    {
        title: "Standing jump",
        icon: "leapfrog",
        subtitle: "Cost: Simple Action",
        description: "description",
        reference: "PHB, pg. 182.",
        bullets: [
            ""
            ]
    },
    {
        title: "Running jump",
        icon: "jump-across",
        subtitle: "Cost: Free Action",
        description: "description",
        reference: "PHB, pg. 182.",
        bullets: [
            ""
            ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any stunt not on this list",
        description: "Perform any movement or stunt you can imagine",
        bullets: [
            "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
            ]
    },
    {
        title: "Difficult terrain",
        icon: "stone-pile",
        subtitle: "subtitle",
        reference: "PHB, pg. 182.",
        description: "description",
        bullets: [
            ""
        ]
    }
]
