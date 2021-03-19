import {model, Schema, Document, Types} from 'mongoose';

export interface IParticipant extends Document { 
    _id: Types.ObjectId;
    fullNane: string;
    profilePicture: string;
    bib: number;
    age: number;
    gender: 'M' | 'F' | 'OTHER';
    time: string;
    score: number;
}

const participantSchema = new Schema({
    _id: Types.ObjectId,
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

export const Participant = model<IParticipant>('Participant', participantSchema);