import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    theme: 'dark',
    whiteBelt: false,
    yellowBelt: false,
    orangeBelt: false,
    blueBelt: false,
    greenBelt: false,
    redBelt: false,
    blackBelt: false,
}

function switchTheme(theme){
    if(theme === 'dark'){
            document.documentElement.style.setProperty('--color-background-1', '#fff');
            document.documentElement.style.setProperty('--color-background-4', '#f1f1f1');
            document.documentElement.style.setProperty('--color-background-2', '#fff');
            document.documentElement.style.setProperty('--color-background-3', '#F5487F');
            document.documentElement.style.setProperty('--color-text', '#151b2e');
            document.documentElement.style.setProperty('--color-text-light', '#7794FF');
            document.documentElement.style.setProperty('--color-heading', '#7794FF');
            document.documentElement.style.setProperty('--color-heading-black','#7794FF');
            document.documentElement.style.setProperty('--color-accent', '#ff91b4');
        } else {
            document.documentElement.style.setProperty('--color-background-1', '#151b2e');
            document.documentElement.style.setProperty('--color-background-4', '#19213a');
            document.documentElement.style.setProperty('--color-background-2', '#553772');
            document.documentElement.style.setProperty('--color-background-3', '#18244e');
            document.documentElement.style.setProperty('--color-text', '#fff');
            document.documentElement.style.setProperty(' --color-text-light', '#7794FF');
            document.documentElement.style.setProperty('--color-heading', '#F5487F');
            document.documentElement.style.setProperty('--color-heading-black','#7794FF');
            document.documentElement.style.setProperty('--color-accent', '#7794FF');
        }
return theme === 'light' ? 'dark' : 'light';
}
function reducer(state, action){
    switch (action.type) {
        case "TOGGLE_THEME":{
            return{
                ...state,
                theme: switchTheme(state.theme)
    
            }
        }
        case "HAS_GOTTEN_WHITE_BELT":{
            return{
                ...state,
                theme: state.whiteBelt === true
            }
        }
        case "HAS_GOTTEN_YELLOW_BELT":{
            return{
                ...state,
                theme: state.yellowBelt === true
            }
        }
        case "HAS_GOTTEN_ORANGE_BELT":{
            return{
                ...state,
                theme: state.orangeBelt === true
            }
        }
        case "HAS_GOTTEN_BLUE_BELT":{
            return{
                ...state,
                theme: state.blueBelt === true
            }
        }
        case "HAS_GOTTEN_GREEN_BELT":{
            return{
                ...state,
                theme: state.greenBelt === true
            }
        }
        case "HAS_GOTTEN_RED_BELT":{
            return{
                ...state,
                theme: state.redBelt === true
            }
        }
        case "HAS_GOTTEN_BLACK_BELT":{
            return{
                ...state,
                theme: state.blackBelt === true
            }
        }
        default:
            throw new Error('back Action type')
    }
}

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
        )
}

export default GlobalContextProvider;