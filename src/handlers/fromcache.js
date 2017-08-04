import { requestHandler } from '../handler-types.js';

export default function fromCache(opts) {
  return requestHandler(async fetchDetails => {
    const response = await caches.match(request, opts);
    if (response) response._fromCache = true;
    return response;
  });
}