import ComponentFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import ChartType from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { IChartData } from "../../models/User";

ComponentFC.fcRoot(FusionCharts, ChartType, FusionTheme);

const Pie3D = ({ data }: { data: IChartData[] }) => {
	const chartConfigs = {
		type: "pie3d",
		width: "100%",
		height: "350",
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
