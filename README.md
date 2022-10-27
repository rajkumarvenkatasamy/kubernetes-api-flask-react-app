# About the Application

This sample application is based on React JS as frontend and Flask as backend. 
The core idea of the sample application is covered earlier. Based on that idea as a foundation, 
you will see how input from the end-user can be accepted through the sample application’s user interface, 
in this case, the input will be the name of a Kubernetes namespace and the given namespace can be programmatically 
created in the Kubernetes cluster using the Kubernetes API. 
You will also learn how to list the namespaces, including the one that’s been created by you in the Kubernetes cluster
within the same application’s UI.

To implement the above-listed end-to-end functionality, the react app will call the API endpoints served by the 
Flask backend server. The Flask server uses the Kubernetes Client library to manage or list the namespaces in the 
Kubernetes cluster. You can extend the sample application to manage or interact with any Kubernetes resources in a
similar manner. 
