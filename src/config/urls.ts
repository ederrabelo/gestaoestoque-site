const appUrl = import.meta.env.PUBLIC_APP_URL;
const authUrl = import.meta.env.PUBLIC_AUTH_URL;

console.log("PUBLIC_APP_URL:", appUrl);
console.log("PUBLIC_AUTH_URL:", authUrl);

if (!appUrl || !authUrl) {
  throw new Error(
    "PUBLIC_APP_URL e PUBLIC_AUTH_URL precisam estar configuradas.",
  );
}

export const urls = {
  login: `${authUrl}/login`,
  signup: `${appUrl}/signup`,
};