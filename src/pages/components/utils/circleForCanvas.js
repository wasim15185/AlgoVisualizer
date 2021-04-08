function circle(ctx) {
	class Circle {
		radius = window.innerHeight / 160;
		nodeValue = null;

		constructor(x, y, color, nodeName) {
			this.x = this.scaleX(x);
			this.y = this.scaleY(y);
			this.nodeName = nodeName;
			this.color = color;
		}

		draw() {
			ctx.beginPath();
			//Text inside Circle
			//This Style for Text which styled the text middle of cicle
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			//This is Text inside Circle
			// ctx.fillText(this.nodeName, this.x, this.y);

			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

			ctx.fillStyle = this.color;
			ctx.closePath();
			ctx.fill();

			//  ctx.strokeStyle = this.color;
			// ctx.closePath();
			// ctx.stroke();
		}

		// scaleX and scaleY is calculate value X and Y posprosotinal of the canvas height and width
		// this is besically calculating X and Y value corrosponding the canvas height and width
		scaleX(xVal) {
			return xVal * (window.innerWidth / 1550);
		}

		scaleY(yVal) {
			return yVal * (window.innerHeight / 722);
		}

		setNodeValue(val) {
			this.nodeValue = val;
		}

		click(
			mouseX,
			mouseY,
			arrowPointerName,
			setStartLocation,
			setFinishLocation
		) {
			// distance -> distance between 'Clicked Mouse point' and 'Center of the Circle'
			let distance = this.getDistance(mouseX, mouseY);

			// if calculated distance between 'Clicked Mouse point' and 'Center of the Circle is less than equal to Circle Radius then You clicked on Circle'

			if (distance <= this.radius) {
				if (arrowPointerName === "startArrow") {
					setStartLocation(this.nodeName.toUpperCase());
				}

				if (arrowPointerName === "endArrow") {
					setFinishLocation(this.nodeName.toUpperCase());
				}
			}
		}
		// this for calculation distance between 'Clicked Mouse point' and 'Center of the Circle'
		getDistance(mouseX, mouseY) {
			return Math.sqrt(
				(mouseX - this.x) * (mouseX - this.x) +
					(mouseY - this.y) * (mouseY - this.y)
			);
		}

		setColor(colorName) {
			this.radius = window.innerHeight / 100;
			this.color = colorName;
			this.draw();
		}
	}

	return Circle;
}

export default circle;
