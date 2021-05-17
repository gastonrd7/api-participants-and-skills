import { Request, Response } from 'express';
import { Participant, IParticipant } from '../models/Participant';
import { Skill, ISkills } from '../models/Skill';
import { createSkills } from '../controllers/skill';
import {ObjectId, Types} from 'mongoose';

export const createParticipant = (req: Request, res: Response) => {
    let item = new Participant();
    item._id = new Types.ObjectId(),
    item.fullName = req.body.fullName;
    req.body.profilePicture && (item.profilePicture = req.body.profilePicture);
    req.body.bib && (item.bib = req.body.bib);
    req.body.age && (item.age = req.body.age);
    req.body.gender && (item.gender = req.body.gender);
    req.body.time && (item.time = req.body.time);
    req.body.score && (item.score = req.body.score);

    item.save((err, itemStored) => {
        if(err) return res.status(500).send({meesage: `Error adding item in DB: ${err}`});
        return res.status(200).send({success: true, message: "records were added successfully", data: itemStored});
    });
}

export const updateParticipant = async (req: Request, res: Response) => {
    var _id: Types.ObjectId;
    try {
        _id = Types.ObjectId(req.params.participantId);
    } catch (e) {
        return res.status(500).send({message: `Errr in the ID: ${e}`});
    }

    try {
        Participant.findByIdAndUpdate({_id}, {$set:req.body}, { rawResult: true }, function(err, item){
            if (err){
                return res.status(500).send({message: `Error updating item in DB: ${err}`});
            }
            else{
                return res.status(200).send({success: true, message: "record was updated successfully"});
            }
        });
    } catch (e) {
        return res.status(500).send({message: `Error updating item in DB: ${e}`});
    }
    
}

export const createParticipants = (req: Request, res: Response) => {

    
    let item1 = new Participant();
    item1._id = new Types.ObjectId(),
    item1.fullName = "Guillermina Diaz";
    item1.profilePicture = "https://amp.lainformacion.com/files/article_default_content/uploads/imagenes/2017/09/14/59bd7c2f6c1f7.jpeg";
    item1.bib = 1;
    item1.age = 32;
    item1.gender = "F";
    item1.time = "11: 45";
    item1.score = 100;

    let item2 = new Participant();
    item2._id = new Types.ObjectId(),
    item2.fullName = "Mario Rui Diaz";
    item2.profilePicture = "https://amp.lainformacion.com/files/article_default_content/uploads/imagenes/2017/09/14/59bd7c2f6c1f7.jpeg";
    item2.bib = 1;
    item2.age = 32;
    item2.gender = "M";
    item2.time = "10: 45";
    item2.score = 110;

    let item3 = new Participant();
    item3._id = new Types.ObjectId(),
    item3.fullName = "Martin Ruiz Diaz";
    item3.profilePicture = "https://amp.lainformacion.com/files/article_default_content/uploads/imagenes/2017/09/14/59bd7c2f6c1f7.jpeg";
    item3.bib = 12;
    item3.age = 12;
    item3.gender = "M";
    item3.time = "03: 46";
    item3.score = 104;

    let item4 = new Participant();
    item4._id = new Types.ObjectId(),
    item4.fullName = "Gaston Ruiz Diaz";
    item4.profilePicture = "https://amp.lainformacion.com/files/article_default_content/uploads/imagenes/2017/09/14/59bd7c2f6c1f7.jpeg";
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