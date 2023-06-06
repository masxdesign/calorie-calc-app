import { ErrorMessage, Field, useField } from "formik"
import { FormControl, FormGroup } from "react-bootstrap"
import classNames from 'classnames'
import { options } from "../../variables"

const FieldControl = ({ as, name, className, placeholder, ...props }) => {
    const [_, meta] = useField(name)
  
    const { touched, error } = meta
  
    return (
      <FormGroup>
        <Field 
            as={as}
            name={name} 
            className={classNames('form-control', className, { "is-invalid": touched && error })}
            placeholder={as === "select" ? "": placeholder}
            {...props}
        >
            {(as === "select" && options[name]) ? (
                <>
                    {placeholder && (
                        <option value="">
                            {placeholder}
                        </option>
                    )}
                    {options[name].map((item, index) => (
                        <option key={item} value={index}>
                            {item}
                        </option>
                    ))}
                </>
            ) : (
                null
            )}
        </Field>
        <FormControl.Feedback type="invalid">
          <ErrorMessage name={name} />
        </FormControl.Feedback>
      </FormGroup>
    )
}

export default FieldControl