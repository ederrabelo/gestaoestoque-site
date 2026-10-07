const salesMessage = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre o sistema de gestão de estoque",
);

export const urls = {
  login: "https://auth.gestaoestoque.app/login",
  sales: `https://wa.me/5565981659293?text=${salesMessage}`,
};
