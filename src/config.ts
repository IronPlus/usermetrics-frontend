interface AppConfig {
  baseUrl: string;
  authorizationHeader: string;
}

const config: AppConfig = {
  baseUrl: "http://localhost:8080/usermetrics-v1",
  authorizationHeader: "Basic dXNlcm1ldHJpY3M6YkA0TXhIZmh0MmlGR3ok",
};

export default config;
