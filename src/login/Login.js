import { Button, Card, Form } from 'react-bootstrap'
import { Formik } from 'formik';



function Loginpage(props) {

  return (
    <>
    <div className='LoginPage'>
      <div className='container my-5 w-25'>
        <Card className='mainCard' >
          <Card.Body className='cardBody' >
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Please enter Email ID';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = '!! please enter password';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                  localStorage.setItem("token", "datas")
                setTimeout(() => {

                  props.history.push('/s')
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <h1>USER LOGIN</h1>
                  <Form.Group className="mb-2" controlId="formBasicName">
                    <Form.Label className='container d-flex justify-content-start' name='userName'>Username</Form.Label>
                    <Form.Control className='bg-light'
                      type="email"
                      name="email"
                      placeholder='enter username'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}  
                    />
                  </Form.Group>
                  {errors.email && touched.email && errors.email}
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label className='container d-flex justify-content-start'>Password</Form.Label>
                    <Form.Control
                      className='bg-light'
                      type="password"
                      name="password"
                      placeholder='enter password'

                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </Form.Group>
                  {errors.password && touched.password && errors.password}
                  <Button className='btn-lgin'
                    variant="primary"
                    type="submit" disabled={isSubmitting}>
                    Log In
                  </Button>
                </Form>
               
              )}
            </Formik>
          </Card.Body>
        </Card>

      </div>
      </div>
    </>

  );
}


export default Loginpage