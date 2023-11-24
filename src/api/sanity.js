import { createClient } from '@sanity/client';

export const sanityClient = createClient({
    projectId: 'tqwgeaow',
    dataset: 'production',
    useCdn: true,
});
