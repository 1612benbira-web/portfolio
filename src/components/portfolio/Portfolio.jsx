import React, { useState } from "react";
import "./Portfolio.css";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { projects } from "../../constants";

const ALL = "Tous";
const filters = [ALL, ...new Set(projects.flatMap((p) => p.category))];

const Portfolio = () => {
	const [activeFilter, setActiveFilter] = useState(ALL);
	const items = activeFilter === ALL ? projects : projects.filter((p) => p.category.includes(activeFilter));

	return (
		<section className="portfolio container section" id="portfolio">
			<h2 className="section__title">Projets</h2>

			<div className="portfolio__filters" role="group" aria-label="Filtrer les projets">
				{filters.map((f) => (
					<button
						type="button"
						key={f}
						className={activeFilter === f ? "portfolio__item portfolio__item-active" : "portfolio__item"}
						aria-pressed={activeFilter === f}
						onClick={() => setActiveFilter(f)}
					>
						{f}
					</button>
				))}
			</div>

			<div className="portfolio__container grid">
				{items.map(({ id, image, title, category, description, stack, url, repositoryUrl }) => (
					<article className="portfolio__card" key={id}>
						<img src={image} alt={`Aperçu du projet ${title}`} className="portfolio__img" width="400" height="267" loading="lazy" />
						<div className="portfolio__body">
							<span className="portfolio__category">{category.join(" · ")}</span>
							<h3 className="portfolio__title">{title}</h3>
							<p className="portfolio__description">{description}</p>
							<p className="portfolio__stack">{stack}</p>
							<div className="portfolio__links">
								<a href={url} target="_blank" rel="noreferrer" className="portfolio__link">
									<RiLink aria-hidden="true" /> Voir le site
								</a>
								<a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__link">
									<RiGithubLine aria-hidden="true" /> Code
								</a>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
