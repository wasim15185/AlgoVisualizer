function line(ctx) {
	class Line {
		color = "#e65440";
		lineWidth = 1;
		constructor(from, to) {
			this.from = from;
			this.to = to;
			this.value = this.weight();
		}

		draw() {
			ctx.beginPath();
			ctx.moveTo(this.scaleX(this.from.x), this.scaleY(this.from.y));
			ctx.lineTo(this.scaleX(this.to.x), this.scaleY(this.to.y));
			ctx.strokeStyle = this.color;
			ctx.lineWidth = this.lineWidth;
			ctx.stroke();
		}

		scaleX(xVal) {
			return xVal * (window.innerWidth / 1550);
		}

		scaleY(yVal) {
			return yVal * (window.innerHeight / 722);
		}

		setColor(colorName) {
			this.color = colorName;
			this.lineWidth = 2;
			this.draw();
		}

		// calculating length of lines
		weight() {
			const distanceX = Math.floor(
				this.scaleX(this.to.x) - this.scaleX(this.from.x)
			);
			const distanceY = Math.floor(
				this.scaleY(this.to.y) - this.scaleY(this.from.y)
			);

			return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
		}
	}

	return Line;
}

export default line;
