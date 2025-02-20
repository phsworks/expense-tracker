import { View, StyleSheet, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {

  function renderExpenseItem(itemData) {
    return (
      <ExpenseItem itemData={itemData} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(expense) => expense.id}
        renderItem={renderExpenseItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ExpensesList;
