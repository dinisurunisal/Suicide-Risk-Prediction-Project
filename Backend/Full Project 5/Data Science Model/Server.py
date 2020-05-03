import os
import sys
import traceback
import pickle


from flask import Flask, jsonify, request
import pickle
from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app, origins="http://localhost:8100", allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Origin"],
    supports_credentials=True)

@app.route('/')
@app.route('/index')
def index():
    return 'You should go to /predict'


@app.route('/predict', methods=['POST'])
def post():
    posted_data = request.get_json()
    Age = posted_data['Age']
    Gender = posted_data['Gender']
    Religon = posted_data['Religon']
    Race = posted_data['Race']
    Nature_Of_Occupation = posted_data['Nature_Of_Occupation']
    Civil_Status = posted_data['Civil_Status']
    Education_Level = posted_data['Education_Level']
    Reason = posted_data['Reason']
    Lifetime_Psychiatric_Hospitalizations = posted_data['Lifetime_Psychiatric_Hospitalizations']
    Past_Suicide_Attempts = posted_data['Past_Suicide_Attempts']
    Any_suicidal_thoughts_mentioned = posted_data['Any_suicidal_thoughts_mentioned']
    Self_Injurious_Behaviour = posted_data['Self_Injurious_Behaviour']
    Psychiatric_Disorders = posted_data['Psychiatric_Disorders']
    Past_Illnesses = posted_data['Past_Illnesses']
    Alcohol_drug_Consumption = posted_data['Alcohol_drug_Consumption']
    Anger = posted_data['Anger']
    Sleep_Problem = posted_data['Sleep_Problem']
    Social_Iscolation = posted_data['Social_Iscolation']
    Sad_Weary = posted_data['Sad_Weary']
    Humilated = posted_data['Humilated']

    model = pickle.load(open('model.pkl', 'rb'))

    prediction = model.predict([[Age, Gender, Religon, Race, Nature_Of_Occupation, Civil_Status, Education_Level,
                                 Reason, Lifetime_Psychiatric_Hospitalizations, Past_Suicide_Attempts,
                                 Any_suicidal_thoughts_mentioned, Self_Injurious_Behaviour, Psychiatric_Disorders,
                                 Past_Illnesses, Alcohol_drug_Consumption, Anger, Sleep_Problem,
                                 Social_Iscolation, Sad_Weary, Humilated]])[0]
    print(posted_data)

    if prediction == 0:
        predicted_class = 'Negative'
    else:
        predicted_class = 'Positive'

    return jsonify({
        'Prediction': predicted_class
    })


if __name__ == '__main__':
    app.debug = True

    print("Current working dir : %s" % os.getcwd())

    app.run(port=5000)