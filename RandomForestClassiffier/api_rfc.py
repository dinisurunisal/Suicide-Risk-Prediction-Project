# import sys
# import traceback
#
# import pandas as pd
# from flask import Flask, jsonify, request
# from sklearn.externals import joblib
#
# from RandomForestClassiffier.randomF import rfc
#
# app = Flask(__name__)
# @app.route("/rfc", methods=['POST'])
# def predict():
#     if rfc:
#         try:
#             json_ = request.json
#             query_df = pd.DataFrame(json_)
#             query = pd.get_dummies(query_df)
#             prediction = list(rfc.predict(query))
#             return jsonify({'prediction': str(prediction)})
#         except:
#
#             return jsonify({'trace': traceback.format_exc()})
#
#     else:
#         print('Train the model first')
#         return 'Model not available'
#
# if __name__ == '__main__':
#     try:
#         port = int(sys.argv[1])  # This is for a command-line input
#     except:
#         port = 12345  # If you don't provide any port the port will be set to 12345
#
#     logreg = joblib.load("model.pkl")  # Load "model.pkl"
#     print('Model loaded')
#
#     app.run(port=port, debug=True)
import os
import pickle

from flask import Flask, jsonify, request
from flask_restful import Api, Resource
from SVM_kernal_nonlinear.SVMmodelP import clf
from sklearn.externals import joblib

app = Flask(__name__)
api = Api(app)

model = pickle.load(open('model.pkl', 'rb'))


class MakePrediction(Resource):
    @staticmethod
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

        prediction = model.predict([[Age, Gender,Religon,Race,Nature_Of_Occupation,Civil_Status,Education_Level,Reason,Lifetime_Psychiatric_Hospitalizations,Past_Suicide_Attempts,
                                     Any_suicidal_thoughts_mentioned,Self_Injurious_Behaviour,Psychiatric_Disorders,Past_Illnesses,Alcohol_drug_Consumption,Anger,Sleep_Problem,
                                     Social_Iscolation,Sad_Weary,Humilated]])[0]
        if prediction == 0:
            predicted_class = 'Negative'
        else:
            predicted_class = 'Positive'

        return jsonify({
            'Prediction': predicted_class
        })


api.add_resource(MakePrediction, '/predict')


if __name__ == '__main__':
    app.run(debug=True)