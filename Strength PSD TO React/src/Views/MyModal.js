import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { addToCart,deleteItem } from "../Redux/CartSlice.js";
function MyModal(props) {
  const items = useSelector((state) => state.cart.value);
  console.log(items)
  const Total = items.reduce(
    (totalPrice, item) => totalPrice + item.price,
    0
   );
  console.log(Total);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.icon}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Button
          variant="primary"
          onClick={() =>
            // dispatch(addToCart("burger",456,""))
            dispatch(addToCart( {name:"hamza",price:456,desc:"it is very expensive"}))
          }
        >
          add
        </Button>
        {items.map((item) => (
          <Table striped bordered hover key={item.id}>
            <thead>
              <tr>
                <th>ID</th>
                <th> Name</th>
                <th>PRICE</th>
                <th>IMAGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            </tbody>
            <Button
              variant="primary"
              onClick={() => dispatch(deleteItem(Number(item.id)))}
            >
              delete
            </Button>
          </Table>
        ))}
        <div className="total-price">
          <h4>YOUR TOTAL EXPENSE</h4>
          <p>Rs {Total} ONLY</p> 
        </div>
      </Modal>
    </>
  );
}
export default MyModal;
