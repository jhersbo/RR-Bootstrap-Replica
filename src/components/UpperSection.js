import React from "react"
import '../App.css'
import { 
    Card
} from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import AddressForm from "./AddressForm"


function UpperSection(){
    return(
        <Card style={{
            'width': '100%',
            'padding': '100px',
            'border': 'none', 
            backgroundColor: 'rgb(222, 237, 214)',
            backgroundImage: 'url("https://www.instacart.com/image-server/x856/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg")',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            zIndex: '-1',
            }}>
            <CardHeader style={{'border': 'none', fontFamily: 'sans-serif',fontSize: '40px', fontWeight: '600', textAlign: 'left'}}>Groceries, ready meals, and more, for pickup or delivery</CardHeader>
            <AddressForm></AddressForm>
        </Card>
    )
}

export default UpperSection