import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

// type Props = 
//     | { type: SectionType.From, loading?: undefined, onChange: (value: string) => void, value: string }
//     | { type: SectionType.To, loading?: boolean, onChange: (value: string) => void, value: string }

interface Props {
    type: SectionType,
    loading?: boolean,
    onChange: (value: string) => void,
    value: string,
    placeholder: string
}

const commonStyles = { border: 0, height: '200px'}

export const TextArea = ({ type, placeholder, loading, value, onChange}: Props) => {
    const styles = type === SectionType.From
        ? commonStyles
        : { ...commonStyles, backgroundColor: '#f5f5f5' }

    return(
        <Form.Control
            autoFocus={type === SectionType.From}
            as='textarea'
            placeholder={placeholder}
            style={styles} 
        />
    )
}