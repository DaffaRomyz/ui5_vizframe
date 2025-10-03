sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/viz/ui5/format/ChartFormatter",
        "sap/viz/ui5/api/env/Format",
    ],
    (Controller, ChartFormatter, Format) => {
        "use strict";

        return Controller.extend("chart.controller.DonutChart", {
            onInit() {
                Format.numericFormatter(ChartFormatter.getInstance());
                var oFormat = ChartFormatter.DefaultPattern;

                var oHeatmaoChart = this.byId("vfHeatmap");

                var oPopHeatmap = this.byId("idPopOverHeatmap");

                if (oHeatmaoChart) {
                    oHeatmaoChart.setVizProperties({
                        plotArea: {
                            dataLabel: {
                                visible: true,
                                formatString: oFormat.SHORTFLOAT_MFD2,
                            },
                        },
                        legend: { visible: true },
                    });
                }

                if (oPopHeatmap) {
                    oPopHeatmap.connect(oHeatmaoChart.getVizUid());
                    oPopHeatmap.setFormatString({
                        Share: oFormat.SHORTFLOAT_MFD2,
                    });
                }

            },
        });
    }
);
