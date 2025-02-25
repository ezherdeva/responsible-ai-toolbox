// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IStyle,
  mergeStyleSets,
  IProcessedStyleSet
} from "office-ui-fabric-react";

export interface ICohortBaseAndFiltersStyles {
  divider: IStyle;
  header: IStyle;
  section: IStyle;
  subsection: IStyle;
  tableData: IStyle;
}

export const cohortBaseAndFiltersStyles: () => IProcessedStyleSet<ICohortBaseAndFiltersStyles> =
  () => {
    return mergeStyleSets<ICohortBaseAndFiltersStyles>({
      divider: {
        borderTop: "1px solid #DADADA",
        left: "50%",
        margin: "0",
        marginRight: "-50%",
        position: "absolute",
        transform: "translate(-50%, 0%)",
        width: "100%"
      },
      header: {
        fontSize: "14px",
        fontWeight: "600"
      },
      section: {
        paddingBottom: "10px !important",
        paddingLeft: "20px",
        paddingTop: "10px !important"
      },
      subsection: {},
      tableData: {
        fontSize: "16px"
      }
    });
  };
