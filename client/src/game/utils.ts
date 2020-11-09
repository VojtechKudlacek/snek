export const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number => {
	const xDistance = Math.abs(x1 - x2);
	const yDistance = Math.abs(y1 - y2);
	return xDistance + yDistance;
}
