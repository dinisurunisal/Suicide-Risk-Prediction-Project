# Import libraries
import numpy as np
from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)
# Load the model
model = pickle.load(open('model.pkl','rb'))

@app.route('/predict',methods=['POST'])
def predict():
    # Get the data from the POST request.
    Age = int(request.form.get("Age", False))
    Gender = int(request.form.get("Gender", False))
    Religon = int(request.form.get("Religon", False))
    Race = int(request.form.get("Race", False))
    Nature_Of_Occupation = int(request.form.get("Nature_Of_Occupation", False))
    Civil_Status = int(request.form.get("Civil_Status", False))
    Education_Level = int(request.form.get("Education_Level", False))
    Reason = int(request.form.get("Reason", False))
    Lifetime_Psychiatric_Hospitalizations = int(request.form.get("Lifetime_Psychiatric_Hospitalizations", False))
    Past_Suicide_Attempts = int(request.form.get("Past_Suicide_Attempts", False))
    Any_suicidal_thoughts_mentioned = int(request.form.get("Any_suicidal_thoughts_mentioned", False))
    Self_Injurious_Behaviour = int(request.form.get("Self_Injurious_Behaviour", False))
    Psychiatric_Disorders = int(request.form.get("Psychiatric_Disorders", False))
    Past_Illnesses = int(request.form.get("Past_Illnesses", False))
    Alcohol_drug_Consumption = int(request.form.get("Alcohol_drug_Consumption", False))
    Anger = int(request.form.get("Anger", False))
    Sleep_Problem = int(request.form.get("Sleep_Problem", False))
    Social_Iscolation = int(request.form.get("Social_Iscolation", False))
    Sad_Weary = int(request.form.get("Sad_Weary", False))
    Humilated = int(request.form.get("Humilated", False))

    data = [Age, Gender, Religon, Race, Nature_Of_Occupation, Civil_Status, Education_Level,
                                 Reason, Lifetime_Psychiatric_Hospitalizations, Past_Suicide_Attempts,
                                 Any_suicidal_thoughts_mentioned, Self_Injurious_Behaviour, Psychiatric_Disorders,
                                 Past_Illnesses, Alcohol_drug_Consumption, Anger, Sleep_Problem,
                                 Social_Iscolation, Sad_Weary, Humilated]
    print(data)
    # query = request.get_json(force=True)
    # Make prediction using model loaded from disk as per the data.
    prediction = model.predict([data])
    # Take the first value of prediction
    output = prediction[0]
    return jsonify(output)

if __name__ == '__main__':
    app.run(port=5000, debug=True)