export interface GuildedProfile extends Record<string, any> {
    id: string;
    name: string;
    subdomain: string;
    aliases: Alias[];
    avatar: string;
    banner: string;
    createdAt: string;
    userStatus: UserStatus;
    moderationStatus: string | null;
    aboutInfo: {
        bio: string;
        tagLine: string;
    };
    lastOnline: string;
    userPresenceStatus: number;
    userTransientStatus: string | null;
}

export interface Alias {
    alias: string;
    discriminator: string | null;
    name: string;
    createdAt: Date;
    userId: string;
    gameId: number;
    socialLinkSource: string | null;
    additionalInfo: AdditionalInfo;
    editedAt: Date;
    socialLinkHandle: string | null;
    playerInfo: string | null;
}

export interface AdditionalInfo {}

export interface UserStatus {
    content: string | null;
    customReactionId: number;
    customReaction: CustomReaction;
}

export interface CustomReaction {
    id: number;
    name: string;
    png: string;
    webp: string;
    apng: string | null;
}
