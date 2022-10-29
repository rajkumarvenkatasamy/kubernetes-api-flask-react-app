# About the Application

The sample application is based on React JS as frontend and Flask as backend. 
You will see how input from the end-user can be accepted through the sample application’s UI. 
In this case, the input will be the name of a Kubernetes namespace and the given namespace can be programmatically created in the Kubernetes cluster using the Kubernetes API. 
You will also learn how to list the namespaces, including the one that you’ll create in the Kubernetes cluster within the same application’s UI. 

To implement the end-to-end functionality described above, the React app will call the API endpoints served by the Flask backend server. 
The Flask server uses the Kubernetes client library to manage or list the namespaces in the Kubernetes cluster. 
You can also extend the sample application to manage or interact with any Kubernetes resources in a similar manner.
