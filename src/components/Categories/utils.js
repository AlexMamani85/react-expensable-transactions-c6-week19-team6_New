import { parseISO } from "date-fns";
import { categoryColors, categoryIcons } from "../../utils";

export const getMonthlyData = (categories, date, type) => {
  return categories
    .filter((cat) => cat["transaction_type"] === type)
    .map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
        Icon: categoryIcons[cat.icon],
        color: categoryColors[cat.color],
        amount: cat.transactions.reduce((acc, cur) => {
          const trxDate = parseISO(cur.date);
          const trxYear = trxDate.getFullYear();
          const trxMonth = trxDate.getMonth();
          if (trxYear === date.year && trxMonth === date.month) {
            return acc + cur.amount;
          } else {
            return acc;
          }
        }, 0),
      };
    });
};

export const getMonthlyDataForTransactions = (categories, date) => {


  // TODO {id: 449, name: 'salary', transaction_type: 'income', color: 'red', icon: 'bank', …}
  // ! ASI TERMINA: {id: 449, name: 'salary', color: '#EF4444', amount: 3000, Icon: ƒ}

  //  { transaction_type: 'income', color: 'red', icon: 'bank', …}
  //  {  color: '#EF4444', amount: 3000, Icon: ƒ}

  return categories
    .map((cat) => {
      const colorText = cat['transaction_type'] === "expense" ? "red" : "green"
      return {
        id: cat.id,
        name: cat.name,
        Icon: categoryIcons[cat.icon],
        color: categoryColors[cat.color],
        colorText: colorText,
        transaction_type: cat['transaction_type'],
        amount: cat.transactions.reduce((acc, cur) => {
          const trxDate = parseISO(cur.date);
          const trxYear = trxDate.getFullYear();
          const trxMonth = trxDate.getMonth();
          if (trxYear === date.year && trxMonth === date.month) {
            return acc + cur.amount;
          } else {
            return acc;
          }
        }, 0),
      };
    });
};
