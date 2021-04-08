import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// This For Customize 'SLIDER'

const PrettoSlider = withStyles({
	root: {
		color: "#7625e4",
		height: 8,
	},
	thumb: {
		height: 16,
		width: 16,
		backgroundColor: "#fff",
		border: "2px solid currentColor",
		marginTop: -5.5,
		marginLeft: -10,
		"&:focus, &:hover, &$active": {
			boxShadow: "inherit",
		},
	},
	active: {},
	valueLabel: {
		left: "calc(-50% + 4px)",
	},
	track: {
		height: 6,
		borderRadius: 4,
	},
	rail: {
		height: 6,
		borderRadius: 4,
	},
})(Slider);

export default PrettoSlider;
