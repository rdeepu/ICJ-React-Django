import {createStore,combineReducers} from 'redux'

interface ISetEnglish{
    type:'SET_ENGLISH'
    payload: string
}
interface ISetDeutsch{
    type:'SET_DEUTSCH'
    payload:string
}
export type TSetLang= |ISetEnglish|ISetDeutsch

type langState = {
    lang:string
}

const InitialLang:langState={
    lang:'ENG'
}

const LangReducer = (state:langState=InitialLang,action:TSetLang)=>{
    switch(action.type){
        case 'SET_ENGLISH':
         return {...state, lang:action.payload}
        case 'SET_DEUTSCH':
         return {...state, lang:action.payload}
        default:
         return state         
    }   

}

interface ISetFntSzeA{
    type:'FNTSZE_A'
    payload:number
}
interface ISetFntSzeB{
    type:'FNTSZE_B'
    payload:number
}
interface ISetFntSzeC{
    type:'FNTSZE_C'
    payload:number
}
interface ISetFntSzeD{
    type:'FNTSZE_D'
    payload:number
}

export type TSetFntSze = |ISetFntSzeA|ISetFntSzeB|ISetFntSzeC|ISetFntSzeD

type FntSze = {
    fnt:number
}

const InitialFntSze:FntSze={
  fnt:20
}

const FntReducer=(state:FntSze=InitialFntSze,action:TSetFntSze)=>{
    switch(action.type){
        case 'FNTSZE_A':
            return {...state,fnt:action.payload}
        case 'FNTSZE_B':
            return {...state,fnt:action.payload}
        case 'FNTSZE_C':
            return {...state,fnt:action.payload}
        case 'FNTSZE_D':
            return {...state,fnt:action.payload}
        default:
            return state
    }

}

const rootReducer = combineReducers({
    slctdLang:LangReducer,
    slctdFont:FntReducer
})
export const store = createStore(rootReducer)

export type langStatus = ReturnType<typeof rootReducer>