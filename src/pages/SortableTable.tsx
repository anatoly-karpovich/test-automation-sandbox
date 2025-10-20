import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type Employee = {
  email: string;
  firstName: string;
  lastName: string;
  salary: number;
  age: number;
  occupation: string;
};

type Order = "asc" | "desc";

const initialEmployees: Employee[] = [
  {
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    salary: 55000,
    age: 29,
    occupation: "AQA Engineer",
  },
  {
    email: "sarah.smith@example.com",
    firstName: "Sarah",
    lastName: "Smith",
    salary: 72000,
    age: 34,
    occupation: "Frontend Developer",
  },
  {
    email: "alex.johnson@example.com",
    firstName: "Alex",
    lastName: "Johnson",
    salary: 64000,
    age: 31,
    occupation: "Backend Developer",
  },
  {
    email: "linda.williams@example.com",
    firstName: "Linda",
    lastName: "Williams",
    salary: 48000,
    age: 26,
    occupation: "Manual Tester",
  },
  {
    email: "michael.brown@example.com",
    firstName: "Michael",
    lastName: "Brown",
    salary: 89000,
    age: 41,
    occupation: "Team Lead",
  },
];

export default function SortableTable() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Employee>("firstName");

  const handleSort = (property: keyof Employee) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    const sorted = [...employees].sort((a, b) => {
      const valueA = a[property];
      const valueB = b[property];

      if (typeof valueA === "number" && typeof valueB === "number") {
        return isAsc ? valueA - valueB : valueB - valueA;
      }

      return isAsc ? String(valueA).localeCompare(String(valueB)) : String(valueB).localeCompare(String(valueA));
    });

    setEmployees(sorted);
  };

  const handleDelete = (email: string) => {
    setEmployees(employees.filter((emp) => emp.email !== email));
  };

  const handleEdit = (email: string) => {
    alert(`Edit employee: ${email}`);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Sortable Table
      </Typography>

      <TableContainer component={Paper} elevation={3} sx={{ mt: 5 }}>
        <Table>
          <TableHead>
            <TableRow>
              {[
                { id: "email", label: "Email" },
                { id: "firstName", label: "First Name" },
                { id: "lastName", label: "Last Name" },
                { id: "salary", label: "Salary" },
                { id: "age", label: "Age" },
                { id: "occupation", label: "Occupation" },
              ].map((column) => (
                <TableCell key={column.id} align="center" id={column.id}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleSort(column.id as keyof Employee)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.email} hover>
                <TableCell align="center">{emp.email}</TableCell>
                <TableCell align="center">{emp.firstName}</TableCell>
                <TableCell align="center">{emp.lastName}</TableCell>
                <TableCell align="center">${emp.salary.toLocaleString()}</TableCell>
                <TableCell align="center">{emp.age}</TableCell>
                <TableCell align="center">{emp.occupation}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="edit" color="primary" onClick={() => handleEdit(emp.email)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="error" onClick={() => handleDelete(emp.email)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
