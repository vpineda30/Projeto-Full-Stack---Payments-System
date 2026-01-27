import { SideBar } from "../../components/side-bar/side-bar";
import './dashboard.css'

export function Dashboard() {
  return (
    <div className="container">
      <SideBar />
      <main>
        <div className="container">
          <div className="home-title">
            <h1 className="home-title">Quick Analysis</h1>
          </div>

          <div className="analytcs">
            <div className="balance">
              <h3>My Balance</h3>
              <h2>R$0.00</h2>
            </div>

            <div className="turnover">
              <h3>Total Turnover</h3>
              <h2>R$0.00</h2>
            </div>

            <div className="transactions">
              <h3>Completed Transactions</h3>
              <h2>0</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}