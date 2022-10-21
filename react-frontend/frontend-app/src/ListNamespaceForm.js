import React, {useEffect, useState} from 'react';
import NamespacesResult from "./NamespacesResult";

function ListNamespaceForm() {

        const [namespaces, setNamespaces] = useState([]);

        // Modify the current state by setting the new data to
        // the response from the backend
        useEffect(()=> {
            fetch('http://localhost:5000/namespaces/', {
                'method': 'GET',
                'mode': 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => setNamespaces(response))
                .catch(error => console.log(error))

        }, [])

        return (
            <div>
                <NamespacesResult namespaces={namespaces}/>
            </div>
        );
}

export default ListNamespaceForm;