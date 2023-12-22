import ComponentFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import ChartType from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { IChartData } from "../../models/User";

ComponentFC.fcRoot(FusionCharts, ChartType, FusionTheme);

const Doughnut2D = ({ data }: { data: IChartData[] }) => {
	const chartConfigs = {
		type: "doughnut2d",
		width: "100%",
		height: "350",
		dataFormat: "json",
		dataSource: {
			chart: {
				caption: "Stars Per Language",
				theme: "candy",
				decimals: 0,
				doughnutRadius: "45%",
				showPercentValues: 0,
			},
			data,
		},
	};
	return <ComponentFC {...chartConfigs} />;
};

export default Doughnut2D;
