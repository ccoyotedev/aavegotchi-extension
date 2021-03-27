export function getKinshipText(kinship) {
  switch (true) {
    case (kinship > 500):
      return "Inseparable";
    case (kinship > 100):
      return "Devoted";
    case (kinship > 90):
      return "Cozy";
    case (kinship > 75):
      return "Chummy";
    case (kinship > 50):
      return "Frenly";
    case (kinship > 40):
      return "Neutral";
    case (kinship > 25):
      return "Angry";
    case (kinship > 10):
      return "Resentful";
    default:
      return "Scorned";
  }
}