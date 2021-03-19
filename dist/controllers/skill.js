"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkills = exports.createSkills = void 0;
const Skill_1 = require("../models/Skill");
const mongoose_1 = require("mongoose");
//import { getParticipants, createParticipants } from '../controllers/participant';
const random = (min, max) => {
    let result = Math.floor((Math.random() * (max - min + 1)) + min);
    let percentage = result / 20 * 100;
    return { value: result, percentage: percentage };
};
const createSkills = (participantId) => {
    let strengthRandom = random(0, 20);
    let enduranceRandom = random(0, 20);
    let dexterityRandom = random(0, 20);
    let sdecisionMakinRandom = random(0, 20);
    var sikill = new Skill_1.Skill();
    sikill._id = new mongoose_1.Types.ObjectId(),
        sikill.participantId = participantId,
        sikill.header = [{
                name: "STRENGTH",
                value: strengthRandom.value,
                total: 20,
                percentage: strengthRandom.percentage
            }, {
                name: "ENDURANCE",
                value: enduranceRandom.value,
                total: 20,
                percentage: enduranceRandom.percentage
            }, {
                name: "DEXTERITY",
                value: dexterityRandom.value,
                total: 20,
                percentage: dexterityRandom.percentage
            }, {
                name: "DECISION MAKING",
                value: sdecisionMakinRandom.value,
                total: 20,
                percentage: sdecisionMakinRandom.percentage
            }],
        sikill.items = [
            { name: "Hill Climb",
                order: 1,
                P: true,
                R: true,
                W: true,
                F: true,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "PostApocalypticHighway" },
            { name: "Run For The Hills",
                order: 2,
                P: true,
                R: false,
                W: true,
                F: false,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "PostApocalypticHighway" },
            { name: "Coded Doors",
                order: 3,
                P: false,
                R: false,
                W: true,
                F: false,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "PostApocalypticHighway" },
            { name: "Spear Throw",
                order: 4,
                P: false,
                R: false,
                W: true,
                F: true,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "PostApocalypticHighway" },
            { name: "Sand Bagging",
                order: 5,
                P: true,
                R: true,
                W: true,
                F: true,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "PostApocalypticHighway" },
            { name: "Crevasse Crossing",
                order: 6,
                P: true,
                R: false,
                W: false,
                F: true,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "CostaRicaCaves" },
            { name: "The Conopy",
                order: 7,
                P: true,
                R: false,
                W: false,
                F: true,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "CostaRicaCaves" },
            { name: "Dirty Armor",
                order: 8,
                P: true,
                R: true,
                W: true,
                F: true,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "CostaRicaCaves" },
            { name: "Navigational Challenge",
                order: 9,
                P: true,
                R: true,
                W: true,
                F: true,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "CostaRicaCaves" },
            { name: "Dead Weight",
                order: 10,
                P: true,
                R: true,
                W: true,
                F: true,
                time: `${random(0, 4).value}: ${random(0, 60).value}:${random(0, 60).value}`,
                score: random(0, 5).value,
                from: "CostaRicaCaves" }
        ];
    sikill.save();
};
exports.createSkills = createSkills;
const getSkills = (req, res) => {
    Skill_1.Skill.find({
        "participantId": req.params.participantId
    }, (err, skill) => {
        if (err)
            return res.status(500).send({ message: `Search failed: ${err}` });
        res.status(200).send({ skill });
    });
};
exports.getSkills = getSkills;
