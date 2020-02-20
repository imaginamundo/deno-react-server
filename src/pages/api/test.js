export default function handler(context) {
  return context.response.body = {
    Hello: "World!",
    method: context.request.method
  };
}
