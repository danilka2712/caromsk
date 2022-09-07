import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		increment: () => update(n => n = !n),
	};
}

export const open = createCount();