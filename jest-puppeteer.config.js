module.exports = {
    server: {
      command: 'parcel index.html'
    },
    launch: {
      dumpio: false,
      headless: false,
      product: 'chrome',
      args: ['--no-sandbox', '--enable-experimental-web-platform-features'],
    },
    browser: 'chromium',
    browserContext: 'default',
}