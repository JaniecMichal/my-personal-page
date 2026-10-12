/**
 * Keeps the contact email out of the HTML and JS so scrapers don't pick it up.
 * The address is reversed and base64-encoded on the server and decoded in the browser.
 */
export const encodeEmail = (email: string) => btoa(email.split("").reverse().join(""));

export const decodeEmail = (encoded: string) => atob(encoded).split("").reverse().join("");
