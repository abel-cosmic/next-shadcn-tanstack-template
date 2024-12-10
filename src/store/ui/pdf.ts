import { Pdf } from "@/schema/pdf";
import { createGenericStore } from "./generic.store";

const initialPdfData: Pdf = {
  id: "",
  name: "",
  description: "",
  author: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  url: "",
  size: 0,
  type: "",
  metadata: {},
};

const usePDFStore = createGenericStore<Pdf>(
  initialPdfData,
  "PDFFormValues"
);

export default usePDFStore;
