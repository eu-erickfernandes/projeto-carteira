export default function Page(){
    return (
        <></>
    );
}

// import Link from "next/link";
// import Form from "next/form";
// import { createAccountAction, createCreditCardAction, createTransactionAction } from "./actions";
// import { getAccount, getAccounts } from "./data-access/account";
// import { getTransactions } from "./data-access/transaction";
// import { getCreditCards } from "./data-access/creditCard";

// export default async function Page() {

//   const accounts = await getAccounts();
//   const creditCards = await getCreditCards();
//   const transactions = await getTransactions();

//   return (
//     <>
//       <h1>Financeiro</h1>

//       <h2>Contas</h2>

//       <Form action={ createAccountAction }>
//         <div>
//           <label htmlFor="name">Nome</label>

//           <input
//             id="name" 
//             max="50"
//             name="name" 
//             required
//             type="text"
//           />
//         </div>

//         <button type="submit">Salvar</button>
//       </Form>

//       <ul>
//         {accounts.map((account) => (
//           <li key={  account.id  }>
//             <Link href={`/contas/${account.id}`}>
//               <p>{  account.name  }</p>
//             </Link>
//           </li>
//         ))}

//         <li>CC Inter</li>
//         <li>Poupança BB</li>
//         <li>Poupança Caixa</li>
//       </ul>

//       <h2>Cartões de Crédito</h2>

//       <Form action={ createCreditCardAction }>
//         {/* <div>
//           <label htmlFor="name">Nome</label>

//           <input
//             id="name" 
//             max="50"
//             name="name" 
//             required
//             type="text"
//           />
//         </div> */}

//         <div>
//           <label htmlFor="account">Conta</label>

//           <select
//             id="account" 
//             name="account" 
//             required
//           >
//             {accounts.map((account) => (
//               <option value={ account.id }>{ account.name }</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label htmlFor="limit">Limite</label>

//           <input
//             id="limit" 
//             min="0"
//             name="limit" 
//             required
//             type="number"
//           />
//         </div>

//         <div>
//           <label htmlFor="expiresAt">Vencimento</label>

//           <input
//             id="expiresAt" 
//             name="expiresAt" 
//             required
//             type="date"
//           />
//         </div>

//         <button type="submit">Salvar</button>
//       </Form>

//       <ul>
//         {creditCards && creditCards.map((creditCard) => (
//           <li key={ creditCard.id }>
//             <Link href={`/cartoes/${creditCard.id}`}>
//               <p>{ getAccount(creditCard.accountId).then((account) => account?.name) }</p>
//             </Link>
//           </li>
//         ))}

//         <li>Cartão Inter</li>
//         <li>Cartão Luiza</li>
//       </ul>

//       <h2>Investimentos</h2>

//       <ul>
//         <li>CDB Resgate Imediato</li>
//         <li>CDB Meu Porquinho</li>
//         <li>CDB Mais Limite</li>
//         <li>FI Inter FIC FIRF</li>
//         <li>Tesouro IPCA 2029</li>
//       </ul>

//       <h2>Movimentações</h2>

//       <Form action={ createTransactionAction }>
//         <div>
//           <label htmlFor="account">Conta</label>

//           <select name="account" id="account" required>
//             {accounts.map((account) => (
//               <option key={ account.id } value={ account.id }>
//                 { account.name }
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label htmlFor="description">Descrição</label>
          
//           <input
//             id="description" 
//             max="50"
//             name="description" 
//             required
//             type="text"
//           />
//         </div>

//         <div>
//           <label htmlFor="ammount">Valor</label>
          
//           <input
//             id="ammount" 
//             min="0"
//             name="ammount" 
//             required
//             type="number"
//           />
//         </div>

//         <div>
//           <label htmlFor="date">Data</label>

//           <input
//             id="date" 
//             name="date" 
//             required
//             type="date"
//           />
//         </div>

//         <button type="submit">Salvar</button>
//       </Form>

//       <ul>
//         {transactions && transactions.map((transaction) => (
//           <li key={ transaction.id }>
//             <Link href={`/cartoes/${transaction.id}`}>
//               <p>{ transaction.description }</p>
//               <p>{ transaction.ammount.toString() }</p>
//               <p>{ getAccount(transaction.accountId).then((account) => account?.name) }</p>
//             </Link>
//           </li>
//         ))}

        
//         <li>
//           <p>Araújo</p>
//           <p>R$ 50,00</p>
//           <p>CC Inter</p>
//         </li>
//       </ul>

//       <h2>Objetivos</h2>

//       <ul>
//         <li>
//           <p>Viagem</p>
//           <p>Saldo: R$ 600,00</p>
//           <p>Objetivo: R$ 5000,00</p>
//         </li>

//         <li>
//           <p>Fundo de Emergência</p>
//           <p>Saldo: R$ 600,00</p>
//           <p>Objetivo: R$ 10.000,00</p>
//         </li>
//       </ul>
//     </>
//   );
// }
