import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th> Título </th>
            <th> Valor </th>
            <th> Categoria </th>
            <th> Data </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td> 20/12/2020</td>
          </tr>
          <tr>
            <td>Hospedagem</td>
            <td className="withdraw"> -R$ 1000,00</td>
            <td>Site</td>
            <td> 21/12/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}