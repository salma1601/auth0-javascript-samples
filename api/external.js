import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
  const session = getSession(req, res);

  if (!session || !session.accessToken) {
    return res.status(401).json({ error: "Non authentifié" });
  }

  const token = session.accessToken;

  // Ici tu peux utiliser le token pour vérifier l'autorisation, ou appeler une API externe
  return res.status(200).json({
    message: "Accès autorisé",
    user: session.user,
    token
  });
}

