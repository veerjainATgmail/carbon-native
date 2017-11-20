import { StyleSheet, Platform } from 'react-native';

// colors
// light, stable, primary, calm, secondary, energized, danger, royal, dark
export const colors = {
  light: '#fff',
  lightActive: '#fff', // @todo: update active color
  stable: '#f8f8f8',
  stableActive: '#e0e0e0',
  primary: '#337AF9',
  primaryActive: '#3474e1',
  calm: '#11c1f3',
  calmActive: '#11c1f3', // @todo: update active color
  secondary: '#22DD5E',
  secondaryActive: '#2ec95c',
  energized: '#FFC600',
  energizedActive: '#FFC600', // @todo: update active color
  danger: '#F83B36',
  dangerActive: '#e13838',
  royal: '#7E59FF',
  royalActive: '#7E59FF', // @todo: update active color
  dark: '#222',
  darkActive: '#343434',
};

export const carbonStyles = {
  // container
  // container: {
  //   flex: 1,
  //   // backgroundColor: '#F5FCFF',
  // },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  // list
  itemLast: {
    borderBottomWidth: 0,
  },
  itemHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  itemDivider: {
    backgroundColor: colors.stable,
  },
  itemDividerText: {
    fontWeight: 'bold',
  },

  // defaults:
  // - font size
  // - margin & padding: horizontal & vertical

  // typography
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },

  // colors
  // light, stable, primary, calm, secondary, energized, danger, royal, dark
  light: {
    color: colors.light,
  },
  lightBg: {
    backgroundColor: colors.light,
  },
  lightBgActive: {
    backgroundColor: colors.lightActive,
  },
  stable: {
    color: colors.stable,
  },
  stableBg: {
    backgroundColor: colors.stable,
  },
  stableBgActive: {
    backgroundColor: colors.stableActive,
  },
  primary: {
    color: colors.primary,
  },
  primaryBg: {
    backgroundColor: colors.primary,
  },
  primaryBgActive: {
    backgroundColor: colors.primaryActive,
  },
  calm: {
    color: colors.calm,
  },
  calmBg: {
    backgroundColor: colors.calm,
  },
  calmBgActive: {
    backgroundColor: colors.calmActive,
  },
  secondary: {
    color: colors.secondary,
  },
  secondaryBg: {
    backgroundColor: colors.secondary,
  },
  secondaryBgActive: {
    backgroundColor: colors.secondaryActive,
  },
  energized: {
    color: colors.energized,
  },
  energizedBg: {
    backgroundColor: colors.energized,
  },
  energizedBgActive: {
    backgroundColor: colors.energizedActive,
  },
  danger: {
    color: colors.danger,
  },
  dangerBg: {
    backgroundColor: colors.danger,
  },
  dangerBgActive: {
    backgroundColor: colors.dangerActive,
  },
  royal: {
    color: colors.royal,
  },
  royalBg: {
    backgroundColor: colors.royal,
  },
  royalBgActive: {
    backgroundColor: colors.royalActive,
  },
  dark: {
    color: colors.dark,
  },
  darkBg: {
    backgroundColor: colors.dark,
  },
  darkBgActive: {
    backgroundColor: colors.darkActive,
  },

  // margin
  margin: {
    margin: 10,
  },
  marginVertical: {
    marginVertical: 10,
  },
  marginHorizontal: {
    marginHorizontal: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  marginRight: {
    marginRight: 10,
  },
  marginBottom: {
    marginBottom: 10,
  },
  marginLeft: {
    marginLeft: 10,
  },

  // padding
  padding: {
    padding: 10,
  },
  paddingVertical: {
    paddingVertical: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  paddingTop: {
    paddingTop: 10,
  },
  paddingRight: {
    paddingRight: 10,
  },
  paddingBottom: {
    paddingBottom: 10,
  },
  paddingLeft: {
    paddingLeft: 10,
  },

  paddingLg: {
    padding: 15,
  },
  paddingXl: {
    padding: 20,
  },
};