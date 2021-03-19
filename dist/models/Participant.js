"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const mongoose_1 = require("mongoose");
const participantSchema = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    fullNane: {
        type: String,
        required: true
    },
    profilePicture: String,
    bib: Number,
    age: Number,
    gender: {
        type: String,
        enum: ['M', 'F', 'OTHER']
    },
    time: String,
    score: Number
});
exports.Participant = mongoose_1.model('Participant', participantSchema);
