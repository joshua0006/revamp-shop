import "../css/CartButton.css";
import SendIcon from '@mui/icons-material/Send';

const CartButton = () => {

  return ( 

    <button className="button">
  <div className="outline"></div>
  <div className="state state--default">
    <SendIcon className="icon"/>
    <p>
      <span style={{ '--i': 0 }}>G</span>
      <span style={{ '--i': 1 }}>e</span>
      <span style={{ '--i': 2 }}>t</span> &nbsp;
      <span style={{ '--i': 3 }}>i</span>
      <span style={{ '--i': 4 }}>t</span> &nbsp;
      <span style={{ '--i': 5 }}>o</span>
      <span style={{ '--i': 6 }}>n</span> &nbsp;
      <span style={{ '--i': 7 }}>S</span>
      <span style={{ '--i': 8 }}>h</span>
      <span style={{ '--i': 9 }}>o</span>
      <span style={{ '--i': 10 }}>p</span>
      <span style={{ '--i': 11 }}>e</span>
      <span style={{ '--i': 12 }}>e</span>
    </p>
  </div>
  <div className="state state--sent">
    <SendIcon className="icon"/>
    <p>
    <span style={{ '--i': 5 }}>G</span>
      <span style={{ '--i': 6 }}>e</span>
      <span style={{ '--i': 7 }}>t</span> &nbsp;
      <span style={{ '--i': 8 }}>i</span>
      <span style={{ '--i': 9 }}>t</span> &nbsp;
      <span style={{ '--i': 10 }}>o</span>
      <span style={{ '--i': 11 }}>n</span> &nbsp;
      <span style={{ '--i': 12 }}>S</span>
      <span style={{ '--i': 13 }}>h</span>
      <span style={{ '--i': 14 }}>o</span>
      <span style={{ '--i': 15 }}>p</span>
      <span style={{ '--i': 16 }}>e</span>
      <span style={{ '--i': 17 }}>e</span>
    </p>
  </div>
</button>

   );
}
 
export default CartButton;