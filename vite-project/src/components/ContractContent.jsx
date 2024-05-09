import { DataGrid } from "@mui/x-data-grid";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const columns = [
  {
    field: "id", headerName: "ID", width: 70,
    align: 'center',
    headerAlign: 'center',
  },
  { field: "owner", headerName: "Owner", flex: 1, 
  align:'center',
  headerAlign:'center',
   },
  { field: "lastName", headerName: "Last name", flex: 1,
  align:'center',
  headerAlign:'center',
   },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: "owner",
    headerName: "Proprietário",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    valueGetter: (value, row) => `${row.owner || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", owner: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", owner: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", owner: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", owner: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", owner: "Daenerys", age: 42 },
  { id: 6, lastName: "Melisandre", owner: null, age: 27 },
  { id: 7, lastName: "Clifford", owner: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", owner: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", owner: "Harvey", age: 65 },
];

const useStyles = makeStyles({
  root: {
    "& .MuiDataGrid-root": {
      borderColor: "transparent",
    },
  },
});

const greyTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5", // Cinza claro para o fundo
    },
    text: {
      primary: "#333", // Cinza escuro para o texto
    },
  },
});

export default function ContractContent() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={greyTheme}>
      <div style={{ height: '90vh', width: "100%" }} className={classes.root}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </ThemeProvider>
  );
}
