import axios from "axios";
import { db } from "../db";
const btcHost = "127.0.0.1:2500/api/v1/";
const storeID = "";
import { newInvoice, CreatedInvoice } from "./schemas.greenfield";

const client = axios.create({
    baseURL: btcHost+'stores/'+storeID,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });



//adds invoice to database (associating with user_id)
//RETURNS checkout_url
//  (payment confirmed by webook)
export const buyOneMonth = async (user_id: number) => {
    let {invoice_id, checkout} = await sendInvoice("50.00");
    let new_invoice = await db.invoices.add(invoice_id, user_id);
    if(new_invoice) {
        return(checkout);
    } else {
        //
        return("error");
    }
}

export const buyThreeMonth = async (user_id: number) => {
    let {invoice_id, checkout} = await sendInvoice("125.00");
    let new_invoice = await db.invoices.add(invoice_id, user_id);
    if(new_invoice) {
        return(checkout);
    } else {
        //
        return("error");
    }

}


  //Adds new invoice to BTCPay & returns invoice_id and checkout URL
  export const sendInvoice = async (amount: string): Promise<CreatedInvoice> => {
    let invoice = newInvoice(amount)
    let res = await client.post('/invoices', invoice);  
    let invoice_id:string = res.data.id;
    let checkout:string = res.data.checkoutLink;
    let response: CreatedInvoice = {
        invoice_id,
        checkout,
    };
    return response;
}
