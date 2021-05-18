import {model, Schema, Document, Types} from 'mongoose';

export interface IParticipant extends Document { 
    _id: Types.ObjectId;
    fullName: string;
    profilePicture: string;
    bib: number;
    age: number;
    gender: 'M' | 'F' | 'OTHER';
    time: string;
    score: number;
}

const participantSchema = new Schema({
    _id: Types.ObjectId,
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

export const Participant = model<IParticipant>('Participant', participantSchema);