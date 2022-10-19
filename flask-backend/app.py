import json

from flask import Flask, jsonify
from flask_cors import CORS

from kubernetes import client, config

app = Flask(__name__)
cors = CORS()
cors.init_app(app)


@app.route("/", methods=["GET"], strict_slashes=False)
def index():
    result = "Welcome to Automating programmatic calls to the Kubernetes API with React and Flask"
    return jsonify(result)


@app.route("/namespace/<string:namespace>", methods=["POST"], strict_slashes=False)
def create_namespace(namespace: str):
    config.load_incluster_config()
    v1 = client.CoreV1Api()
    print("Creating namespace : ", namespace)
    namespace_config = client.V1Namespace(metadata=client.V1ObjectMeta(name=namespace))
    try:
        v1.create_namespace(namespace_config)
    except Exception as e:
        print("Exception is ", e, flush=True)
        print("Exception dir is", e.__dir__(), flush=True)
        print("e.body is : ", e.body, flush=True)
        error_code = json.loads(e.body).get("code")
        print("code in exception_body_json : ", error_code, flush=True)
        if error_code == 409:
            return jsonify(f"Namespace creation failed due to duplicate entry, {e}"), 409
        else:
            return jsonify(f"Namespace creation failed with exception, {e}"), 500

    return jsonify("Namespace created")


@app.route("/namespaces/", methods=["GET"], strict_slashes=False)
def list_namespace():
    config.load_incluster_config()
    v1 = client.CoreV1Api()
    v1_namespaces_list = v1.list_namespace(pretty=True)
    namespaces = [item.metadata.name for item in v1_namespaces_list.items]

    return jsonify(namespaces)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=True)
