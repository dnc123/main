import { addMinutes } from 'date-fns';
export default function (targetDate) {
    return addMinutes(targetDate, targetDate.getTimezoneOffset());
}
