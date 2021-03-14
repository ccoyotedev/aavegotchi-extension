export const timeUntilNextInteraction = (epoch) => {
  const timestampOfNextInteraction = epoch + 43200;
  const timeStampNow = Math.floor(new Date() / 1000);
  const secondsUntilNextInteration = timestampOfNextInteraction - timeStampNow;

  const hours = Math.floor(secondsUntilNextInteration / 3600);
  if (hours >= 1) {
    return `in over ${hours} hour${hours === 1 ? '' : 's'}`;
  }
  const minutes = Math.ceil(secondsUntilNextInteration / 60);
  return `${minutes} minutes`
}
