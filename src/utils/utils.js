export const correctlyName = name => /\d/.test(name);
export const correctlyCard = card => {
	if (!/[a-zA-Z]/.test(card)) {
		const regex = /^\d{4} \d{4} \d{4} \d{4}$/;
		return regex.test(card);
	}
};
export const correctlyDate = date => {
	if (date.length !== 2) {
		return true;
	} else if (date.length === 2) {
		if (/\d/.test(date)) {
			return false;
		} else {
			return true;
		}
	}
};

export const correctlyCVC = cvc => {
	if (cvc.length !== 3) {
		return true;
	} else if (cvc.length === 3) {
		if (/\d/.test(cvc)) {
			return false;
		} else {
			return true;
		}
	}
};
