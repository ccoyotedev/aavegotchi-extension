export const timeUntilNextInteraction = (epoch) => {
  const timestampOfNextInteraction = epoch + 43200;
  const timeStampNow = Math.floor(new Date() / 1000);
  const secondsUntilNextInteration = timestampOfNextInteraction - timeStampNow;

  if (secondsUntilNextInteration <= 0) {
    return `Pet me!`
  }

  const hours = Math.floor(secondsUntilNextInteration / 3600);
  if (hours >= 1) {
    return `Next interaction: in over ${hours} hour${hours === 1 ? '' : 's'}`;
  }
  const minutes = Math.ceil(secondsUntilNextInteration / 60);
  return `Next interaction: ${minutes} minutes`
}
