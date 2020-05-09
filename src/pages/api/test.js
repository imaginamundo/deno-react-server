export default function (context) {
  return context.response.body = {
    hello: "world!",
    method: context.request.method,
  };
}
