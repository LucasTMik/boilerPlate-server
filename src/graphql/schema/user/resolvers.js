import { baseResolver, isAuthenticatedResolver, isAdminResolver } from '../../baseResolvers';
import {
  InvalidDataError,
  UserAlreadyExists,
  UnknownError,
} from '../../errors';
import { cleanCpf, validateCpf, createLog } from '../../../utils';


const me = isAuthenticatedResolver.createResolver(async root => {
    return { name: "test"};
});

// Type Query

const allUsers = baseResolver.createResolver(async root => {
  return { name: "todos usuarios" };
});

export default {
  Query: {
    me,
    allUsers
  }
}