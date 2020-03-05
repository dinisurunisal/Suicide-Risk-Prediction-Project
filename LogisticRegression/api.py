import sys
import traceback

import pandas as pd
from flask import Flask, jsonify, request
from sklearn.externals import joblib

app = Flask(__name__)
@app.route("/lr", methods=['POST'])
def predict():
    if logreg:
        try:
            json_ = request.json
            query_df = pd.DataFrame(json_)
            query = pd.get_dummies(query_df)
            prediction = list(logreg.predict(query))
            return jsonify({'prediction': str(prediction)})
        except:

            return jsonify({'trace': traceback.format_exc()})

    else:
        print('Train the model first')
        return 'Model not available'
# @app.route('/predict', methods=['POST'])
# def predict():
#      json_ = request.json
#      query_df = pd.DataFrame(json_)
#      query = pd.get_dummies(query_df)
#      prediction = list(logreg.predict(query))
#      return jsonify({'prediction': str(prediction)})

if __name__ == '__main__':
    try:
        port = int(sys.argv[1])  # This is for a command-line input
    except:
        port = 12345  # If you don't provide any port the port will be set to 12345

    logreg = joblib.load("model.pkl")  # Load "model.pkl"
    print('Model loaded')

    app.run(port=port, debug=True)


