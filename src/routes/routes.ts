import { Router } from 'express';
import { getParticipants, createParticipants, createParticipant, updateParticipant } from '../controllers/participant';
import { getSkills, } from '../controllers/skill';
const router = Router();

//Participants
router.get('/getParticipants', getParticipants);
router.post('/initAndGetParticipants', createParticipants);
router.post('/createParticipant', createParticipant);
router.patch('/updateParticipant/:participantId', updateParticipant);
//Skills
router.get('/getSkills/:participantId', getSkills);

export default router;