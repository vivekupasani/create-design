import { Redis } from '@upstash/redis'

export const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL as string,
    token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
})

export const setWaitlistEntry = async (entry: { name: string, email: string, phone: string }) => {
    try {
        const isAlreadyExist = await redis.get(`waitlist:${entry.email}`);

        if (isAlreadyExist) {
            return;
        }

        const key = `waitlist:${entry.email}`;

        await redis.set(key, JSON.stringify(entry));

    } catch (error) {
        console.error('Error setting waitlist entry in Redis:', error);
        throw error;
    }
}