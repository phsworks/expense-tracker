import { View, Text, StyleSheet, Pressable } from "react-native";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({ itemData }) {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <Text style={styles.expenseText}>{itemData.item.description}</Text>
        <Text style={styles.expenseText}>
          {getFormattedDate(itemData.item.date)}
        </Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{itemData.item.amount}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    adding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  expenseText: {
    color: GlobalStyles.colors.primary50,
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});

export default ExpenseItem;
