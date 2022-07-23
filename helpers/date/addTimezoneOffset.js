import { subMinutes } from 'date-fns';
export default function (targetDate) {
    return subMinutes(targetDate, targetDate.getTimezoneOffset());
}
