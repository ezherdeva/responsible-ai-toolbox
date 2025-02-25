// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IStyle,
  mergeStyleSets,
  IProcessedStyleSet
} from "office-ui-fabric-react";

export interface IFeatureImportanceBarStyles {
  chart: IStyle;
  chartWithVertical: IStyle;
  noData: IStyle;
  verticalAxis: IStyle;
  rotatedVerticalBox: IStyle;
  boldText: IStyle;
}

export const featureImportanceBarStyles: IProcessedStyleSet<IFeatureImportanceBarStyles> =
  mergeStyleSets<IFeatureImportanceBarStyles>({
    boldText: {
      fontWeight: "600"
    },
    chart: {
      width: "95%"
    },
    chartWithVertical: {
      width: "100%"
    },
    noData: {
      flex: "1",
      margin: "100px auto 0 auto"
    },
    rotatedVerticalBox: {
      marginLeft: "28px",
      position: "absolute",
      textAlign: "center",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%) rotate(270deg)",
      width: "max-content"
    },
    verticalAxis: {
      height: "auto",
      position: "relative",
      top: "0px",
      width: "64px"
    }
  });
