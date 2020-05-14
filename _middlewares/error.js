import Error from "../_react/components/error.jsx";
import renderToString from "../_react/renderToString.jsx";

export default async (context, next) => {
  try {
    await next();
  } catch (err) {
    let props;

    if (Error.getInitialProps) {
      await file.default.getInitialProps(context)
        .then((res) => props = res)
        .catch((error) => err = error);
    } else {
      props = {};
    }

    const customError = await import("../src/pages/_error.jsx")
      .then((res) => res.default)
      .catch((err) => {
        console.log(err);
        return null;
      });

    context.response.status = err.status;
    context.response.body = await renderToString(
      customError || Error,
      {
        props: { ...props, error: {
          status: err.status,
          message: err.message
        } },
        route: {
          name: "error",
          path: "/_error",
        },
        routes: [],
      },
    );
  }
};
