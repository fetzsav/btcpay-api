import axios from "axios";
const btcHost = "127.0.0.1:2500/api/v1/";
const storeID = "";

export interface CreatedInvoice {
    invoice_id: string,
    checkout: string
}

type InvoiceRequestBody = {
    checkout: {
        speedPolicy: string,
    }
    amount: string,
}

export const newInvoice = (amount: string): InvoiceRequestBody => {
    let invoice = {
    checkout: {
        speedPolicy: "HighSpeed",
    },
    amount: amount,
}
return invoice;
}



