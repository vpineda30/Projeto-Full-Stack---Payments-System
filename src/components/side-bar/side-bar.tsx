import './side-bar.css'

export function SideBar() {
  return (
    <aside className="aside">
      <nav>
        <div className='logo'>
          <h1>Lucy</h1>
          <i className="fa-solid fa-chart-line"></i>
        </div>
        <ul>
          <li>
            <i className="fa-solid fa-house"></i>
            <a href="">Home</a>
          </li>
          <li>
            <i className="fa-solid fa-coins"></i>
            <a href="">New Transaction</a>
          </li>
          <li>
            <i className="fa-solid fa-handshake"></i>
            <a href="">My Transactions</a>
          </li>
          <li>
            <i className="fa-solid fa-user"></i>
            <a href="">Account</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}