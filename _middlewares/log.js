export default async (context, next) => {
  await next();
  const responseTime = context.response.headers.get("X-Response-Time");
  console.log(
    `${context.request.method} ${context.request.url} - ${responseTime}`,
  );
};
