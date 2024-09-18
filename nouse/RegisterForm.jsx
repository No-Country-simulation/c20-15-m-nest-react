import "../../styles/RegisterForm.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
} from "mdb-react-ui-kit";

function RegisterForm() {
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center align-items-center m-5">
        <MDBCard>
          <MDBCardBody className="px-4">
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
              Formulario de Registro
            </h3>

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Nombre"
                  size="lg"
                  id="form1"
                  type="text"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Apellido"
                  size="lg"
                  id="form2"
                  type="text"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Telefono"
                  size="lg"
                  id="form3"
                  type="rel"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  size="lg"
                  id="form4"
                  type="email"
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="DNI-CI"
                  size="lg"
                  id="form5"
                  type="text"
                />
              </MDBCol>
            </MDBRow>

            <MDBSelect
              label="Tipo de cuenta"
              className="mb-4"
              size="lg"
              data={[
                { text: "--", value: 1, disabled: true },
                { text: "Empresarial", value: 2 },
                { text: "Personal", value: 3 },
              ]}
            />
            <MDBBtn className="mb-4" size="lg">
              Registrarse
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterForm;