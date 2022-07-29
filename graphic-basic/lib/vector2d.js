export class Vector2D extends Array {
	constructor(x = 1, y = 0) {
		super(x, y);
	}

	set x(value) {
		this[0] = value;
	}

	get x() {
		return this[0];
	}

	set y(value) {
		this[1] = value;
	}

	get y() {
		return this[1];
	}

	get length() {
		return Math.hypot(this.x, this.y);
	}

	get direction() {
		return Math.atan2(this.y, this.x);
	}

	copy() {
		return new Vector2D(this.x, this.y);
	}

	add(value) {
		this.x += value.x;
		this.y += value.y;
		return this;
	}

	sub(value) {
		this.x -= value.x;
		this.y -= value.y;
		return this;
	}

	scale(a) {
		this.x *= a;
		this.y *= a;
		return this;
	}

	cross(v) {
		return this.x * v.y - v.x * this.y;
	}

	dot(v) {
		return this.x * v.x + v.y * this.y;
	}

	normalize() {
		return this.scale(1 / this.length);
	}

	rotate(radius) {
		const c = Math.cos(radius);
		const s = Math.sin(radius);
		const [x, y] = this;

		this.x = x * c + y * -s;
		this.y = x * s + y * c;

		return this;
	}
}
