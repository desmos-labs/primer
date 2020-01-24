import fetch from "node-fetch";

const headers = {
    "Authorization": "token e8abb60ac20841c5ffcf3d0f8f5341873062ab31"
};

/**
 * Allows to easily fetch any URL in form of a JSON or plain text.
 */
class RequestService {

    /**
     * Gets the contents of a Web page and reads it as a JSON.
     * @param url from which to get the contents
     * @returns {Promise<any>} returning the JSON contents.
     */
    async getJson(url) {
        const response = await fetch(url, {headers: headers});
        return response.json();
    }

    /**
     * Gets the contents of a Web page and reads it as a plain text.
     * @param url from which to get the contents
     * @returns {Promise<any>} returning the contents.
     */
    async getPlain(url) {
        const response = await fetch(url, {headers: headers});
        return response.text();
    }
}

export default new RequestService()