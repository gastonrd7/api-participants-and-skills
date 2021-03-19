"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    participantId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Participant' },
    header: {
        type: [{
                name: String,
                value: Number,
                total: Number,
                percentage: Number
            }],
    },
    items: {
        type: [{
                name: String,
                order: Number,
                P: Boolean,
                R: Boolean,
                W: Boolean,
                F: Boolean,
                time: String,
                score: Number,
                from: {
                    type: String,
                    enum: ["PostApocalypticHighway", "CostaRicaCaves"],
                }
            }]
    }
});
exports.Skill = mongoose_1.model('Skill', skillSchema);
