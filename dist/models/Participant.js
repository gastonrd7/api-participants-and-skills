"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const mongoose_1 = require("mongoose");
const participantSchema = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    fullName: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: null
    },
    bib: {
        type: Number,
        default: null
    },
    age: {
        type: Number,
        default: null
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'OTHER'],
        required: true
    },
    time: {
        type: String,
        default: null
    },
    score: {
        type: Number,
        default: null
    }
});
exports.Participant = mongoose_1.model('Participant', participantSchema);
