import { useState } from "react";

const useToggler = (arg) => {
	const [value, setValue] = useState(arg);

	const setToggle = () => {
		setValue(!value);
	};

	return [value, setToggle];
};

export default useToggler;
