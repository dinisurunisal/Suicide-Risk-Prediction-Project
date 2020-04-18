import os
import numpy as np
from flask import Flask, jsonify, request
import pickle
from flask import Flask, render_template, request


app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return 'You should go to /predict'

@app.route('/predict', methods=['POST'])
def result():
    posted_data = request.get_json()
    to_predict = np.array(posted_data).reshape(1, 20)
    model = pickle.load(open("model.pkl", "rb"))
    prediction = model.predict(to_predict)
    print('Prediction done', prediction)
    return str(prediction[0])
    # if prediction == 0:
    #     predicted_class = 'Negative'
    # else:
    #     predicted_class = 'Positive'
    #
    # return jsonify({
    #     'Prediction': predicted_class
    # })

def ValuePredictor(to_predict_list):
    to_predict = np.array(to_predict_list).reshape(1, 20)

    loaded_model = pickle.load(open("model.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]


@app.route('/predict', methods=['POST'])
def result():
    if request.method == 'POST':
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(int, to_predict_list))
        result = ValuePredictor(to_predict_list)
        if int(result) == 1:
            prediction = 'Have a Risk'
        else:
            prediction = 'Do not have a risk'
    return render_template("result.html", prediction=prediction)

if __name__ == '__main__':
    app.debug = True

    print("Current working dir : %s" % os.getcwd())

    app.run(port=5555)