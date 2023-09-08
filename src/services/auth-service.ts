export default function createBasicAuthHeaderFromSession(): string | null {
  const username = sessionStorage.getItem("username");
  const password = sessionStorage.getItem("password");

  if (!username || !password) {
    return null;
  }

  const credentials = `${username}:${password}`;

  const encodedCredentials = btoa(credentials);

  return `Basic ${encodedCredentials}`;
}
