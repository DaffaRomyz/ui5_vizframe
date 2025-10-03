sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/viz/ui5/format/ChartFormatter",
        "sap/viz/ui5/api/env/Format",
    ],
    (Controller, ChartFormatter, Format) => {
        "use strict";

        return Controller.extend("chart.controller.TreemapChart", {
            onInit() {
                Format.numericFormatter(ChartFormatter.getInstance());
                var oFormat = ChartFormatter.DefaultPattern;

                var oTreemapChart = this.byId("vfTreemap");

                var oPopTreemap = this.byId("idPopOverTreemap");

                if (oTreemapChart) {
                    oTreemapChart.setVizProperties({
                        plotArea: {
                            dataLabel: {
                                visible: true,
                                formatString: oFormat.SHORTFLOAT_MFD2,
                            },
                        },

                        legend: { visible: true },
                    });
                }

                if (oPopTreemap) {
                    oPopTreemap.connect(oTreemapChart.getVizUid());
                    oPopTreemap.setFormatString({
                        Share: oFormat.SHORTFLOAT_MFD2,
                    });
                }

            },
        });
    }
);
