export default ({ response }) => {
  response.status = 404;
  response.body = "Not Found";
};
