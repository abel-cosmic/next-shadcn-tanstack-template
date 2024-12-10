"use client";

import usePDFStore from "@/store/ui/pdf";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import { PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    marginBottom: 4,
  },
});

export default function TranscriptPage() {
  const pdfData = usePDFStore((state) => state.data);

  return (
    <div className="h-screen w-full">
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>PDF detail Here</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
