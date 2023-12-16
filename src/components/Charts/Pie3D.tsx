import ComponentFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import ChartType from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ComponentFC.fcRoot(FusionCharts, ChartType, FusionTheme);

const Pie3D = ({ data }) => {
	const chartConfigs = {
		type: "pie3d",
		width: "400",
		height: "400",
		dataFormat: "json",
		dataSource: {
			chart: {
				caption: "Languages",
				theme: "fusion",
				decimals: 0,
				pieRadius: "45%",
			},
			data,
		},
	};
	return <ComponentFC {...chartConfigs} />;
};

export default Pie3D;
