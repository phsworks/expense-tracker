import { View, Text, StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 days" />
}

const styles = StyleSheet.create({
  container: {
    
  }
});

export default RecentExpenses;