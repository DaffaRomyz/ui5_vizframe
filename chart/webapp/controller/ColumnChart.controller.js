sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/viz/ui5/format/ChartFormatter",
    "sap/viz/ui5/api/env/Format",
  ],
  (Controller, ChartFormatter, Format) => {
    "use strict";

    return Controller.extend("fiori.chart.controller.Charts", {
      onInit() {
        Format.numericFormatter(ChartFormatter.getInstance());
        var oFormat = ChartFormatter.DefaultPattern;

        var oColumnChart = this.byId("vfColumn");

        var oPopColumn = this.byId("idPopOverColumn");

        if (oColumnChart) {
          oColumnChart.setVizProperties({
            valueAxis: { label: { formatString: oFormat.SHORTFLOAT_MFD2 } },
            plotArea: {
              dataLabel: {
                visible: false,
                formatString: oFormat.SHORTFLOAT_MFD2,
              },
            },
            categoryAxis: {
              levels: ["month", "year"],
              levelConfig: {
                month: { label: { formatString: oFormat.MEDIUMMONTH } },
                year: { label: { formatString: oFormat.MEDIUMYEAR } },
              },
            },
          });
        }

        if (oPopColumn) {
          oPopColumn.connect(oColumnChart.getVizUid());
          oPopColumn.setFormatString({
            Date: oFormat.YEARMONTHDAY,
            Sales: oFormat.STANDARDCURRENCY,
            Profit: oFormat.STANDARDCURRENCY,
          });
        }
        /* End of Column Chart */
      },
    });
  }
);
