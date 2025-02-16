import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { getFormattedDate } from "../../util/date";
import { Background } from "@react-navigation/elements";

function ExpensesList({ expenses }) {

  function renderExpenseItem(itemData) {
    return (
      <View style={styles.expenseItem}>
        <Text>{itemData.item.description}</Text>
        <Text>{itemData.item.amount}</Text>
        <Text>{getFormattedDate(itemData.item.date)}</Text>
      </View>
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
  expenseItem : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'row',
    BackgroundColor: 'black'
  }
});

export default ExpensesList;
