export const getEyeColor = (number, collateralColor) => {
  switch (true) {
    case (number <= 1):
      return '#FF02FF'
    case (number > 1 && number <= 9):
      return '#0164FF'
    case (number > 9 && number <= 24):
      return '#5D24BF'
    case (number > 24 && number <= 74):
      return collateralColor
    case (number > 74 && number <= 90):
      return '#36818E'
    case (number > 90 && number <= 97):
      return '#EA8B27'
    case (number > 97):
      return '#52FFA7'
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