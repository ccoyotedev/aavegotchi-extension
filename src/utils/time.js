const getSecondsUntilNextInteraction = (epoch) => {
  const timestampOfNextInteraction = epoch + 43200;
  const timeStampNow = Math.floor(new Date() / 1000);
  return timestampOfNextInteraction - timeStampNow;
}

export const timeUntilNextInteraction = (epoch) => {
  const secondsUntilNextInteration = getSecondsUntilNextInteraction(epoch);

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

export const isReadyToPet = (epoch) => {
  const secondsUntilNextInteration = getSecondsUntilNextInteraction(epoch);

  return secondsUntilNextInteration <= 0;
}
