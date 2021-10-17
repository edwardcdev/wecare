import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({ 
  container: {
    borderWidth: 2,
    width: '70mm', 
    height: '35mm', 
    borderLeftWidth: 0, 
    borderTopWidth: 0
  },  
  table: {
    width: '70mm',
    height: '35mm', 
    borderWidth: 0.7,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    display: 'flex',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    width: '23mm',
    display: 'table-cell',
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 16
  },
  tableCell2: {
    width: '69mm',
    display: 'table-cell',
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    colspan: 3
  }
});

export function PdfLabelDocument(props) {
  const data = props.data;
  return (
    <Document>
      <Page size="A4">
        <View style={{'flexDirection': 'row'}}>
          <View style={styles.container}>
            <View style={styles.table}>
              <View style={[styles.tableRow, {height: '8.7mm'}]}>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
              </View>
              <View style={[styles.tableRow, {height: '8.7mm'}]}>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
              </View>
              <View style={[styles.tableRow, {height: '17mm'}]}>
                <View style={styles.tableCell2}>
                  <Text>fdsf</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.table}>
              <View style={[styles.tableRow, {height: '8.7mm'}]}>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
              </View>
              <View style={[styles.tableRow, {height: '8.7mm'}]}>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
              </View>
              <View style={[styles.tableRow, {height: '17mm'}]}>
                <View style={styles.tableCell2}>
                  <Text>fdsf</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
          <View style={styles.table}>
            <View style={[styles.tableRow, {height: '8.7mm'}]}>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
            </View>
            <View style={[styles.tableRow, {height: '8.7mm'}]}>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
            </View>
            <View style={[styles.tableRow, {height: '17mm'}]}>
              <View style={styles.tableCell2}>
                <Text>fdsf</Text>
              </View>
            </View>
          </View>
        </View>
        </View>
        <View style={{'flexDirection': 'row'}}>
          <View style={styles.container}>
            <View style={styles.table}>
              <View style={[styles.tableRow, {height: '8.7mm'}]}>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
              </View>
              <View style={[styles.tableRow, {height: '8.7mm'}]}>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
              </View>
              <View style={[styles.tableRow, {height: '17mm'}]}>
                <View style={styles.tableCell2}>
                  <Text>fdsf</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.table}>
              <View style={[styles.tableRow, {height: '8.7mm'}]}>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
              </View>
              <View style={[styles.tableRow, {height: '8.7mm'}]}>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>saluation</Text>
                </View>
              </View>
              <View style={[styles.tableRow, {height: '17mm'}]}>
                <View style={styles.tableCell2}>
                  <Text>fdsf</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
          <View style={styles.table}>
            <View style={[styles.tableRow, {height: '8.7mm'}]}>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
            </View>
            <View style={[styles.tableRow, {height: '8.7mm'}]}>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>saluation</Text>
              </View>
            </View>
            <View style={[styles.tableRow, {height: '17mm'}]}>
              <View style={styles.tableCell2}>
                <Text>fdsf</Text>
              </View>
            </View>
          </View>
        </View>
        </View>
      </Page>
    </Document>
  );
}
