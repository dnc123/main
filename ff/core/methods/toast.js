import generateUnique from '../../../helpers/string/generateUnique';
import { eventBusKeyToastRemove, eventButKeyToastCreate } from '../constants';
import { useEventBus } from '../../../features/core/composables/useEventBus';
const { busEmit } = useEventBus();
export default function (payload) {
    const newToastID = generateUnique();
    busEmit(eventButKeyToastCreate, {
        ...payload,
        ID: newToastID,
    });
    setTimeout(() => {
        busEmit(eventBusKeyToastRemove, newToastID);
    }, 2000 + payload.message.length * 180);
}
;
