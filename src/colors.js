const newColors = {
  electricViolet: "#9000FF",
  shamrock: "#32CC99",
  bittersweet: "#FE6666",
  catskillWhite: "#E4ECF1",
  darkBlue: "#180a33",
};

const colors = {
  apricot: "#ff9966",
  blueyGrey: "#acbec7",
  bluishGrey: "#859099",
  brightLightBlue: "#33ccff",
  cloudyBlue: "#cfdae1",
  lightCloudyBlue: "#ecf0f3",
  greenishTeal: "#33cc99",
  lightGreyish: "#e0e7ec",
  lighterPurple: "#ab64f5",
  orchid: "#cc66cc",
  paleGrey: "#f1f5f7",
  periwinkle: "#9966ff",
  perrywinkle: "#8d85ee",
  salmon: "#ff6666",
  slate: "#4a5365",
  tealish: "#33cccc",
  white: "#ffffff",
  darkBlue: "#180a33",
  ...newColors,
};

export default colors;

export const palette = {
  primary: colors.periwinkle,
  default: colors.catskillWhite,
  error: colors.bittersweet,
  success: colors.shamrock,
  warning: colors.apricot,
};
