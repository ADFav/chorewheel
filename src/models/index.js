// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, TaskCompletion, Household, HouseholdMember } = initSchema(schema);

export {
  Task,
  TaskCompletion,
  Household,
  HouseholdMember
};