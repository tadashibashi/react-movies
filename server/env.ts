import dotenv from "dotenv";
dotenv.config();

interface EnvVar {
    required: boolean;
    name: string;
}

// track env dependencies when in debug mode
let envs = new Map<string, EnvVar>();
const isProd = process.env["PRODUCTION"] === "true";

/**
 * Get a variable from the environment
 * @param name - Environment variable to find value of.
 * @param defaultVal - Default value if var not available in environment -
 * empty string by default (a check for falsy return value checks if unavailable).
 */
export function getEnv(name: string, defaultVal: string = ""): string {
    const value = process.env[name];

    if (!isProd) {
        if (!envs.has(name))
            envs.set(name, {name, required: false});
    }

    return value === undefined ? defaultVal : value;
}


/**
 * Get a variable from the environment. If it doesn't exist throw ReferenceError.
 * @param name - Environment variable to find value of.
 */
export function requireEnv(name: string): string {
    const value = process.env[name];

    if (value === undefined)
        throw ReferenceError(`Required variable "${name}" not found in the environment!`);

    if (!isProd) {
        if (envs.has(name))
            envs.get(name)!.required = true;
        else
            envs.set(name, {name, required: true});
    }

    return value;
}


/**
 * In debug mode, returns an array of the environment variables used, and
 * whether they have been required by the program from the time of the
 * server's execution until the call to `getUsed` was made.
 *
 * In production mode, the return value will always be an empty [].
 */
export function getUsed() {
    const res: EnvVar[] = [];

    if (isProd) return res;

    for (const v of envs.values())
        res.push({name: v.name, required: v.required});
    return res;
}
