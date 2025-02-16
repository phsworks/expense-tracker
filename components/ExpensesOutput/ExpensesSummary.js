import { View, Text, StyleSheet } from 'react-native';


function ExpensesSummary({expenses, periodName}) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);



  return (
    <View style={styles.container}>
      <View style={styles.expenseContainer}>
        <Text >{periodName}</Text>
        <Text style={styles.expenseValue} >€{expensesSum.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    marginTop: '10'
  },

  expenseContainer: {
    backgroundColor: "#d8d8d8" ,
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 8,
    width: 350,
    padding: 10,
  },
  expenseValue: {
    color: "#1704c3",
  }
});

export default ExpensesSummary;

