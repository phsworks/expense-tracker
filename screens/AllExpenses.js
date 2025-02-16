import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  return (
    <>
      <ExpensesOutput expensesPeriod={"Total"} />
    </>
  );
}

const styles = StyleSheet.create({});

export default AllExpenses;
