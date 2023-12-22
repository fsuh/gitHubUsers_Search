import ComponentFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import ChartType from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { IChartData } from "../../models/User";

ComponentFC.fcRoot(FusionCharts, ChartType, FusionTheme);

const Bar3D = ({ data }: { data: IChartData[] }) => {
	const chartConfigs = {
		type: "bar3d",
		width: "100%",
		height: "350",
		dataFormat: "json",
		dataSource: {
			chart: {
				caption: "Most Forked",
				yAxisName: "Forks",
				xAxisName: "Repos",
				xAxisNameFontSize: "16px",
				yAxisNameFontSize: "16px",
			},
			data,
		},
	};
	return <ComponentFC {...chartConfigs} />;
};

export default Bar3D;
