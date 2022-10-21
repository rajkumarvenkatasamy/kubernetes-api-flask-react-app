import React from "react";

const NamespacesResult  = (props) => {

    return (
        <div>
        {props.namespaces && props.namespaces.map(namespace =>{
                return (
                    <div key={namespace}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{namespace}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                )
            })
        }
        </div>
    )
}

export default NamespacesResult;