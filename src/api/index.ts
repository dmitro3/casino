import * as auth from './auth';
import * as article from './article';
import * as user from './user';

export { auth, article, user };

export const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;
