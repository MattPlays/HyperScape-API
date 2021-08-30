import {Profile} from "./Profile";
type platform = "uplay" | "psn" | "xbl"
export class HyperScapeAPI {
    constructor(authKey: string);
    GetPlayerProfile(platform: platform, platformIdentifier: string): Promise<Profile>;
}