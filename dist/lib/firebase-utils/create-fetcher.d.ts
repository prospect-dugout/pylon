import { User } from '@firebase/auth';
export declare const createFetcher: (functionsUrl: string) => (url: string, { user, method, ...props }: RequestInit & {
    user: User | null;
}) => Promise<any>;
