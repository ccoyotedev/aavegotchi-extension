export const getRarity = (number) => {
  switch (true) {
    case (number <= 1):
      return 'mythical low'
    case (number > 1 && number <= 9):
      return 'rare low'
    case (number > 9 && number <= 24):
      return 'uncommon low'
    case (number > 24 && number <= 74):
      return 'common'
    case (number > 74 && number <= 90):
      return 'uncommon high'
    case (number > 90 && number <= 97):
      return 'rare high'
    case (number > 97):
      return 'mythical high'
  }
}

export const getRarityColor = (number) => {
  switch (true) {
    case (number < 450):
      return '#7318F4';
    case (number <= 525):
      return '#48ABFE';
    case (number <= 580):
      return '#FF96FE';
    case (number > 580):
      return '#52FFA7';
    default:
      return '#7318F4';
  }
}