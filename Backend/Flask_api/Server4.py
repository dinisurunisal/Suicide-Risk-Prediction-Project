import pickle
import sys
import traceback

import pandas as pd
from flask import Flask, jsonify, request
from sklearn.externals import joblib


app = Flask(__name__)

@app.route('/')
def homepage():
    return 'You should go to /predict'


@app.route("/predict", methods=['POST'])
def predict():
        try:
            json_ = request.get_json()
            query_df = pd.DataFrame(json_)
            query = pd.get_dummies(query_df)
            model = pickle.load(open('model.pkl', 'rb'))
            prediction = model.predict(query)
            return jsonify({'prediction': str(prediction)})
        except:

            return jsonify({'trace': traceback.format_exc()})


if __name__ == '__main__':


    app.run(port=5000, debug=True)
