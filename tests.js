const { test } = require('@ianwalter/bff')
const { createKoaServer } = require('@ianwalter/test-server')

test('test server', async ({ browser, expect }) => {
  const server = await createKoaServer()
  server.use(ctx => {
    ctx.body = `
      <html>
        <head>
          <title>Hello World!</title>
        </head>
        <body>
          <h1>Hello World!</h1>
        </body>
      </html>
    `
  })
  console.log('SERVER', server)
  await browser.url(server.url)
  expect(await browser.getTitle()).toBe('Hello World!')
})
