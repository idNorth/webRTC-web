const apiUrl = {
  protocol: 'http',
  host: 'localhost',
  port: 4001,
}

const config = {
  api: {
    ...apiUrl,
    url: `${apiUrl.protocol}://${apiUrl.host}:${apiUrl.port}/api`
  }
};

export default config