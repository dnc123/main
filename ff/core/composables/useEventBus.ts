import {reactive} from 'vue';

type KeyFunctionObject = {
	[key: string]: Function[];
}

export function useEventBus () {
	const subscribers: KeyFunctionObject = reactive({});
	const subscribersOnce: KeyFunctionObject = reactive({});

	function busEmit (key: string, payload?: any) {
		if (subscribersOnce[key]) {
			subscribersOnce[key].forEach((subscriberCallback: Function) => {
				subscriberCallback(payload);
			});

			subscribersOnce[key] = [];
		}

		if (subscribers[key]) {
			subscribers[key].forEach((subscriberCallback: Function) => {
				subscriberCallback(payload);
			});
		}
	}

	function busOn (key: string, callback: Function) {
		subscribers[key] = !!subscribers[key]
			? [...subscribers[key], callback]
			: subscribers[key] = [callback];
	}

	function busOnce (key: string, callback: Function) {
		subscribersOnce[key] = !!subscribersOnce[key]
			? [...subscribersOnce[key], callback]
			: subscribersOnce[key] = [callback];
	}

	function busOff (key: string, callback: Function) {
		if (subscribersOnce[key]) {
			subscribersOnce[key] = subscribersOnce[key].filter((subscriberCallback: Function) => {
				return subscriberCallback.toString() === callback.toString();
			});
		}

		if (subscribers[key]) {
			subscribers[key] = subscribers[key].filter((subscriberCallback: Function) => {
				return subscriberCallback.toString() !== callback.toString();
			});
		}
	}

	return {
		busEmit,
		busOn,
		busOff,
		busOnce,
	};
}
