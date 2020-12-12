import {appStoreActiontype} from './appStore.actiontype';

const INIT_STATE = {
  globalConstants:{},
  userAuditLogs :[],
  userTypes:[],
  frtModules:[],
  interMenu: false,
  interSectionName: undefined ,
  interMenuName: undefined,
  interMenuURL: '',
  metaData: undefined, //this meta data is used on menu change
  backUrl: '/'
}


const appDataReducer = (state= INIT_STATE, {type, payload}) => {
  switch(type) {
    case appStoreActiontype.APPCONSTANT_SUCCESS:
      return Object.assign({}, state, {
        globalConstants : payload
      });
    case appStoreActiontype.APPCONSTANT_ONLOGOUT:
      return INIT_STATE
    case appStoreActiontype.APP_MENU_CHANGE:
      return {...state,
        interMenu: true, 
        interMenuName: payload.menuName, 
        interSectionName: payload.sectionName, 
        interMenuURL: payload.menuURL, 
        backUrl: payload.backUrl, 
        metaData: payload.metaData
      }
    case appStoreActiontype.APP_MENU_RESET:
      return {...state, interMenu: false, interSectionName: undefined, interMenuName: undefined, interMenuURL: '', backUrl: '/'}
    default:
      return state
  }
}

export default appDataReducer;