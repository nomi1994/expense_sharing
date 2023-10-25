import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const AllExpensesScreen = ({ route }) => {
  const { ledger } = route.params;

  // Example list of expenses
  const expenses = [
    {
      id: 1,
      expenseName: "Dinner",
      amount: "$50",
      userName: "John",
      date: "2023-07-10",
    },
    {
      id: 2,
      expenseName: "Groceries",
      amount: "$100",
      userName: "Alice",
      date: "2023-07-09",
    },
    // Add more expenses here
  ];

  const renderExpenseItem = ({ item }) => (
    <View style={styles.expenseItem}>
      <Text style={styles.expenseName}>{item.expenseName}</Text>
      <Text style={styles.amount}>Amount: {item.amount}</Text>
      <Text style={styles.userName}>User: {item.userName}</Text>
      <Text style={styles.date}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Expenses for {ledger.name}</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderExpenseItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  expenseItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
  },
  expenseName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    marginTop: 8,
  },
  userName: {
    marginTop: 8,
  },
  date: {
    marginTop: 8,
  },
});

export default AllExpensesScreen;
