class platformInfo {
    /**
     * 
     * @param {string} platformSlug 
     * @param {number | null} platformUserId 
     * @param {string} platformUserHandle 
     * @param {string} platformUserIdentifier 
     * @param {string} avatarUrl 
     * @param {null} additionalParameters 
     */
    constructor(platformSlug, platformUserId, platformUserHandle, platformUserIdentifier, avatarUrl, additionalParameters) {
        this.platformSlug = platformSlug;
        this.platformUserId = platformUserId;
        this.platformUserHandle = platformUserHandle;
        this.platformUserIdentifier = platformUserIdentifier;
        this.avatarUrl = avatarUrl;
        this.additionalParameters = additionalParameters;
    };
}
class SocialAccount {
    /**
     * 
     * @param {string} platformSlug 
     * @param {string} platformUserHandle 
     * @param {string} platformUserIdentifier 
     * @returns {SocialAccount} 
     */
    constructor(platformSlug, platformUserHandle, platformUserIdentifier) {
        this.platformSlug = platformSlug;
        this.platformUserHandle = platformUserHandle;
        this.platformUserIdentifier = platformUserIdentifier;
    };
}
class userInfo {
    /**
     * 
     * @param {number} userId 
     * @param {boolean} isPremium 
     * @param {boolean} isVerified 
     * @param {boolean} isInfluencer 
     * @param {boolean} isPartner 
     * @param {string} countryCode 
     * @param {string} customAvatarUrl 
     * @param {string | null} customHeroUrl 
     * @param {SocialAccount[]} socialAccounts 
     * @param {number | null} pageviews 
     * @param {boolean | null} isSuspicious 
     * @returns {userInfo}
     */
    constructor(userId, isPremium, isVerified, isInfluencer, isPartner, countryCode, customAvatarUrl, customHeroUrl, socialAccounts, pageviews, isSuspicious) {
        this.userId = userId;
        this.isPremium = isPremium;
        this.isVerified = isVerified;
        this.isInfluencer = isInfluencer;
        this.isPartner = isPartner;
        this.countryCode = countryCode;
        this.customAvatarUrl = customAvatarUrl;
        this.customHeroUrl = customHeroUrl;
        this.socialAccounts = socialAccounts.map((d) => {return new SocialAccount(d.platformSlug, d.platformUserHandle, d.platformUserIdentifier)});
        this.pageviews = pageviews;
        this.isSuspicious = isSuspicious;
    };
}

class Stat {
    /**
     * 
     * @param {null} rank 
     * @param {null} percentile 
     * @param {string} displayName 
     * @param {string} displayCategory 
     * @param {string} category 
     * @param {{}} metadata 
     * @param {number} value 
     * @param {string} displayValue 
     * @param {string} displayType
     * @returns {Stat} 
     */
    constructor(rank, percentile, displayName, displayCategory, category, metadata, value, displayValue, displayType) {
        this.rank = rank;
        this.percentile = percentile;
        this.displayName = displayName;
        this.displayCategory = displayCategory;
        this.category = category;
        this.metadata = metadata;
        this.value = value;
        this.displayValue = displayValue;
        this.displayType = displayType;
    };
}
class Segment {
    constructor(type, attributes, metadata, expiryDate, stats) {
        this.type = type;
        this.attributes = attributes;
        this.metadata = {
            name: metadata.name ?? "",
        };
        this.expiryDate = expiryDate;
        this.stats = {};
        for(const stat in stats) {
            this.stats[stat] = new Stat(stats[stat].rank, stats[stat].percentile, stats[stat].displayName, stats[stat].displayCategory, stats[stat].category, stats[stat].metadata, stats[stat].value, stats[stat].displayValue, stats[stat].displayType);
        };
    };
}
class Profile {
    /**
     * 
     * @param {object} data
     * @returns {Profile} 
     */
    constructor(data) {
        this.data = {
            platformInfo: new platformInfo((data.platformInfo.platformSlug) ?? "", (data.platformInfo.platformUserId) ?? "", (data.platformInfo.platformUserHandle) ?? "", (data.platformInfo.platformUserIdentifier) ?? "", (data.platformInfo.avatarUrl) ?? "", (data.platformInfo.additionalParameters) ?? ""),
            userInfo: new userInfo((data.userInfo.userId) ?? 0, (data.userInfo.isPremium) ?? false, (data.userInfo.isVerified) ?? false, (data.userInfo.isInfluencer) ?? false, (data.userInfo.isPartner) ?? false, (data.userInfo.countryCode) ?? "", (data.userInfo.customAvatarUrl) ?? "", (data.userInfo.customHeroUrl) ?? "", (data.userInfo.socialAccounts) ?? [], (data.userInfo.pageviews) ?? 0, (data.userInfo.isSuspicious) ?? false),
            metadata: {
                lastUpdated: {
                    value: data.metadata.lastUpdated.value ?? "",
                    displayValue: data.metadata.lastUpdated.displayValue ?? "",
                },
            },
            segments: data.segments.map((segment) => {return new Segment((segment.type) ?? "", (segment.attributes) ?? {}, (segment.metadata) ?? {}, (segment.expiryDate) ?? "", (segment.stats) ?? {})}),
            availableSegments: data.availableSegments,
            expiryDate: data.expiryDate,
        };
    }
}
module.exports = Profile;