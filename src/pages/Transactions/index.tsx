import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from "./style";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/02/2025</td>
            </tr>
            <tr>
              <td>Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 50,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/02/2025</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
