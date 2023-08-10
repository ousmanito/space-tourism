import React from "react";
import styles from "./destination.module.css";

export default function Page() {

	return (
		<>
			<span className={styles.bg}></span>
			<div className={styles.container}>
				<h1>Pick your destination</h1>
				<div className={styles.main}>
					<div className={styles.image}>IMAGE</div>
					<div className={styles.content}>
						<div className={styles.nav}>
							<div className={styles.list}>
								<ul>
									<li>Moon</li>
									<li>Mars</li>
									<li>Europa</li>
									<li>Titan</li>
								</ul>
							</div>
						</div>
						<div className={styles.text}>
							<h1>PLANET</h1>
							<p>
								Lorem ipsum dolor sit amet, officia excepteur ex fugiat
								reprehenderit enim labore culpa sint ad nisi Lorem pariatur
								mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
								officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
								amet voluptate voluptate dolor minim nulla est proident. Nostrud
								officia pariatur ut officia. Sit irure elit esse ea nulla sunt
								ex occaecat reprehenderit commodo officia dolor Lorem duis
								laboris cupidatat officia voluptate. Culpa proident adipisicing
								id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
								Aliqua reprehenderit commodo ex non excepteur duis sunt velit
								enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
								et est culpa et culpa duis.
							</p>
							<div className={styles.line}>
								line
							</div>
							<div className={styles.footer}>
								<div className={styles.distance}>
									<h3>distance</h3>
									<h2>1000000 km</h2>
								</div>
								<div className={styles.time}>
									<h3>time</h3>
									<h2>25000000</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

