import { Router } from 'express';
import { getParticipants, createParticipants } from '../controllers/participant';
import { getSkills, } from '../controllers/skill';
const router = Router();

//Participants
router.get('/getParticipants', getParticipants);
router.post('/initAndGetParticipants', createParticipants);
//Skills
router.get('/getSkills/:participantId', getSkills);

export default router;