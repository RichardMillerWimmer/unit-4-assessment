const boots = require('../bootsArray')

const collectedBoots = [];
let collectedId = 0;


module.exports = {

    getAvailibleBoots: (req, res) => {
        // console.log(boots)
        res.status(200).send(boots);
    },

    // getCollectedBoots: (req, res) => {
    //     res.status(200).send(collectedBoots);
    // },

    postBootToCollection: (req, res) => {
        const { newBoot } = req.body;
        console.log(newBoot)
        // console.log()
        newBoot.id = collectedId;
        collectedId++;

        collectedBoots.push(newBoot);
        res.status(200).send(collectedBoots);
    },

    addCleanCondition: (req, res) => {
        const { id } = req.params;

        const cleaningBoots = collectedBoots.find(elem => elem.id === +id);
        cleaningBoots.cc += 1;
        res.status(200).send(collectedBoots);
    },

    addWear: (req, res) => {
        const { id } = req.params

        const wearingBoots = collectedBoots.find(elem => elem.id === +id);
        wearingBoots.wear += 1;
        res.status(200).send(collectedBoots);
    },

    deleteBoots: (req, res) => {
        const { id } = req.params;

        const bootIndex = collectedBoots.findIndex(elem => elem.id === +id);
        collectedBoots.splice(bootIndex, 1);
        res.status(200).send(collectedBoots);
    }
};