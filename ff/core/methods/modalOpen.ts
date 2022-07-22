import {useEventBus} from '../../../features/core/composables/useEventBus';
import {eventBusKeyModalOpen} from '../constants';

const {busEmit} = useEventBus();

export default function (
	contentComponentName: string,
	title: string,
	data?: any,
) {
	busEmit(eventBusKeyModalOpen, {
		contentComponentName,
		title,
		data,
	});
};
