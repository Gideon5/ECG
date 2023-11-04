import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { DataContext } from '../../contexts/DataContext';

const TableView = () => {
  const { chartData } = useContext(DataContext);

  const formatTimestamp = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    const formattedDate = `${padZero(date.getMonth() + 1)}/${padZero(date.getDate())}/${date.getFullYear()}`;
    const formattedTime = `${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}.${padZero(date.getMilliseconds())}`;
    return `${formattedDate} ${formattedTime}`;
  };

  const padZero = (value) => {
    return value.toString().padStart(2, '0');
  };

  const renderTable = () => {
    const tableHead = ['Amplitude', 'Timestamp', 'Heart Rate'];

    const tableData = chartData.results[0].map(([value, timestamp]) => [
      value , // Check if value and value[0] exist before calling toString()
      formatTimestamp(timestamp), // Check if timestamp and timestamp[0] exist before calling formatTimestamp()
      'N/A',
    ]);

    return (
      <Table borderStyle={styles.tableBorder}>
        <Row data={tableHead} style={styles.tableHead} textStyle={styles.headText} />
        <Rows data={tableData} style={styles.tableRow} textStyle={styles.text} />
      </Table>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderTable()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  tableBorder: {
    borderWidth: 1,
  },
  tableHead: {
    height: 40,
    backgroundColor: 'orange',
  },
  headText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    height: 40,
  },
  text: {
    textAlign: 'center',
  },
});

export default TableView;
