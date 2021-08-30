interface platformInfo {
    platformSlug: string,
    platformUserId: string,
    platformUserHandle: string,
    platformUserIdentifier: string,
    avatarUrl: string,
    additionalParameters: string[];
}
interface SocialAccount {
    platformSlug: string,
    platformUserHandle: string,
    platformUserIdentifier: string
}
interface userInfo {
    userId: number,
    isPremium: boolean,
    isVerified: boolean,
    isInfluencer: boolean,
    isPartner: boolean,
    countryCode: string
    customAvatarUrl: string,
    customHeroUrl: string,
    socialAccounts: SocialAccount[],
    pageviews: number,
    isSuspicious: boolean;
}
interface Stat {
    rank: string;
    percentile: number;
    displayName: string;
    displayCategory: string;
    category: string;
    metadata: [];
    value: number;
    displayValue: string;
    displayinterface: string;
}
interface Segment {
    interface: string,
    attributes: {},
    metadata: {name: string},
    expiryDate: string,
    stats: {
        finalBlows: Stat,
        chestsBroken: Stat,
        assists: Stat,
        damageDone: Stat,
        closeRangeDamageDone: Stat,
        longRangeDamageDone: Stat,
        fullRangeDamageDone: Stat,
        fullFusionDamageDone: Stat,
        fusions: Stat,
        fullFusion: Stat,
        headshotDamage: Stat,
        lastRank: Stat,
        revives: Stat,
        timePlayed: Stat,
        matchesPlayed: Stat,
        crownPickups: Stat,
        crownWins: Stat,
        crownPct: Stat,
        Wins: Stat,
        showdown: Stat,
        squadTop: Stat,
        kdRatio: Stat,
        killsPerGame: Stat,
        killsPerMin: Stat,
        avgTimeAlive: Stat,
        headshotDamageAccuracy: Stat,
        winPercentage: Stat,
        weaponFinalBlows: Stat,
        weaponDamageDone: Stat,
        weaponCloseRangeDamageDone: Stat,
        weaponLongRangeDamageDone: Stat,
        weaponFullFusionDamageDone: Stat,
        weaponFusions: Stat,
        weaponFullFusions: Stat,
        weaponHeadshotDamage: Stat,
        weaponHeadshotDamageAccuracy: Stat,
        hackFinalBlows: Stat,
        hackDamageDone: Stat,
        hackCloseRangeDamageDone: Stat,
        hackLongRangeDamageDone: Stat,
        hackFullFusionDamageDone: Stat,
        hackFusions: Stat,
        hackFullFusions: Stat,
        otherFinalBlows: Stat,
        otherDamageDone: Stat
    }
}
export interface Profile {
    data: {
        platformInfo: platformInfo,
        userInfo: userInfo,
        metadata: {
            lastUpdated: {
                value: string,
                displayValue: string
            }
        },
    },
    segments: Segment[],
    availableSegments: [],
    expiryDate: string,
}