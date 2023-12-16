import { useGitHubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
	const { repos } = useGitHubContext();

	let languages = repos?.reduce((total, item) => {
		const { language } = item;
		if (!language) return total;
		if (!total[language]) {
			total[language] = { label: language, value: 1 };
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1,
			};
		}
		return total;
	}, {});
	languages = Object.values(languages)
		.sort((a, b) => {
			return b.value - a.value;
		})
		.slice(0, 5);
	const chartData = [
		{
			label: "HTML",
			value: "13",
		},
		{
			label: "CSS",
			value: "160",
		},
		{
			label: "Javascript",
			value: "80",
		},
	];
	return (
		<section className="p-4 relative">
			<div className="w-[90vw] max-w-[1170px] my-0 mx-auto custom:w-[95vw] grid justify-center gap-8 custom-small:grid-cols-2 custom_big:grid-cols-[2fr_3fr]">
				<Pie3D data={languages} />
			</div>
		</section>
	);
};
export default Repos;
