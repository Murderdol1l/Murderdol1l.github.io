export const indexTemplate = (content, token) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reddit</title>
      <script type="application/javascript" src="/static/client.js"></script>
      <script>
        window.__token__ = '${token}'
      </script>
    </head>
    <body>
      <div id="root">${content}</div>
      <div id="root-modal"></div>
    </body>
  </html>
`