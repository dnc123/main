import {eventBusKeyModalClose} from '../constants';
import {useEventBus} from '../composables/useEventBus';

const {busEmit} = useEventBus();

export default function () {
	busEmit(eventBusKeyModalClose);
};
