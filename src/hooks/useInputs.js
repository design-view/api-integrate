import { useState } from 'react';
function useInputs(initialForm){
    const [ form, setForm ] = useState();
    const onChange = (e) => {
        const { name, value } = e.targer;
        setForm( form => ({...form, [name]: value})); 
    }
    const reset = () => setForm(initialForm);
    return [form, onChange, reset];
}
export default useInputs;