sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/viz/ui5/format/ChartFormatter",
        "sap/viz/ui5/api/env/Format",
    ],
    (Controller, ChartFormatter, Format) => {
        "use strict";

        return Controller.extend("chart.controller.LineChart", {
            onInit() {
                Format.numericFormatter(ChartFormatter.getInstance());
                var oFormat = ChartFormatter.DefaultPattern;

                var oLineChart = this.byId("vfLine");

                var oPopLine = this.byId("idPopOverLine");

                if (oLineChart) {
                    oLineChart.setVizProperties({
                        valueAxis: { label: { formatString: oFormat.SHORTFLOAT_MFD2 } },
                        plotArea: {
                            dataLabel: {
                                visible: false,
                                formatString: oFormat.SHORTFLOAT_MFD2,
                            },
                        },
                        timeAxis: {
                            levels: ["month", "year"],
                            levelConfig: {
                                month: { label: { formatString: oFormat.MEDIUMMONTH } },
                                year: { label: { formatString: oFormat.MEDIUMYEAR } },
                            },
                        },
                    });
                }

                if (oPopLine) {
                    oPopLine.connect(oLineChart.getVizUid());
                    oPopLine.setFormatString({
                        Date: oFormat.YEARMONTHDAY,
                        Sales: oFormat.STANDARDCURRENCY,
                        Profit: oFormat.STANDARDCURRENCY,
                    });
                }
            },
        });
    }
);
