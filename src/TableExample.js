import React, { forwardRef, Fragment } from "react";
import MaterialTable from "material-table";
import "./style.css";
import users from "./users.json";
const TableColumn = [
  {
    title: "Filling/Bureaus",
    field: "name",
    render: rowData => (
      <span>
        <a href="#/filing_summary">{rowData.age}</a>
      </span>
    )
  },
  { title: "Submitted", field: "position" },
  { title: "Approved", field: "position" },
  { title: "In Progress", field: "position" },
  { title: "Rejected", field: "position" },
  { title: "Rejected", field: "position" }
];

const TableStyle = {
  sorting: true,
  paginationType: "normal",
  header: true,
  loadingType: "linear",
  padding: "dense",
  search: false,
  paging: false,
  rowStyle: {},
  showEmptyDataSourceMessage: true,
  pageSize: 5,
  toolbar: true,
  borderTopWidth: 1,
  borderColor: "red",
  borderStyle: "solid",
  headerStyle: {
    backgroundColor: "#C5CBD2",
    color: "#000"
  }
};

const TableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const TableExample = () => {
  return (
    <Fragment>
      <MaterialTable
        style={{ padding: "10px" }}
        icons={TableIcons}
        options={TableStyle}
        columns={TableColumn}
        data={users}
        title="Customers"
      />
    </Fragment>
  );
};
export default TableExample;
