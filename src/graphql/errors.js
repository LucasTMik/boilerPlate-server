import { createError } from 'apollo-errors';

// Mask any internal errors
export const UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred',
});

// User should be logged in but isn't
export const UnauthorizedError = createError('UnauthorizedError', {
  message: 'You must login to do that',
});

// User is already logged in
export const AlreadyAuthenticatedError = createError(
  'AlreadyAuthenticatedError',
  {
    message: 'You are already authenticated',
  }
);

// User is trying to perform an admin function
export const ForbiddenError = createError('ForbiddenError', {
  message: 'You are not allowed to do that',
});

// User is trying to register with an already registered email or CPF
export const UserAlreadyExistsError = createError('UserAlreadyExistsError', {
  message: 'ER_USER_ALREADY_EXISTS',
});

// The server wasn't able to find the specified user
export const UserNotFound = createError('UserNotFound', {
  message: 'This user does not exist',
});

// The server wasn't able to find the specified task
export const TaskNotFound = createError('TaskNotFound', {
  message: 'This task does not exist',
});

// The individual task limits was reached
export const TaskLimitIndividualReached = createError(
  'TaskLimitIndividualReached',
  {
    message: 'ER_TASK_LIMIT_INDV_REACHED',
  }
);

// The global task limits was reached
export const TaskLimitGlobalReached = createError('TaskLimitGlobalReached', {
  message: 'ER_TASK_LIMIT_GLOBAL_REACHED',
});

// The parameters to complete the task were invalid, this could
// be a wrong password on a password task
export const InvalidTaskParameters = createError('InvalidTaskParameters', {
  message: 'The task parameters are invalid',
});

export const createInvalidTaskParametersError = errCode =>
  createError('InvalidTaskParameters', {
    message: errCode,
  });

// The server wasn't able to find the specified product
export const ProductNotFound = createError('ProductNotFound', {
  message: 'This product does not exist',
});

// The individual product limits was reached
export const ProductLimitIndividualReached = createError(
  'ProductLimitIndividualReached',
  {
    message: 'ER_PRODUCT_LIMIT_INDV_REACHED',
  }
);

// The global product limits was reached
export const ProductLimitGlobalReached = createError('ProductLimitGlobalReached', {
  message: 'ER_PRODUCT_LIMIT_GLOBAL_REACHED',
});

export const createInvalidProductParametersError = errCode =>
  createError('InvalidProductParameters', {
    message: errCode,
  });

// The user does not has enough coins
export const NotEnoughCoins = createError('NotEnoughCoins', {
  message: 'ER_NOT_ENOUGH_COINS',
});

// The buy password is invalid
export const InvalidBuyPassword = createError('InvalidBuyPassword', {
  message: 'ER_INVALID_BUY_PASSWORD',
});

// The username specified has already been taken
export const UsernameAlreadyTaken = createError('UsernameAlreadyTaken', {
  message: 'Username has already been taken',
});

// The given data is invalid
export const InvalidDataError = createError('InvalidDataError', {
  message: 'The data specified is invalid',
});
