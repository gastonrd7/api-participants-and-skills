import { Request, Response } from 'express';
import { Participant, IParticipant } from '../models/Participant';
import { Skill, ISkills } from '../models/Skill';
import { createSkills } from '../controllers/skill';
import {Types} from 'mongoose';

export const createParticipants = (req: Request, res: Response) => {

    
    let item1 = new Participant();
    item1._id = new Types.ObjectId(),
    item1.fullNane = "Guillermina Diaz";
    item1.profilePicture = "https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/40235567_749469985391805_3730157222307561472_n.jpg?tp=1&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_ohc=xa3lmj_Z9yAAX8IJrxi&ccb=7-4&oh=9c6361418d5e05290f6876c1023a1398&oe=607C474E&_nc_sid=7bff83";
    item1.bib = 1;
    item1.age = 32;
    item1.gender = "F";
    item1.time = "11: 45";
    item1.score = 100;

    let item2 = new Participant();
    item2._id = new Types.ObjectId(),
    item2.fullNane = "Mario Rui Diaz";
    item2.profilePicture = "https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/130826917_234691298017841_1588208876997467028_n.jpg?tp=1&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_ohc=_vQM7yf84acAX_3AYFT&ccb=7-4&oh=d5f1e836b0b36e083bb6197d024c9f1b&oe=607D6AC9&_nc_sid=7bff83";
    item2.bib = 1;
    item2.age = 32;
    item2.gender = "M";
    item2.time = "10: 45";
    item2.score = 110;

    let item3 = new Participant();
    item3._id = new Types.ObjectId(),
    item3.fullNane = "Martin Ruiz Diaz";
    item3.profilePicture = "https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/30981072_1000560113446570_5633230370439692288_n.jpg?tp=1&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_ohc=z4o4SI95iecAX9gFft8&ccb=7-4&oh=35b8fa52cf8b6e88a874050fd496d943&oe=607EF0E2&_nc_sid=7bff83";
    item3.bib = 12;
    item3.age = 12;
    item3.gender = "M";
    item3.time = "03: 46";
    item3.score = 104;

    let item4 = new Participant();
    item4._id = new Types.ObjectId(),
    item4.fullNane = "Gaston Ruiz Diaz";
    item4.profilePicture = "https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/26867343_1957905081128425_3208186617009274880_n.jpg?tp=1&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_ohc=cT9IjhMPqH4AX-B8x5r&ccb=7-4&oh=f7210ea5c255ec2d8de713bec558e694&oe=607B83A4&_nc_sid=7b02f1";
    item4.bib = 1;
    item4.age = 32;
    item4.gender = "F";
    item4.time = "11: 45";
    item4.score = 100;

    let items = [item1, item2, item3, item4];

    var itemsStored : IParticipant[] = [];
    Participant.find({}, (err, participants)=>{
        if (err) return res.status(500).send({message: `Search failed: ${err}`});
        if(participants.length == 0) {
            for (let index = 0; index < items.length; index++) {
                items[index].save((err, itemStored) => {
                    if(err) return res.status(500).send({meesage: `Error adding item in DB: ${err}`});
                    createSkills(itemStored._id);
                    itemsStored.push(itemStored);
                });
            }
            return  res.status(200).send({success: true, message: "records were added successfully"});
        }
        res.status(200).send({success: true, message: "the records already existed"});
    });
 };

export const getParticipants = (req: Request, res: Response) => {
    Participant.find((err, participants: IParticipant[]) => {
        if (err) return res.status(500).send({message: `Search failed: ${err}`});
        res.status(200).send(participants);
    });
    
};