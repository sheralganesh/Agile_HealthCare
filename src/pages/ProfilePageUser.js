import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function ProfilePageUser() {
  const [validated, setValidated] = useState(false);
  const [submit, setsubmit] = useState("Submit Form");
  const [disability1, setdisability1] = useState("disable");
  const [disability2, setdisability2] = useState("disable");
  const [disability3, setdisability3] = useState("disable");

  const [data1, setdata1] = useState({});
  const [data2, setdata2] = useState({});
  const [data3, setdata3] = useState({});

  const onChangeData1 = (e) => {
    let obj = { [`${e.target.name}`]: e.target.value };
    setdata1({ ...data1, ...obj });
    console.log(data1);
  };

  const onChangeData2 = (e) => {
    let obj = { [`${e.target.name}`]: e.target.value };
    setdata2({ ...data2, ...obj });
    console.log(data2);
  };

  const onChangeData3 = (e) => {
    let obj = { [`${e.target.name}`]: e.target.value };
    setdata3({ ...data3, ...obj });
    console.log(data3);
  };

  useEffect(() => {
    const { ln, fn, mail, pn } = data1;
    if (ln && fn && mail && pn) {
      setdisability1("");
    } else {
      setdisability1("disable");
    }
  }, [data1]);

  useEffect(() => {
    const { add1, add2, ct, st, zp } = data2;
    if (add1 && add2 && ct && st && zp) {
      setdisability2("");
    } else {
      setdisability2("disable");
    }
  }, [data2]);

  useEffect(() => {
    const { add1, add2, ct, st, zp } = data3;
    // console.log(add1, add2, ct, st, zp);
    if (add1 && add2 && ct && st && zp) {
      setdisability3("");
    } else {
      setdisability3("disable");
    }
  }, [data3]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setsubmit("Edit");
    }
    setValidated(true);
  };

  const [btn1toggle1, setbtn1toggle1] = useState(false);
  const [btn1toggle2, setbtn1toggle2] = useState(false);
  const [btn1toggle3, setbtn1toggle3] = useState(false);

  const toggle1 = () => {
    if (btn1toggle1) {
      setbtn1toggle1(false);
    } else {
      setbtn1toggle1(true);
    }
  };

  const toggle2 = () => {
    if (btn1toggle2) {
      setbtn1toggle2(false);
    } else {
      setbtn1toggle2(true);
    }
  };

  const toggle3 = () => {
    if (btn1toggle3) {
      setbtn1toggle3(false);
    } else {
      setbtn1toggle3(true);
    }
  };

  return (
    <div className="mx-5  mt-0 py-5 pt-3">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="main_dev"
      >
        <Card className=" p-4">
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-dark"
              onClick={toggle1}
              disabled={disability1}
            >
              {btn1toggle1 ? "Edit" : "Save"}
            </Button>
          </div>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom01"
              className="my-2"
            >
              <Form.Control
                required
                type="text"
                name="ln"
                placeholder="Last Name"
                onChange={onChangeData1}
                disabled={btn1toggle1 ? "disabled" : ""}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom02"
              className="my-2"
            >
              <Form.Control
                required
                type="text"
                name="fn"
                placeholder="First Name"
                onChange={onChangeData1}
                disabled={btn1toggle1 ? "disabled" : ""}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom03"
              className="my-2"
            >
              <Form.Control
                type="email"
                placeholder="Email"
                required
                name="mail"
                onChange={onChangeData1}
                disabled={btn1toggle1 ? "disabled" : ""}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Control
                type="number"
                placeholder="Phone No"
                required
                name="pn"
                className="my-2"
                onChange={onChangeData1}
                disabled={btn1toggle1 ? "disabled" : ""}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Phone Number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Card>

        <Card className="p-4 mt-3">
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-dark"
              onClick={toggle2}
              disabled={disability2}
            >
              {btn1toggle2 ? "Edit" : "Save"}
            </Button>
          </div>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                name="add1"
                placeholder="Address 1"
                className="my-2"
                onChange={onChangeData2}
                disabled={btn1toggle2 ? "disabled" : ""}
              />

              <Form.Control.Feedback>
                {" "}
                Please provide a valid Address. !
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Control
                required
                type="text"
                name="add2"
                placeholder="Address 2"
                className="my-2"
                onChange={onChangeData2}
                disabled={btn1toggle2 ? "disabled" : ""}
              />
              <Form.Control.Feedback>
                {" "}
                Please provide a valid Address.!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                name="ct"
                placeholder="city"
                className="my-2"
                onChange={onChangeData2}
                disabled={btn1toggle2 ? "disabled" : ""}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                name="st"
                placeholder="State"
                className="my-2"
                onChange={onChangeData2}
                disabled={btn1toggle2 ? "disabled" : ""}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control
                required
                type="number"
                name="zp"
                placeholder="Zip "
                className="my-2"
                onChange={onChangeData2}
                disabled={btn1toggle2 ? "disabled" : ""}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Card>
        <Card className="p-4 mt-3">
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-dark"
              onClick={toggle3}
              disabled={disability3}
            >
              {btn1toggle3 ? "Edit" : "Save"}
            </Button>
          </div>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Address 1"
                className="my-2"
                onChange={onChangeData3}
                name="add1"
                disabled={btn1toggle3 ? "disabled" : ""}
              />

              <Form.Control.Feedback>
                {" "}
                Please provide a valid Address. !
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Control
                required
                type="text"
                placeholder="Address 2"
                name="add2"
                onChange={onChangeData3}
                className="my-2"
                disabled={btn1toggle3 ? "disabled" : ""}
              />
              <Form.Control.Feedback>
                {" "}
                Please provide a valid Address.!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="city"
                name="ct"
                onChange={onChangeData3}
                className="my-2"
                disabled={btn1toggle3 ? "disabled" : ""}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="State"
                name="st"
                onChange={onChangeData3}
                className="my-2"
                disabled={btn1toggle3 ? "disabled" : ""}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control
                required
                type="number"
                placeholder="Zip "
                name="zp"
                onChange={onChangeData3}
                className="my-2"
                disabled={btn1toggle3 ? "disabled" : ""}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Card>

        <Button type="submit">{submit}</Button>
      </Form>
    </div>
  );
}

export default ProfilePageUser;
