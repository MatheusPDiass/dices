export default function randonResult(maxNumber) {
  const indice = Math.random();
  const dice = Math.floor(indice * maxNumber + 1);
  return dice;
}
