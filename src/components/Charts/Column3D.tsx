import ComponentFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import ChartType from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { IChartData } from "../../models/User";

ComponentFC.fcRoot(FusionCharts, ChartType, FusionTheme);

const Column3D = ({ data }: { data: IChartData[] }) => {
	const chartConfigs = {
		type: "column3d",
		width: "100%",
		height: "350",
		dataFormat: "json",
		dataSource: {
			chart: {
				caption: "Most Popular",
				yAxisName: "stars",
				xAxisName: "Repos",
				xAxisNameFontSize: "16px",
				yAxisNameFontSize: "16px",
			},
			data,
		},
	};
	return <ComponentFC {...chartConfigs} />;
};

export default Column3D;
