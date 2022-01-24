import React from "react";
import { 
    Form, FormControl, FormGroup, FormLabel 
} from "react-bootstrap";


export default function AddressForm(){
    return(
        <Form>
            <FormGroup className="mb-3" controlId="formBasicEmail">
                <FormLabel>Whatever you want from local stores, brought right to your door.</FormLabel>
                <FormControl type="text" placeholder="Enter your address" style={{'width': '35%'}}></FormControl>
                <Form.Text className="text-muted">
                    We'll never share your address with anyone else.
                </Form.Text>
            </FormGroup>
        </Form>
    )
}