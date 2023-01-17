import {extendObservable} from "mobx";

class DataStorage {
    constructor() {

        extendObservable(this, {

            //dane kontakowe
            email: [],
            numer: [],
            adres: [],

            //dane osobowe
            imie: [],
            nazwisko: [],
            plec: [],
            data_urodzenia: [],


            //dane do pakietow
            pakiet_nazwa: [],
            opis: ['opis1', 'opis2', 'opis3', 'opis4', 'opis5', 'opis6'],
            cena: [10, 20, 30, 40, 50, 60],

            //dane do placowek
            placowki_krakow_nazwa: ['nazwa1', 'nazwa2'],
            placowki_warszawa_nazwa: ['nazwa3', 'nazwa4'],
            placowki_krakow_ulica: ['ulica1', 'ulica2'],
            placowki_warszawa_ulica: ['ulica3', 'ulica4'],
            souna_krakow: [1, 1],
            souna_warszawa: [0, 1],
            
        });
    }
}

export default DataStorage;