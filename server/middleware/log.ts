export default defineEventHandler((event) => {
  const url = getRequestPath(event)
  const method = getMethod(event)
  const httpVersion = event.node.req.httpVersion
  event.res.on('finish', () => {
    const statusCode = getResponseStatus(event)
    const statusText = getResponseStatusText(event)

    let statusColor = '\x1b[32m';
    if (statusCode >= 400 && statusCode < 500) statusColor = '\x1b[33m';
    else if (statusCode >= 500) statusColor = '\x1b[31m';

    console.info(
      `\x1b[36m[HTTP/${httpVersion}]\x1b[0m \x1b[33m${method}\x1b[0m Request to \x1b[34m${url}\x1b[0m completed with status ${statusColor}${statusCode}\x1b[0m (${statusColor}${statusText}\x1b[0m)`
    );
  })
})
