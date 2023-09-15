import {Form} from 'react-bootstrap'
import { SUPPORTED_LAGUAGES } from '../constants'

export const LanguageSelector = ({onChange}) => {
    return (
        <Form.Select aria-label='Selecciona el idioma'>
            {Object.entries(SUPPORTED_LAGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}