import {ref} from 'vue';

const map = ref(null);

export function useMap () {
	function setMap (newMap) {
		map.value = newMap;
	}

	return {
		map,
		setMap,
	};
}
