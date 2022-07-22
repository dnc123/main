export default function (
	to: string,
	icon: string,
	iconSizePx: number,
	name: string,
	textMarginTopREM = 0,
) {
	return {
		to,
		icon,
		iconSizePx,
		name,
		textMarginTopREM,
	};
};
