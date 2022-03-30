import { Form, Formik } from "formik"
import { Button, Col, Row } from "react-bootstrap"
import * as yup from "yup"
import FieldControl from "../FieldControl/FieldControl"

const validationSchema = yup.object().shape({
    goal: yup.string().required(),
    gender: yup.string().required(),
    age: yup.string().required(),
    height: yup.number().required(),
    weight: yup.number().required(),
    activity: yup.string().required()
})

const initialValues = {
    goal: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    heightUnit: 0,
    weightUnit: 0,
    activity: "",
}

const Calculator = ({ onSubmit }) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({ dirty }) => (
            <Form>
                <FieldControl
                    as="select"
                    name="goal"
                    placeholder="Goal..."
                />                               
                <Row noGutters>
                    <Col md={6}>
                        <FieldControl
                            as="select"
                            name="gender"
                            placeholder="Gender..."
                        /> 
                    </Col>
                    <Col md={6} className="pl-0 pl-md-3">
                        <FieldControl
                            name="age"
                            type="number"
                            placeholder="Age"
                        />
                    </Col>
                </Row>
                <Row noGutters>
                    <Col xs={7}>
                        <FieldControl
                            name="height"
                            type="number"
                            placeholder="Height"
                            step={.1}
                        />
                    </Col>
                    <Col xs={5} className="pl-3">
                        <FieldControl as="select" name="heightUnit" />
                    </Col>
                </Row>
                <Row noGutters>
                    <Col xs={7}>
                        <FieldControl
                            name="weight"
                            type="number"
                            placeholder="weight"
                            step={.1}
                        />
                    </Col>
                    <Col xs={5} className="pl-3">
                        <FieldControl as="select" name="weightUnit" />
                    </Col>
                </Row>
                <FieldControl
                    as="select"
                    name="activity"
                    placeholder="Activity..."
                />
                <div className="text-right">
                    <Button variant="success" size="lg" type="submit" className="rounded" style={{ fontWeight: 300 }} disabled={!dirty}>
                        {"Calculate"}
                    </Button>
                </div>
            </Form>
        )}
    </Formik>
)

export default Calculator
