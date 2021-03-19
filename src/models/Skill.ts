import {model, Schema, Document, Types} from 'mongoose';

export interface ISkills extends Document { 
    id: Types.ObjectId,
    participantId: Types.ObjectId,
    header: {
        name: string,
        value: number,
        total:number,
        percentage: number
    }[],
    items: {
        name: string
        order: number,
        P: boolean,
        R: boolean,
        W: boolean,
        F: boolean,
        time: string,
        score: number,
        from: "PostApocalypticHighway" | "CostaRicaCaves"
    }[]; 
}

const skillSchema = new Schema({
    _id: Types.ObjectId,
    participantId: {type: Schema.Types.ObjectId, ref:'Participant'},
    header: {
        type: [{
            name: String,
            value: Number,
            total:Number,
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

export const Skill = model<ISkills>('Skill', skillSchema);