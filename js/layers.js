addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Pr", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#48ff00",
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
    upgrades: {
        11: {
            title: "ok",
            description: "start making points",
            cost: new Decimal(1)
        },
    },
})
addLayer ("a", {
    name: "achievements",
    symbol: "🏆",
    position: 0,
    row: "side",
    type: "none",
    color: "#fbff16ff",
    tabFormat: [
        "achievements"
    ],
    tooltip: "Achievements"
})
addLayer ("thisidwillneverbeused", {
    name: "info",
    symbol: "📄",
    position: 0,
    row: "side",
    type: "none",
    color: "#474855ff",
    tabFormat: [
        ["infobox", "colorGuide"]
    ],
    tooltip: "information",
    infoboxes: {
        colorGuide: {
            title: "Color guide",
            body() {return `
            <h2>Big text</h2> is dynamic text (changes based on things)<br>
            <b>Glowing / colored</b> text means anything to do with a layer.<br>
            ↓ Below is the key to the colors for layers. ↓<br><br>
            <b>Points</b>
            `}
        }
    }
})