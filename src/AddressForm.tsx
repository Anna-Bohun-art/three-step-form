import { FormWrapper } from "./FormWrapper.tsx";
type AddressData = {
    street: string,
    city: string,
    state: string,
    age: string,
    zip: string,
}
type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>)=> void
}
export function AddressForm({
    street,
    city,
    state,
    zip,
    updateFields
}: AddressFormProps){
    
    return(<>
    <FormWrapper title="Adress Details">
        <label>Street</label>
        <input autoFocus required type="text" value={street} onChange={(e)=>{updateFields({street: e.target.value})}}/>
        <label>City</label>
        <input required type="text" value={city} onChange={(e)=> {updateFields({city: e.target.value})}}/>
        <label>State</label>
        <input required  type="text" value={state} onChange={(e)=> {updateFields({state: e.target.value})}}/>
        <label>Zip</label>
        <input required  type="text" value={zip} onChange={(e)=> {updateFields({zip: e.target.value})}}/>
    </FormWrapper>
    </>
    )
}