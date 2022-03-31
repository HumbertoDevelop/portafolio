import React from 'react'

const FormContact = ({phone,email,street}) => {
  return (
    <div className="relative mb-4">
    <h3>
        <b>
            {" "}
            <address> Phone: </address>
        </b>
    </h3>
    <h4>{phone}</h4>
    <h3>
        <b>
            {" "}
            <address> Email: </address>{" "}
        </b>
    </h3>
    <h4>{email}</h4>
    <h3>
        <b>
            {" "}
            <address> Address: </address>{" "}
        </b>
    </h3>
    <h4>{street}</h4>
</div>
  )
}

export default FormContact