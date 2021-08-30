const fetch = require("node-fetch")
const Profile = require("./Profile");
class HyperScapeAPI {
    constructor(authKey) {
        this.api = "https://public-api.tracker.gg/v2/hyper-scape/standard/"
        this.authKey = authKey
        this.offical = false
    }
    /**
     * 
     * @param {string} platform 
     * @param {string} platformIdentifer 
     * @returns {Promise<Profile>}
     */
    GetPlayerProfile(platform = "uplay", platformIdentifer) {
        const url = this.api + `profile/${platform}/${platformIdentifer}`
        return fetch(url, {
            "headers": {
                "TRN-Api-Key": this.authKey,
                "Accept": "application/json",
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return new Profile(data.data)
        }).catch((err) => {throw new Error(err)})
    }
}
module.exports = {
    HyperScapeAPI: HyperScapeAPI
}