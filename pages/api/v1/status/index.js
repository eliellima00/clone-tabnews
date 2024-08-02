function status(request, response) {
  return response.status(200).json({
    chave: "testando olá mundo",
  });
}

export default status;
