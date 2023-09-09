export default function createBasicAuthHeaderFromSession(): string {
  const encodedCredentials = btoa("test:test");

  return `Basic ${encodedCredentials}`;
}
