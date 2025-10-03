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

                var oDonutChart = this.byId("vfDonut");

                var oPopDonut = this.byId("idPopOverDonut");

                if (oDonutChart) {
                    oDonutChart.setVizProperties({
                        plotArea: {
                            dataLabel: {
                                visible: true,
                                formatString: oFormat.STANDARDPERCENT_MFD2,
                            },
                        },

                        legend: { visible: true },
                    });
                }

                if (oPopDonut) {
                    oPopDonut.connect(oDonutChart.getVizUid());
                    oPopDonut.setFormatString({
                        Share: oFormat.STANDARDCURRENCY,
                    });
                }

            },
        });
    }
);
