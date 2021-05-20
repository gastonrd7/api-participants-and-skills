import { Router } from 'express';
import { deleteParticipant, getParticipants, createParticipants, createParticipant, updateParticipant } from '../controllers/participant';
import { getSkills, deleteSkillsByParticipantId} from '../controllers/skill';
const router = Router();

//Participants
router.get('/getParticipants', getParticipants);
router.post('/initAndGetParticipants', createParticipants);
router.post('/createParticipant', createParticipant);
router.patch('/updateParticipant/:participantId', updateParticipant);
router.delete('/deleteParticipant/:participantId', deleteParticipant);
//Skills
router.get('/getSkills/:participantId', getSkills);
router.delete('/deleteSkillsByParticipantId/:participantId', deleteSkillsByParticipantId);

export default router;