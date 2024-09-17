export default defineEventHandler(async (event) => {
  const { req } = event;

  const baseUrl = import.meta.env.API_URL
  const apiPrefix = 'api/';
  const path = req.url.slice(apiPrefix.length)

  const response = await fetch(new URL(path, baseUrl).toString(), {
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
