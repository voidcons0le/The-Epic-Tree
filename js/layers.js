addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#a4ff3cff",
    resetDescription: "Prestige to gain ",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    tabFormat: [
        "main-display",
        "prestige-button",
        "empty",
        ["display-text", "i hope this text <b>glows</b>"]
    ],
})
addLayer("a", {
    name: "achievements", symbol: "🏆", position: 0, row: "side", color: "#ffea29", tabFormat: {
        "Main": {
            content: [
                ["display-text", "There are currently <h1><b><font color='#ffea29'>1</font></b></h1> achievements in the game"],["display-text", "ㅤ"],
                "achievements"
            ]
        }
    },
    achievements: {
        11:{
            name: "first of many",
            tooltip: "do your first prestige",
            done() {return true},
            unlocked() {return true}
        },
        12:{
            name: "beta",
            tooltip: "lo budget alpha wolf from 99 nights",
            done() {return false},
            unlocked() {return true}
        },
    }
})