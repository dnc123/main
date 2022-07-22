import { ONE_METER_IN_DEGREES } from './constants';
export default function (latitude, longitude, metersToAdd) {
    return longitude + (metersToAdd * ONE_METER_IN_DEGREES) / Math.cos(latitude * (Math.PI / 180));
}
