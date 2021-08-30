# HyperScape-API
 This package is a wrapper for the unofficial HyperScape API

1. [Hyper Scape](#hyperscape)
    1. [Usage](#hyperscape-usage)
    2. [Functions](#hyperscape-functions)
        1. [GetPlayerProfile](#hyperscape-getplayerprofile)
            1. [Inputs](#hyperscape-getplayerprofile-inputs)
            2. [Output](#hyperscape-getplayerprofile-output)
            3. [Usage](#hyperscape-getplayerprofile-usage)
    3. [Return Types](#hyperscape-returntypes)
        1. [Profile](#hyperscape-returntypes-profile)
            1. [platformInfo](#hyperscape-returntypes-profile-platforminfo)
            2. [userInfo](#hyperscape-returntypes-profile-userinfo)
                1. [SocialAccount](#hyperscape-returntypes-profile-userinfo-socialaccount)
            3. [Segment](#hyperscape-returntypes-profile-segment)
                1. [Stat](#hyperscape-returntypes-profile-segment-stat)


## Hyper Scape <a id="hyperscape">
**This is an Unoffical API** [Unoffical Docs](https://tracker.gg/developers/docs/titles/hyper-scape)
### Usage <a id="hyperscape-usage">
```javascript
const {HyperScapeAPI} = require("@mattplays/hyperscape-api");
const API = new HyperScapeAPI("DUMMYAPIKEY");
```
### Functions <a id="hyperscape-functions">
#### GetPlayerProfile <a id="hyperscape-getplayerprofile">
Retrieve career stats for a Hyper Scape player.
##### Inputs <a id="hyperscape-getplayerprofile-inputs">
```typescript
export type platform = "uplay" | "psn" | "xbl"
```
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| platform  | `platform`  | Yes |The platform slug, must be one of 'uplay', 'psn', 'xbl'. |
| platformIdentifier | `string` | Yes | The user's handle on the platform, ie. a Uplay username, PSN ID, Xbox Live gamertag, etc. |

##### Output <a id="hyperscape-getplayerprofile-output">
The GetPlayerProfile function returns a `Promise<Profile>` type
##### Usage <a id="hyperscape-getplayerprofile-usage">
```javascript
const {HyperScapeAPI} = require("@mattplays/hyperscape-api");
const API = new HyperScapeAPI("DUMMYAPIKEY");
HyperScapeAPI.GetPlayerProfile("uplay", "DUMMY-PLATFORM-IDENTIFIER").then((data) => {
// Your Code Here :D
});
```
### Return Types <a id="hyperscape-returntypes">
#### Profile <a id="hyperscape-returntypes-profile">
```typescript
export type Profile = {
    data: {
        platformInfo: platformInfo,
        userInfo: userInfo,
        metadata: {
            lastUpdated: {
                value: string,
                displayValue: string
            }
        },
        segments: Segment[],
        availableSegments: [],
        expiryDate: string,
    }
}
```
##### platformInfo <a id="hyperscape-returntypes-profile-platforminfo">
```typescript
export type platformInfo = {
    platformSlug: string,
    platformUserId: string | null,
    platformUserHandle: string,
    platformUserIdentifier: string,
    avatarUrl: string,
    additionalParameters: string[] | null;
}
```
##### userInfo <a id="hyperscape-returntypes-profile-userinfo">
```typescript
export type userInfo = {
    userId: number,
    isPremium: boolean,
    isVerified: boolean,
    isInfluencer: boolean,
    isPartner: boolean,
    countryCode: string
    customAvatarUrl: string,
    customHeroUrl: string | null,
    socialAccounts: SocialAccount[],
    pageviews: null,
    isSuspicious: boolean | null;
}
```
###### SocialAccount <a id="hyperscape-returntypes-profile-userinfo-socialaccount">
```typescript
export type SocialAccount = {
    platformSlug: string,
    platformUserHandle: string,
    platformUserIdentifier: string
}
```
##### Segment <a id="hyperscape-returntypes-profile-segment">
```typescript
export type Segment = {
    type: string,
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
```
###### Stat <a id="hyperscape-returntypes-profile-segment-stat">
```typescript
export type Stat = {
    rank: string | null;
    percentile: number;
    displayName: string;
    displayCategory: string;
    category: string;
    metadata: [];
    value: number;
    displayValue: string;
    displayType: string;
}
```