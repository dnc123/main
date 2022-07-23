import { ONE_METER_IN_DEGREES } from './constants';
export default function (latitude, metersToAdd) {
    return latitude + (metersToAdd * ONE_METER_IN_DEGREES);
}
