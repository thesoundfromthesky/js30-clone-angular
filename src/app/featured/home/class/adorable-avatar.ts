
import { environment } from "src/environments/environment";
import { getRandomInt } from 'src/app/class/util';

const AVATAR_URL: string = "https://api.adorable.io/avatars/285";
//https://api.adorable.io/avatars/285/identifier.png

export function generateAdorableUrl(): string {
  if (environment.production) {
    const randomId: number = getRandomInt(1000000);
    return `${AVATAR_URL}/${randomId}.png`;
  } else return `${AVATAR_URL}/${1}.png`;
}

const LOREMFLICKR_URL: string = "https://loremflickr.com/320/240/paris";
//https://loremflickr.com/320/240/paris?random=

export function generateLoremFlickrUrl(): string {
  if (environment.production) {
    const randomId: number = getRandomInt(1000000);
    return `${LOREMFLICKR_URL}?random=${randomId}`;
  } else return `${LOREMFLICKR_URL}`;
}
