import generateUnique from '../../../helpers/string/generateUnique';
import {eventBusKeyToastRemove, eventButKeyToastCreate} from '../constants';
import {useEventBus} from '../composables/useEventBus';

type ToastType = 'danger' | 'success' | 'neutral';

type Payload = {
	type: ToastType;
	icon: string;
	message: string;
};

const {busEmit} = useEventBus();

export default function (payload: Payload) {
	const newToastID = generateUnique();

	busEmit(eventButKeyToastCreate, {
		...payload,
		ID: newToastID,
	});

	setTimeout(() => {
		busEmit(eventBusKeyToastRemove, newToastID);
	}, 2000 + payload.message.length * 180);
};
