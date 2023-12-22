import { useGitHubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
	const { repos } = useGitHubContext();

	const languages = repos?.reduce((total, item) => {
		const { language, stargazers_count } = item;
		if (!language) return total;
		if (!total[language]) {
			total[language] = { label: language, value: 1, stars: stargazers_count };
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1,
				stars: total[language].stars + stargazers_count,
			};
		}
		return total;
	}, {});

	const mostUsed = Object.values(languages)
		.sort((a, b) => {
			return b.value - a.value;
		})
		.slice(0, 5);

	// most stars per language
	const mostPopular = Object.values(languages)
		.sort((a, b) => {
			return b.stars - a.stars;
		})
		.map((item) => {
			return { ...item, value: item.stars };
		})
		.slice(0, 5);

	// stars, forks

	let { stars, forks } = repos.reduce(
		(total, item) => {
			const { stargazers_count, name, forks } = item;
			total.stars[stargazers_count] = { label: name, value: stargazers_count };
			total.forks[forks] = { label: name, value: forks };
			return total;
		},
		{
			stars: {},
			forks: {},
		}
	);
	stars = Object.values(stars).slice(-5).reverse();
	forks = Object.values(stars).slice(-5).reverse();

	return (
		<section className="p-4 relative">
			<div className="w-[90vw] max-w-[1170px] my-0 mx-auto custom:w-[95vw] grid justify-center gap-8 custom-small:grid-cols-2 custom_big:grid-cols-[2fr_3fr]">
				<Pie3D data={mostUsed} />
				<Column3D data={stars} />
				<Doughnut2D data={mostPopular} />
				<Bar3D data={forks} />
			</div>
		</section>
	);
};
export default Repos;
