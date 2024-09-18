export default defineEventHandler(async (event) => {
  const { req } = event;

  const baseUrl = import.meta.env.API_URL
  const apiPrefix = 'api/';
  const path = req.url.slice(apiPrefix.length)
  const url = new URL(path, baseUrl).toString()
  const body = req.method?.toLowerCase() !== 'get' ? await readBody(event) : undefined
  const response = await fetch(url, {
    method: req.method,
    headers: req.headers as HeadersInit,
    body: JSON.stringify(body),
  });
  event.res.setHeader('Content-Type', response.headers.get('content-type') || 'text/plain');
  setResponseStatus(event, response.status);
  return response;
});
