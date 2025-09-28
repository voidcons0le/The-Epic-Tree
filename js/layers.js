addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#a4ff3cff",
    resetDescription: "Prestige to gain<br>",
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
    upgrades: {
        11: {
            title: "P-11: Begin",
            description: "Start generating points automatically",
            cost: new Decimal(0),
        }
    },
    layerShown(){return true},
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", "ㅤ"],
        "upgrades"
    ],
})
addLayer("ach", {
    name: "achievements", symbol: "🏆", position: 0, row: "side", color: "#ffea29", tooltip: "Achievements",tabFormat: {
        "Achievements": {
            content: [
                ["display-text", "There are currently <b><h2><font color='#ffea29'><span style='font-family: Lucida Console, sans-serif'>1</span></font></h2></b> achievements in the game"],["display-text", "ㅤ"],
                "achievements"
            ]
        }
    },
    achievements: {
        11:{
            name: "first of many",
            tooltip: "do your first prestige",
            done() {return player.p.points.gte(1)},
            unlocked() {return true}
        },
    }
})
addLayer("pro", {
    name: "progress", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "📈", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#78778aff",
    resetDescription: "Reset to gain<br>",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "progress points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    tabFormat: {
        "Progression": {
            content: [
                "main-display",
                "prestige-button",
                "empty",
                ["infobox", "colortextInfo"]
            ]
        }
    },
    infoboxes: {
        colortextInfo: {
            title: "Colors/text guide",
            body() { 
                return hasUnlocked("p") 
                    ? "This is the prestige layer, where you can reset for prestige points." 
                    : "You don't know what this is yet..."; 
            },
        },
    }
})