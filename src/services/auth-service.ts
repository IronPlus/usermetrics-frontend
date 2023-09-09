export default function createBasicAuthHeader(): string {
  const encodedCredentials = btoa("test:test");

  return `Basic ${encodedCredentials}`;
}
