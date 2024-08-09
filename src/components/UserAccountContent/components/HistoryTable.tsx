import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {
  normaliseSubscriptionDate
} from "@/utils/helpers/normaliseSubscriptionDate";
import {usePaymentHistory} from "@/utils/hooks/usePaymentHistory";
import {theme} from "@/shared";
import {usePurchaseHistory} from "@/utils/hooks/usePurchaseHistory";
import {PaymentHistoryItem} from "@/models/PaymentHistory";
import {PurchaseHistoryItem} from "@/models/PurchaseHistory";

type PaymentIDs = 'date' | 'amount' | 'notes';
type PurchaseIDs = 'date' | 'type' | 'product' | 'order_number';

interface PaymentColumn {
  id: PaymentIDs ;
  label: string;
  minWidth?: number;
  align?: 'left' | 'right';
  format?: (value: number) => string;
}

interface PurchaseColumn {
  id: PurchaseIDs;
  label: string;
  minWidth?: number;
  align?: 'left' | 'right';
  format?: (value: number) => string;

}

const paymentColumns: readonly PaymentColumn[] = [
  {
    id: 'date',
    label: 'Date',
    minWidth: 170
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'notes',
    label: 'Notes',
    minWidth: 170,
    align: 'left',
  },
];

const purchaseColumns: readonly PurchaseColumn[] = [
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
  },
  {
    id: 'type',
    label: 'Type',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'product',
    label: 'Product',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'order_number',
    label: 'Order Number',
    minWidth: 170,
    align: 'left',
  },
];

interface PaymentData {
  date: string;
  amount: string;
  notes: string;
  id: string;
}

interface PurchaseData {
  date: string;
  type: string;
  product: string;
  order_number: string;
  link: string;
  id: string;
}

function createPaymentData(date: string, amount: string, notes: string, id: string): PaymentData {
  return {date, amount, notes, id};
}

function createPurchaseData(date: string, type: string, product: string, order_number: string, id: string, link: string): PurchaseData {
  return {date, type, product, order_number, id, link}
}

const PaymentsTableHeadContent: React.FC = () => {
  return (
    <TableRow>
      {paymentColumns.map(column => (
        <TableCell
          key={column.id}
          align={column.align}
          style={{
            backgroundColor: 'white',
            color: 'var(--color-text-grey-dark)',
            borderColor: 'var(--color-border-grey-light)',
            paddingBottom: '12px',
            paddingTop: '14px',
            fontSize: '16px',
            [theme.breakpoints.down('sm')]: {
              fontSize: '14px',
            }
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  )
}

const PurchasesTableHeadContent: React.FC = () => {
  return (
    <TableRow>
      {purchaseColumns.map(column => (
        <TableCell
          key={column.id}
          align={column.align}
          style={{
            backgroundColor: 'white',
            color: 'var(--color-text-grey-dark)',
            borderColor: 'var(--color-border-grey-light)',
            paddingBottom: '12px',
            paddingTop: '14px',
            fontSize: '16px',
            [theme.breakpoints.down('sm')]: {
              fontSize: '14px',
            }
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  )
}

const PaymentsTableContent: React.FC<{paymentHistory:  PaymentHistoryItem[]}> = ({paymentHistory}) => {

  const paymentRows = paymentHistory.map((payment, index) => {
    return createPaymentData(
      normaliseSubscriptionDate(payment.date),
      payment.amount.toString() + '$',
      payment.notes,
      index.toString(),
    );
  });

  return (
    <>
      {paymentHistory.length > 0 ? (
        <TableBody>
          {paymentRows.map(row => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {paymentColumns.map(column => {
                  const value = row[column.id] as any;
                  return (
                    <TableCell
                      sx={{
                        borderColor: 'var(--color-border-grey-light)',
                        paddingBottom: '12px',
                        paddingTop: '14px',
                        fontSize: '16px',
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '12px',
                        }
                      }}
                      key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      ) : (
        <TableRow>
          <TableCell colSpan={3} sx={{
            color: 'var(--color-text-grey-dark)',
            fontSize: '16px',
            mt: 1.5,
            textAlign: 'center',
            border: 'none',
            [theme.breakpoints.down('sm')]: {
              fontSize: '14px',
            }

          }}>no payment history</TableCell>
        </TableRow>
      )}
    </>
  )
}

const PurchasesTableContent: React.FC<{purchaseHistory:   PurchaseHistoryItem[]}> = ({purchaseHistory}) => {

    const purchaseRows = purchaseHistory.map((purchase, index) => {
      return createPurchaseData(
        normaliseSubscriptionDate(purchase.date),
        purchase.type,
        purchase.title,
        purchase.order_number,
        index.toString(),
        purchase.link,
      );
    });

    return (
      <>
        {purchaseHistory.length > 0 ? (
          <TableBody>
            {purchaseRows.map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {purchaseColumns.map(column => {
                    const value = row[column.id] as any;
                    return (
                      <TableCell
                        sx={{
                          borderColor: 'var(--color-border-grey-light)',
                          paddingBottom: '12px',
                          paddingTop: '14px',
                          fontSize: '16px',
                          [theme.breakpoints.down('sm')]: {
                            fontSize: '12px',
                          }
                        }}
                        key={column.id} align={column.align}>
                        {/* check if column is product, if so, make it a link. check if column is type, if so, capitalize the first letter */}
                        {column.id === 'product' ? <a style={{color: 'var(--color-notofication-blue)'}} href={row.link}>{value}</a> : column.id === 'type' ? (value.charAt(0).toUpperCase() + value.slice(1)) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        ) : (
          <TableRow>
            <TableCell colSpan={4} sx={{
              color: 'var(--color-text-grey-dark)',
              fontSize: '16px',
              mt: 1.5,
              textAlign: 'center',
              border: 'none',
              [theme.breakpoints.down('sm')]: {
                fontSize: '14px',
              }

            }}>no purchase history</TableCell>
          </TableRow>
        )}
      </>
    )
}

const HistoryTable: React.FC<{isPayment: boolean}> = ({isPayment}) => {
  const {paymentHistory, isLoading: paymentsIsLoading, error: paymentsError} = usePaymentHistory();
  const {purchaseHistory, isLoading: purchasesIsLoading, error: purchaseError} = usePurchaseHistory();

  if (paymentsIsLoading || purchasesIsLoading) {
    return <span>Loading...</span>;
  }

  if (paymentsError !=null && isPayment) {
    return <span style={{color: 'var(--color-notofication-red)'}}>Error: {paymentsError}</span>;
  }

  if (purchaseError !=null && !isPayment) {
    return <span style={{color: 'var(--color-notofication-red)'}}>Error: {purchaseError}</span>;
  }

  return (
    <TableContainer sx={{maxHeight: 440, marginTop: '36px'}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          {
            isPayment ? <PaymentsTableHeadContent/> : <PurchasesTableHeadContent/>
          }
        </TableHead>
        {
          isPayment ? <PaymentsTableContent paymentHistory={paymentHistory}/> : <PurchasesTableContent purchaseHistory={purchaseHistory}/>
        }
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
