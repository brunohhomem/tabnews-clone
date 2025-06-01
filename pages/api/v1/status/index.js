function status(request, response) {
  response.status(200).send({
    message: "API is running...",
  });
}

export default status;
