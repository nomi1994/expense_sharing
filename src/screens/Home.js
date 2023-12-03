import * as React from "react";
import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";

export default function Home({ navigation }) {
  const data = [
    {
      id: "item1",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item2",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item3",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item4",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item5",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item6",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item7",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item8",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item9",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item10",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item11",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item12",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item13",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item14",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item15",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item16",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item17",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item18",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item19",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item20",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item21",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item22",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item23",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item24",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item25",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item26",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item27",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item28",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    {
      id: "item29",
      name: "Item 1",
      total_amount: "item1",
      each_person_payable: "Item 1",
      receivable: "30",
    },
    // Add more items as needed
  ];
  return (
    <View
      style={{
        backgroundColor: "purple",
        paddingBottom: 135,
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}>
      <View
        style={{
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        <Text style={{ fontSize: 96 }}>Home</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("LedgerDetails")}>
            <View
              style={{
                backgroundColor: "green",
                margin: 8,
                padding: 16,
                borderRadius: 10,
              }}>
              <Text style={{ fontSize: 24 }}>{item.name}</Text>
              <Text style={{ fontSize: 24 }}>{item.total_amount}</Text>
              <Text style={{ fontSize: 24 }}>{item.each_person_payable}</Text>
              <Text style={{ fontSize: 24 }}>{item.receivable}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
