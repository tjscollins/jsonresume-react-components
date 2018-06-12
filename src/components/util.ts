import addressFormat from 'address-format';
import * as moment from 'moment';

import { Location } from './types';

export function emailLink(email: string): string {
    return `mailto:${email}`;
}

export function removeProtocol(url: string): string {
    return url.replace(/.*?:\/\//g, '');
}

export function notEmail(url: string): boolean {
    return url.slice(0,6) !== "mailto";
}


export function formatAddress(location: Location): string {
    const { address, city, region, postalCode, countryCode }  = location;
    const addressList = addressFormat({
        address,
        city,
        countryCode,
        postalCode,
        subdivision: region,
    });
    return addressList.join('<br/>');
}

export function concat(...args: string[]) {
    let res = '';

    for(const arg in args){
        if (typeof args[arg] !== 'object') {
            res += args[arg];
        }
    }

    return res;
};

export function formatDate(date: string): string {
    return moment(date).format('MM/YYYY');
}