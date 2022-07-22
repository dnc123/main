import { eventBusKeyModalClose } from '../constants';
import { useEventBus } from '../../../features/core/composables/useEventBus';
const { busEmit } = useEventBus();
export default function () {
    busEmit(eventBusKeyModalClose);
}
;
