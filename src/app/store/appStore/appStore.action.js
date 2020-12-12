import {appStoreActiontype} from './appStore.actiontype';

export const appConst_init = () => ({
  type: appStoreActiontype.APPCONSTANT_INIT
});

export const appConstSuccess = (appConst) => ({
  type: appStoreActiontype.APPCONSTANT_SUCCESS,
  payload: appConst
});

export const appConstOnLogout = () => ({
  type: appStoreActiontype.APPCONSTANT_ONLOGOUT
});

export const appMenuChange = (menuData) => ({
  type: appStoreActiontype.APP_MENU_CHANGE,
  payload: menuData
})
export const appMenuReset = () => ({
  type: appStoreActiontype.APP_MENU_RESET
})