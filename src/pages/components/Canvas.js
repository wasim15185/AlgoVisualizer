import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import circleFun from "./utils/circleForCanvas";
import lineFun from "./utils/lineForCanvas";
import arrowFun from "./utils/arrowForCanvas";
import dijkstraAlgo from "./utils/algorithms/DijkstraAlgo";

const useStyle = makeStyles({
	canvasStyle: ({ arrowName }) => ({
		marginTop: "10px",
		cursor: arrowName ? "grabbing" : "default",
	}),
});

const Canvas = ({ reload, setArr }) => {
	const canvasRef = useRef(null);
	const [resultArr, setResultArr] = useState([]);
	const [element, elementArr] = useState([]);
	const [arrows, setArrows] = useState([]);
	const [start, setStart] = useState({ x: 10, y: 14.5 });
	const [end, setEnd] = useState({ x: 40, y: 10 });
	const [startLoctionForDijkstra, setStartLocation] = useState(null);
	const [finishLoctionForDijkstra, setFinishLoaction] = useState(null);
	const [dragDeatils, setDragDetails] = useState({
		arrowName: undefined,
	});
	const { canvasStyle } = useStyle(dragDeatils);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight / 1.3;
		canvas.style.width = `${window.innerWidth}px`;
		canvas.style.height = `${window.innerHeight / 1.3}px`;
		canvas.style.background = "#32567a";
		const ctx = canvas.getContext("2d");
		const Circle = circleFun(ctx);
		const Line = lineFun(ctx);
		const Arrow = arrowFun(ctx);

		//LINE drawing
		const ab = new Line({ x: 100, y: 105 }, { x: 160, y: 230 });
		const bc = new Line({ x: 160, y: 230 }, { x: 200, y: 100 });
		const bd = new Line({ x: 160, y: 230 }, { x: 270, y: 100 });
		const be = new Line({ x: 160, y: 230 }, { x: 280, y: 160 });
		const bf = new Line({ x: 160, y: 230 }, { x: 280, y: 200 });
		const bg = new Line({ x: 160, y: 230 }, { x: 150, y: 300 });
		const gj = new Line({ x: 150, y: 300 }, { x: 210, y: 280 });
		const gh = new Line({ x: 150, y: 300 }, { x: 100, y: 290 });
		const hi = new Line({ x: 100, y: 290 }, { x: 80, y: 250 });
		const gk = new Line({ x: 150, y: 300 }, { x: 220, y: 370 });
		const km = new Line({ x: 220, y: 370 }, { x: 225, y: 415 });
		const kl = new Line({ x: 220, y: 370 }, { x: 170, y: 395 });
		const mn = new Line({ x: 225, y: 415 }, { x: 160, y: 450 });
		const no = new Line({ x: 160, y: 450 }, { x: 217, y: 495 });
		const op = new Line({ x: 217, y: 495 }, { x: 300, y: 450 });
		const pq = new Line({ x: 300, y: 450 }, { x: 305, y: 400 });
		const qr = new Line({ x: 305, y: 400 }, { x: 320, y: 350 });
		const rt = new Line({ x: 320, y: 350 }, { x: 300, y: 320 });
		const rs = new Line({ x: 320, y: 350 }, { x: 360, y: 350 });
		const sv = new Line({ x: 360, y: 350 }, { x: 380, y: 220 });
		const su = new Line({ x: 360, y: 350 }, { x: 355, y: 460 });
		const sw = new Line({ x: 360, y: 350 }, { x: 400, y: 330 });
		const sx = new Line({ x: 360, y: 350 }, { x: 420, y: 380 });
		const xy = new Line({ x: 420, y: 380 }, { x: 460, y: 490 });
		const xz = new Line({ x: 420, y: 380 }, { x: 530, y: 100 });

		//-----------------------------------------------------------------------

		const za1 = new Line({ x: 530, y: 100 }, { x: 590, y: 80 });
		const zb1 = new Line({ x: 530, y: 100 }, { x: 470, y: 100 });
		const b1c1 = new Line({ x: 470, y: 100 }, { x: 410, y: 90 });
		const zh1 = new Line({ x: 530, y: 100 }, { x: 560, y: 160 });
		const h1m1 = new Line({ x: 560, y: 160 }, { x: 555, y: 240 });
		const h1i1 = new Line({ x: 560, y: 160 }, { x: 620, y: 190 });
		const h1f1 = new Line({ x: 560, y: 160 }, { x: 630, y: 115 });
		const f1e1 = new Line({ x: 630, y: 115 }, { x: 800, y: 105 });
		const f1d1 = new Line({ x: 630, y: 115 }, { x: 660, y: 60 });
		const i1g1 = new Line({ x: 620, y: 190 }, { x: 690, y: 150 });
		const g1j1 = new Line({ x: 690, y: 150 }, { x: 710, y: 210 });
		const j1k1 = new Line({ x: 710, y: 210 }, { x: 740, y: 260 });
		const j1l1 = new Line({ x: 710, y: 210 }, { x: 650, y: 300 });

		const k1p1 = new Line({ x: 740, y: 260 }, { x: 810, y: 280 });
		const l1q1 = new Line({ x: 650, y: 300 }, { x: 625, y: 370 });
		const l1n1 = new Line({ x: 650, y: 300 }, { x: 710, y: 330 });
		const n1s1 = new Line({ x: 710, y: 330 }, { x: 675, y: 420 });
		const s1w1 = new Line({ x: 675, y: 420 }, { x: 605, y: 440 });
		const n1o1 = new Line({ x: 710, y: 330 }, { x: 770, y: 315 });
		const o1r1 = new Line({ x: 770, y: 315 }, { x: 745, y: 400 });
		const r1v1 = new Line({ x: 745, y: 400 }, { x: 710, y: 470 });
		const v1x1 = new Line({ x: 710, y: 470 }, { x: 775, y: 510 });
		const r1t1 = new Line({ x: 745, y: 400 }, { x: 765, y: 450 });
		const t1u1 = new Line({ x: 765, y: 450 }, { x: 840, y: 480 });
		const y1z1 = new Line({ x: 860, y: 425 }, { x: 870, y: 365 });
		const u1h2 = new Line({ x: 840, y: 480 }, { x: 920, y: 450 });

		const z1a2 = new Line({ x: 870, y: 365 }, { x: 890, y: 300 });
		const a2d2 = new Line({ x: 890, y: 300 }, { x: 940, y: 225 });
		const p1b2 = new Line({ x: 810, y: 280 }, { x: 850, y: 220 });
		const b2c2 = new Line({ x: 850, y: 220 }, { x: 900, y: 150 });
		const c2d2 = new Line({ x: 900, y: 150 }, { x: 940, y: 225 });
		const y1h2 = new Line({ x: 860, y: 425 }, { x: 920, y: 450 });
		const d2e2 = new Line({ x: 940, y: 225 }, { x: 960, y: 280 });
		const d2q2 = new Line({ x: 940, y: 225 }, { x: 1030, y: 195 });
		const z1g2 = new Line({ x: 870, y: 365 }, { x: 950, y: 395 });
		const h2i2 = new Line({ x: 920, y: 450 }, { x: 970, y: 500 });
		const i2j2 = new Line({ x: 970, y: 500 }, { x: 1020, y: 470 });
		const j2k2 = new Line({ x: 1020, y: 470 }, { x: 1050, y: 440 });
		const m2f2 = new Line({ x: 1070, y: 330 }, { x: 1010, y: 360 });
		const k2m2 = new Line({ x: 1050, y: 440 }, { x: 1070, y: 330 });
		const k2l2 = new Line({ x: 1050, y: 440 }, { x: 1100, y: 405 });
		const l2y2 = new Line({ x: 1100, y: 405 }, { x: 1120, y: 460 });
		const y2x2 = new Line({ x: 1120, y: 460 }, { x: 1200, y: 400 });
		const x2z2 = new Line({ x: 1200, y: 400 }, { x: 1180, y: 500 });
		const n2m2 = new Line({ x: 1130, y: 290 }, { x: 1070, y: 330 });
		const n2w2 = new Line({ x: 1130, y: 290 }, { x: 1230, y: 330 });
		const n2p2 = new Line({ x: 1130, y: 290 }, { x: 1140, y: 200 });
		const p2o2 = new Line({ x: 1140, y: 200 }, { x: 1050, y: 240 });
		const p2t2 = new Line({ x: 1140, y: 200 }, { x: 1240, y: 190 });
		const q2r2 = new Line({ x: 1030, y: 195 }, { x: 1070, y: 90 });
		const r2s2 = new Line({ x: 1070, y: 90 }, { x: 1160, y: 110 });
		const s2p2 = new Line({ x: 1160, y: 110 }, { x: 1140, y: 200 });
		const p2u2 = new Line({ x: 1140, y: 200 }, { x: 1300, y: 240 });
		const u2v2 = new Line({ x: 1300, y: 240 }, { x: 1350, y: 200 });

		//Extra Line

		const yq1 = new Line({ x: 460, y: 490 }, { x: 625, y: 370 });
		const vw = new Line({ x: 380, y: 220 }, { x: 400, y: 330 });
		const wx = new Line({ x: 400, y: 330 }, { x: 420, y: 380 });
		const a2e2 = new Line({ x: 890, y: 300 }, { x: 960, y: 280 });
		const e2g2 = new Line({ x: 960, y: 280 }, { x: 950, y: 395 });
		const g2o2 = new Line({ x: 950, y: 395 }, { x: 1050, y: 240 });
		const q1w1 = new Line({ x: 625, y: 370 }, { x: 605, y: 440 });
		const q1s1 = new Line({ x: 625, y: 370 }, { x: 675, y: 420 });
		const ml = new Line({ x: 225, y: 415 }, { x: 170, y: 395 });
		const bi = new Line({ x: 160, y: 230 }, { x: 80, y: 250 });
		const bj = new Line({ x: 160, y: 230 }, { x: 210, y: 280 });
		const hl = new Line({ x: 100, y: 290 }, { x: 170, y: 395 });
		const jq = new Line({ x: 210, y: 280 }, { x: 305, y: 400 });
		const kq = new Line({ x: 220, y: 370 }, { x: 305, y: 400 });
		const ai = new Line({ x: 100, y: 105 }, { x: 80, y: 250 });
		const de = new Line({ x: 270, y: 100 }, { x: 280, y: 160 });
		const fb1 = new Line({ x: 280, y: 200 }, { x: 470, y: 100 });
		const xm1 = new Line({ x: 420, y: 380 }, { x: 555, y: 240 });
		const xl1 = new Line({ x: 420, y: 380 }, { x: 650, y: 300 });
		const a1f1 = new Line({ x: 590, y: 80 }, { x: 630, y: 115 });
		const f1g1 = new Line({ x: 630, y: 115 }, { x: 690, y: 150 });
		const x1u1 = new Line({ x: 775, y: 510 }, { x: 840, y: 480 });
		const r1y1 = new Line({ x: 745, y: 400 }, { x: 860, y: 425 });
		const r1z1 = new Line({ x: 745, y: 400 }, { x: 870, y: 365 });
		const t1y1 = new Line({ x: 765, y: 450 }, { x: 860, y: 425 });
		const s1v1 = new Line({ x: 675, y: 420 }, { x: 710, y: 470 });
		const f2j2 = new Line({ x: 1010, y: 360 }, { x: 1020, y: 470 });
		const k2y2 = new Line({ x: 1050, y: 440 }, { x: 1120, y: 460 });

		//------------------------------------------------------------------

		const lines = [
			k2y2,
			f2j2,
			s1v1,
			r1y1,
			r1z1,
			t1y1,
			x1u1,
			f1g1,
			a1f1,
			xm1,
			xl1,
			fb1,
			ai,
			de,
			kq,
			jq,
			hl,
			bj,
			bi,
			ml,
			q1s1,
			q1w1,
			g2o2,
			e2g2,
			a2e2,
			wx,
			vw,
			yq1,
			u2v2,
			p2u2,
			s2p2,
			r2s2,
			q2r2,
			p2o2,
			p2t2,
			n2p2,
			x2z2,
			n2w2,
			n2m2,
			y2x2,
			l2y2,
			m2f2,
			k2l2,
			k2m2,
			j2k2,
			i2j2,
			h2i2,
			z1g2,
			d2q2,
			d2e2,
			y1h2,
			y1z1,
			z1a2,
			c2d2,
			b2c2,
			u1h2,
			p1b2,
			a2d2,
			r1t1,
			t1u1,
			v1x1,
			r1v1,
			n1o1,
			o1r1,
			s1w1,
			n1s1,
			l1n1,
			k1p1,
			l1q1,
			j1l1,
			j1k1,
			g1j1,
			i1g1,
			f1e1,
			f1d1,
			h1f1,
			h1i1,
			h1m1,
			zh1,
			za1,
			zb1,
			b1c1,
			ab,
			bc,
			bd,
			be,
			bf,
			bg,
			gj,
			gh,
			hi,
			gk,
			km,
			kl,
			mn,
			no,
			op,
			pq,
			qr,
			rt,
			rs,
			sv,
			su,
			sw,
			sx,
			xy,
			xz,
			za1,
		];

		//Circle drawing

		const circleColor = "#f1f1f1";

		const a = new Circle(100, 105, circleColor, "a");
		const b = new Circle(160, 230, circleColor, "b");
		const c = new Circle(200, 100, circleColor, "c");
		const d = new Circle(270, 100, circleColor, "d");
		const e = new Circle(280, 160, circleColor, "e");
		const f = new Circle(280, 200, circleColor, "f");
		const g = new Circle(150, 300, circleColor, "g");
		const h = new Circle(100, 290, circleColor, "h");
		const i = new Circle(80, 250, circleColor, "i");
		const j = new Circle(210, 280, circleColor, "j");
		const k = new Circle(220, 370, circleColor, "k");
		const l = new Circle(170, 395, circleColor, "l");
		const m = new Circle(225, 415, circleColor, "m");
		const n = new Circle(160, 450, circleColor, "n");
		const o = new Circle(217, 495, circleColor, "o");
		const p = new Circle(300, 450, circleColor, "p");
		const q = new Circle(305, 400, circleColor, "q");
		const r = new Circle(320, 350, circleColor, "r");
		const s = new Circle(360, 350, circleColor, "s");
		const t = new Circle(300, 320, circleColor, "t");
		const u = new Circle(355, 460, circleColor, "u");
		const v = new Circle(380, 220, circleColor, "v");
		const w = new Circle(400, 330, circleColor, "w");
		const x = new Circle(420, 380, circleColor, "x");
		const y = new Circle(460, 490, circleColor, "y");
		const z = new Circle(530, 100, circleColor, "z");

		//------------------- -----------------------------------------

		const a1 = new Circle(590, 80, circleColor, "a1");
		const b1 = new Circle(470, 100, circleColor, "b1");
		const c1 = new Circle(410, 90, circleColor, "c1");
		const d1 = new Circle(660, 60, circleColor, "d1");
		const e1 = new Circle(800, 105, circleColor, "e1");
		const f1 = new Circle(630, 115, circleColor, "f1");
		const g1 = new Circle(690, 150, circleColor, "g1");
		const h1 = new Circle(560, 160, circleColor, "h1");
		const i1 = new Circle(620, 190, circleColor, "i1");
		const j1 = new Circle(710, 210, circleColor, "j1");
		const k1 = new Circle(740, 260, circleColor, "k1");
		const l1 = new Circle(650, 300, circleColor, "l1");
		const m1 = new Circle(555, 240, circleColor, "m1");
		const n1 = new Circle(710, 330, circleColor, "n1");
		const o1 = new Circle(770, 315, circleColor, "o1");
		const p1 = new Circle(810, 280, circleColor, "p1");
		const q1 = new Circle(625, 370, circleColor, "q1");
		const r1 = new Circle(745, 400, circleColor, "r1");
		const s1 = new Circle(675, 420, circleColor, "s1");
		const t1 = new Circle(765, 450, circleColor, "t1");
		const u1 = new Circle(840, 480, circleColor, "u1");
		const v1 = new Circle(710, 470, circleColor, "v1");
		const w1 = new Circle(605, 440, circleColor, "w1");
		const x1 = new Circle(775, 510, circleColor, "x1");
		const y1 = new Circle(860, 425, circleColor, "y1");
		const z1 = new Circle(870, 365, circleColor, "z1");
		//---------------------a2-z2---------------------------
		const a2 = new Circle(890, 300, circleColor, "a2");
		const b2 = new Circle(850, 220, circleColor, "b2");
		const c2 = new Circle(900, 150, circleColor, "c2");
		const d2 = new Circle(940, 225, circleColor, "d2");
		const e2 = new Circle(960, 280, circleColor, "e2");
		const f2 = new Circle(1010, 360, circleColor, "f2");
		const g2 = new Circle(950, 395, circleColor, "g2");
		const h2 = new Circle(920, 450, circleColor, "h2");
		const i2 = new Circle(970, 500, circleColor, "i2");
		const j2 = new Circle(1020, 470, circleColor, "j2");
		const k2 = new Circle(1050, 440, circleColor, "k2");
		const l2 = new Circle(1100, 405, circleColor, "l2");
		const m2 = new Circle(1070, 330, circleColor, "m2");
		const n2 = new Circle(1130, 290, circleColor, "n2");
		const o2 = new Circle(1050, 240, circleColor, "o2");
		const p2 = new Circle(1140, 200, circleColor, "p2");
		const q2 = new Circle(1030, 195, circleColor, "q2");
		const r2 = new Circle(1070, 90, circleColor, "r2");
		const s2 = new Circle(1160, 110, circleColor, "s2");
		const t2 = new Circle(1240, 190, circleColor, "t2");
		const u2 = new Circle(1300, 240, circleColor, "u2");
		const v2 = new Circle(1350, 200, circleColor, "v2");
		const w2 = new Circle(1230, 330, circleColor, "w2");
		const x2 = new Circle(1200, 400, circleColor, "x2");
		const y2 = new Circle(1120, 460, circleColor, "y2");
		const z2 = new Circle(1180, 500, circleColor, "z2");

		//------------------------------------------------------------------------

		const circles = [
			a,
			b,
			c,
			d,
			e,
			f,
			g,
			h,
			i,
			j,
			k,
			l,
			m,
			n,
			o,
			p,
			q,
			r,
			s,
			t,
			u,
			v,
			w,
			x,
			y,
			z,
			a1,
			b1,
			c1,
			d1,
			e1,
			f1,
			g1,
			h1,
			i1,
			j1,
			k1,
			l1,
			m1,
			n1,
			o1,
			p1,
			q1,
			r1,
			s1,
			t1,
			u1,
			v1,
			w1,
			x1,
			y1,
			z1,

			a2,
			b2,
			c2,
			d2,
			e2,
			f2,
			g2,
			h2,
			i2,
			j2,
			k2,
			l2,
			m2,
			n2,
			o2,
			p2,
			q2,
			r2,
			s2,
			t2,
			u2,
			v2,
			w2,
			x2,
			y2,
			z2,
		];

		//drawing Lines
		lines.forEach((x) => x.draw());
		//drawing the circle
		circles.forEach((x) => x.draw());

		//Creating Arrow Objects
		let fisrtArrow = new Arrow(16, "#16fb04", "startArrow");
		let lastArrow = new Arrow(20, "red", "endArrow");

		fisrtArrow.move(start.x, start.y);
		lastArrow.move(end.x, end.y);

		setArrows([fisrtArrow, lastArrow]);

		elementArr(circles);

		//lines.forEach((x) => console.log(x.weight()));

		const Graph = dijkstraAlgo();
		const graph = new Graph();

		//add Vertex

		graph.addVartex("A");
		graph.addVartex("B");
		graph.addVartex("C");
		graph.addVartex("D");
		graph.addVartex("E");
		graph.addVartex("F");
		graph.addVartex("G");
		graph.addVartex("H");
		graph.addVartex("I");
		graph.addVartex("J");
		graph.addVartex("K");
		graph.addVartex("L");
		graph.addVartex("M");
		graph.addVartex("N");
		graph.addVartex("O");
		graph.addVartex("P");
		graph.addVartex("Q");
		graph.addVartex("R");
		graph.addVartex("S");
		graph.addVartex("T");
		graph.addVartex("U");
		graph.addVartex("V");
		graph.addVartex("W");
		graph.addVartex("X");
		graph.addVartex("Y");
		graph.addVartex("Z");

		graph.addVartex("A1");
		graph.addVartex("B1");
		graph.addVartex("C1");
		graph.addVartex("D1");
		graph.addVartex("E1");
		graph.addVartex("F1");
		graph.addVartex("G1");
		graph.addVartex("H1");
		graph.addVartex("I1");
		graph.addVartex("J1");
		graph.addVartex("K1");
		graph.addVartex("L1");
		graph.addVartex("M1");
		graph.addVartex("N1");
		graph.addVartex("O1");
		graph.addVartex("P1");
		graph.addVartex("Q1");
		graph.addVartex("R1");
		graph.addVartex("S1");
		graph.addVartex("T1");
		graph.addVartex("U1");
		graph.addVartex("V1");
		graph.addVartex("W1");
		graph.addVartex("X1");
		graph.addVartex("Y1");
		graph.addVartex("Z1");

		graph.addVartex("A2");
		graph.addVartex("B2");
		graph.addVartex("C2");
		graph.addVartex("D2");
		graph.addVartex("E2");
		graph.addVartex("F2");
		graph.addVartex("G2");
		graph.addVartex("H2");
		graph.addVartex("I2");
		graph.addVartex("J2");
		graph.addVartex("K2");
		graph.addVartex("L2");
		graph.addVartex("M2");
		graph.addVartex("N2");
		graph.addVartex("O2");
		graph.addVartex("P2");
		graph.addVartex("Q2");
		graph.addVartex("R2");
		graph.addVartex("S2");
		graph.addVartex("T2");
		graph.addVartex("U2");
		graph.addVartex("V2");
		graph.addVartex("W2");
		graph.addVartex("X2");
		graph.addVartex("Y2");
		graph.addVartex("Z2");

		// add Edge
		graph.addEdge("B", "A", ab);
		graph.addEdge("B", "C", bc);
		graph.addEdge("B", "D", bd);
		graph.addEdge("B", "E", be);
		graph.addEdge("B", "F", bf);
		graph.addEdge("B", "G", bg);
		graph.addEdge("G", "J", gj);
		graph.addEdge("G", "H", gh);
		graph.addEdge("H", "I", hi);
		graph.addEdge("G", "K", gk);
		graph.addEdge("K", "L", kl);
		graph.addEdge("K", "M", km);
		graph.addEdge("M", "N", mn);
		graph.addEdge("N", "O", no);
		graph.addEdge("O", "P", op);
		graph.addEdge("P", "Q", pq);
		graph.addEdge("Q", "R", qr);
		graph.addEdge("R", "T", rt);
		graph.addEdge("R", "S", rs);
		graph.addEdge("S", "U", su);
		graph.addEdge("S", "V", sv);
		graph.addEdge("S", "W", sw);
		graph.addEdge("S", "X", sx);
		graph.addEdge("X", "Y", xy);
		graph.addEdge("X", "Z", xz);

		graph.addEdge("Z", "A1", za1);
		graph.addEdge("Z", "B1", zb1);
		graph.addEdge("Z", "H1", zh1);
		graph.addEdge("B1", "C1", b1c1);
		graph.addEdge("H1", "M1", h1m1);
		graph.addEdge("H1", "I1", h1i1);
		graph.addEdge("H1", "F1", h1f1);
		graph.addEdge("F1", "D1", f1d1);
		graph.addEdge("F1", "E1", f1e1);
		graph.addEdge("I1", "G1", i1g1);
		graph.addEdge("G1", "J1", g1j1);

		graph.addEdge("J1", "L1", j1l1);
		graph.addEdge("L1", "N1", l1n1);
		graph.addEdge("L1", "Q1", l1q1);
		graph.addEdge("N1", "S1", n1s1);
		graph.addEdge("S1", "W1", s1w1);
		graph.addEdge("N1", "O1", n1o1);
		graph.addEdge("O1", "R1", o1r1);
		graph.addEdge("R1", "V1", r1v1);
		graph.addEdge("V1", "X1", v1x1);

		graph.addEdge("R1", "T1", r1t1);
		graph.addEdge("T1", "U1", t1u1);
		graph.addEdge("Y1", "Z1", y1z1);
		graph.addEdge("Z1", "G2", z1g2);

		graph.addEdge("Y1", "H2", y1h2);
		graph.addEdge("U1", "H2", u1h2);

		graph.addEdge("J1", "K1", j1k1);
		graph.addEdge("K1", "P1", k1p1);
		graph.addEdge("P1", "B2", p1b2);
		graph.addEdge("B2", "C2", b2c2);
		graph.addEdge("C2", "D2", c2d2);
		graph.addEdge("D2", "A2", a2d2);
		graph.addEdge("D2", "E2", d2e2);
		graph.addEdge("D2", "Q2", d2q2);
		graph.addEdge("Q2", "R2", q2r2);
		graph.addEdge("R2", "S2", r2s2);
		graph.addEdge("S2", "P2", s2p2);
		graph.addEdge("P2", "O2", p2o2);
		graph.addEdge("P2", "T2", p2t2);
		graph.addEdge("P2", "U2", p2u2);
		graph.addEdge("U2", "V2", u2v2);

		graph.addEdge("P2", "N2", n2p2);
		graph.addEdge("N2", "M2", n2m2);
		graph.addEdge("M2", "F2", m2f2);
		graph.addEdge("M2", "K2", k2m2);
		graph.addEdge("K2", "J2", j2k2);
		graph.addEdge("I2", "J2", i2j2);
		graph.addEdge("H2", "I2", h2i2);
		graph.addEdge("K2", "L2", k2l2);
		graph.addEdge("L2", "Y2", l2y2);
		graph.addEdge("Y2", "X2", y2x2);
		graph.addEdge("X2", "Z2", x2z2);
		graph.addEdge("N2", "W2", n2w2);
		graph.addEdge("A2", "Z1", z1a2);

		//Extra Lines

		graph.addEdge("Y", "Q1", yq1);
		graph.addEdge("V", "W", vw);
		graph.addEdge("W", "X", wx);
		graph.addEdge("A2", "E2", a2e2);
		graph.addEdge("E2", "G2", e2g2);
		graph.addEdge("G2", "O2", g2o2);
		graph.addEdge("Q1", "W1", q1w1);
		graph.addEdge("Q1", "S1", q1s1);
		graph.addEdge("M", "L", ml);
		graph.addEdge("B", "I", bi);
		graph.addEdge("B", "J", bj);
		graph.addEdge("H", "L", hl);
		graph.addEdge("J", "Q", jq);
		graph.addEdge("K", "Q", kq);
		graph.addEdge("A", "I", ai);
		graph.addEdge("D", "E", de);
		graph.addEdge("F", "B1", fb1);
		graph.addEdge("X", "M1", xm1);
		graph.addEdge("X", "L1", xl1);
		graph.addEdge("A1", "F1", a1f1);
		graph.addEdge("F1", "G1", f1g1);
		graph.addEdge("X1", "U1", x1u1);
		graph.addEdge("R1", "Y1", r1y1);
		graph.addEdge("R1", "Z1", r1z1);
		graph.addEdge("T1", "Y1", t1y1);
		graph.addEdge("S1", "V1", s1v1);
		graph.addEdge("F2", "J2", f2j2);
		graph.addEdge("K2", "Y2", k2y2);

		const findArr = graph.dijkstra(
			startLoctionForDijkstra,
			finishLoctionForDijkstra
		);
		// Saving the result arr
		setResultArr(findArr);
	}, [reload, start, end, startLoctionForDijkstra, finishLoctionForDijkstra]);

	//passing the result arr in parent
	setArr(resultArr);

	//Mouse Down

	const canvasMouseDown = (e) => {
		const rect = canvasRef.current.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		//Cheaking ... is 'Click' events occurs upon arrows or not?
		arrows.forEach((x) => {
			if (x.click(mouseX, mouseY)) {
				setDragDetails({ arrowName: x.name });
			}
		});
	};

	const canvasMouseMove = (e) => {
		const rect = canvasRef.current.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		//Dragging Arrows Logic
		arrows.forEach((x) => {
			if (dragDeatils.arrowName === "startArrow") {
				setStart({ x: mouseX, y: mouseY });
			}
			if (dragDeatils.arrowName === "endArrow") {
				setEnd({ x: mouseX, y: mouseY });
			}
		});
	};

	const canvasMouseUp = (e) => {
		setDragDetails({ arrowName: undefined });
		setStartLocation(null);
		setFinishLoaction(null);

		element.forEach((x) => {
			arrows.forEach((arrow) => {
				x.click(
					arrow.downPointX,
					arrow.downPointY,
					arrow.name,
					setStartLocation,
					setFinishLoaction
				);
			});
		});
	};

	return (
		<>
			<canvas
				ref={canvasRef}
				className={canvasStyle}
				onMouseDown={canvasMouseDown}
				onMouseUp={canvasMouseUp}
				onMouseMove={canvasMouseMove}
			/>
		</>
	);
};

export default Canvas;
