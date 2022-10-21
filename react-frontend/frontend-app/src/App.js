import NamespaceForm from "./NamespaceForm";
import ListNamespaceForm from "./ListNamespaceForm";
import React from 'react';


function Divider() {
    return (<div className="ui divider"></div>);
}

function BlankDivider() {
    return (<br/>);
}

function App() {

  return (
    <div>
        <BlankDivider></BlankDivider>
        <center>
        <h1>
          Create a Namespace
        </h1>
        </center>
        <NamespaceForm></NamespaceForm>

        <BlankDivider></BlankDivider>
        <BlankDivider></BlankDivider>
        <BlankDivider></BlankDivider>
        <BlankDivider></BlankDivider>

        <Divider></Divider>

        <center>
        <h1>
            Existing Namespaces in the Kubernetes Cluster
        </h1>
        </center>
        <BlankDivider></BlankDivider>
        <ListNamespaceForm></ListNamespaceForm>
        <Divider></Divider>

    </div>

  );
}


export default App;
