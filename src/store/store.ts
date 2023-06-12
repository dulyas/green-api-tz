import { makeAutoObservable } from "mobx";

export default class Store {

    private _isLoading: boolean = true

    private _idInstance: string = ''
    private _apiTokenInstance: string = ''


    constructor() {
        makeAutoObservable(this)
    }

    get isLoading() {
        return this._isLoading
    }

    set isLoading(value: boolean) {
        this._isLoading = value
    }

    get idInstance()  {
        return this._idInstance
    }

    set idInstance(value:string) {
        this._idInstance = value
    }

    get apiTokenInstance() {
        return this._apiTokenInstance
    }

    set apiTokenInstance(value: string) {
        this._apiTokenInstance = value
    }
}