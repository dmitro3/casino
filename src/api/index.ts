import * as auth from './auth';
import * as article from './article';

export { auth, article };

export const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;
