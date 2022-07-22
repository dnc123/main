import { useEventBus } from '../composables/useEventBus';
import { eventBusKeyModalOpen } from '../constants';
const { busEmit } = useEventBus();
export default function (contentComponentName, title, data) {
    busEmit(eventBusKeyModalOpen, {
        contentComponentName,
        title,
        data,
    });
}
;
