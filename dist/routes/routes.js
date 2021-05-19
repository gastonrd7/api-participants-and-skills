"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const participant_1 = require("../controllers/participant");
const skill_1 = require("../controllers/skill");
const router = express_1.Router();
//Participants
router.get('/getParticipants', participant_1.getParticipants);
router.post('/initAndGetParticipants', participant_1.createParticipants);
router.post('/createParticipant', participant_1.createParticipant);
router.patch('/updateParticipant/:participantId', participant_1.updateParticipant);
router.delete('/deleteParticipant/:participantId', participant_1.deleteParticipant);
//Skills
router.get('/getSkills/:participantId', skill_1.getSkills);
router.delete('/deleteSkillsByParticipanId/:participantId', skill_1.deleteSkillsByParticipanId);
exports.default = router;
