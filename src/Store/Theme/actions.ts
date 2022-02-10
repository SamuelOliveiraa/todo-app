export const actions = {
  TOGGLE_THEME: "TOGGLE_THEME",
};
export function TOGGLE_THEME(theme: boolean) {
  return {
    type: actions.TOGGLE_THEME,
    payload: theme,
  };
}
