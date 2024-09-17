export default defineEventHandler(async (event) => {
  const { req } = event;

  const baseUrl = import.meta.env.API_URL
  const apiPrefix = 'api/';
  const path = req.url.slice(apiPrefix.length)

  const url = `${baseUrl}${path}`
  console.log({url})

  const response = await fetch(url, {
    method: req.method,
    headers: req.headers as HeadersInit,
    body: req.method !== 'GET' ? req : undefined,
    duplex: 'half'
  });

  const data = await response.json();
  event.res.setHeader('Content-Type', response.headers.get('content-type') || 'text/plain');
  event.res.statusCode = response.status;
  return data;
});
