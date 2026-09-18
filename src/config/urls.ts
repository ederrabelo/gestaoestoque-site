const authUrl = import.meta.env.PUBLIC_AUTH_URL;
const salesMessage = encodeURIComponent(
  "Olá! Quero conhecer o gestaoestoque.app e entender como ele pode ajudar minha operação.",
);

if (!authUrl) {
  throw new Error("PUBLIC_AUTH_URL precisa estar configurada.");
}

export const urls = {
  login: `${authUrl}/login`,
  sales: `https://wa.me/5565981659293?text=${salesMessage}`,
};
