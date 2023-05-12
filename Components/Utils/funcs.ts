import { pointer } from "../Home/pointerData"
export const Find = (arg: Array<pointer>, id: string): pointer | undefined => {
	const found = arg.find((el) => el.id === id);
	return found;
};