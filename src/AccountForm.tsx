import { FormWrapper } from "./FormWrapper.tsx";
type AccountFormData = {
    email: string,
    password: string,
}
type AccountFormProps = AccountFormData & {
    updateFields: (fields: Partial<AccountFormData>)=> void
}
export function AccountForm({email, password, updateFields}: AccountFormProps){
    return (
    <>
        <FormWrapper title="Account Details">
            <label>Email</label>
            <input autoFocus required type="email" value={email} onChange={(e)=> {updateFields({email: e.target.value})}}/>
            <label>Password</label>
            <input required type="password" value={password} onChange={(e)=> {updateFields({password: e.target.value})}}/>
        </FormWrapper>
    </>
    )
}