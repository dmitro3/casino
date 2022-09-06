import * as auth from './auth';
import * as article from './article';
import * as user from './user';
import * as category from './category';

export { auth, article, user, category };

export const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;
