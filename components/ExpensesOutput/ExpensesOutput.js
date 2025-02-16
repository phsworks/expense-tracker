import { View, Text, StyleSheet} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2025-01-02')
  },
  {
    id: 'e2',
    description: 'Trousers',
    amount: 89.99,
    date: new Date('2025-02-02')
  },
  {
    id: 'e3',
    description: 'A Book',
    amount: 59.99,
    date: new Date('2025-02-08')
  },
  {
    id: 'e4',
    description: 'A game',
    amount: 39.99,
    date: new Date('2025-02-14')
  },
  {
    id: 'e5',
    description: 'Drinks',
    amount: 5.99,
    date: new Date('2025-02-13')
  },
]

function ExpensesOutput( {expenses, expensesPeriod}) {
  if (expensesPeriod === "Last 7 days") {
    
  }


  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ExpensesOutput;