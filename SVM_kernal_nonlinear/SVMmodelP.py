
## Prediction Using Support Vector Machines (SVM)
## Radial basis function kernel (RBF)

#%%

## Import Libraries
import pandas as pd
import numpy as np
import seaborn as sns
from sklearn import preprocessing
from sklearn.externals import joblib
from sklearn.model_selection import train_test_split
from sklearn import metrics

url = "Test-Data-6.csv"
df = pd.read_csv(url)
include = [ 'Age', 'Gender', 'Religon', 'Race', 'Nature Of Occupation' ,
           'Civil Status' ,'Education Level' ,'Reason' ,'Lifetime Psychiatric Hospitalizations' ,
           'Past Suicide Attempts' ,'Any suicidal thoughts mentioned' ,'Self-Injurious Behaviour' ,
           'Psychiatric Disorders' ,'Past Illnesses' ,'Alcohol/ drug Consumption','Anger',
           'Sleep Problem', 'Social Iscolation', 'Sad/ Weary' , 'Humilated', 'Not Suicide(0)/Suicide(1)']  # Except the year, all the features are taken
df1 = df[include]
print(df1.head(20))
print(df1.describe())

#%% md

#### Data Preprocessing


#%%

categoricals = []
for col, col_type in df1.dtypes.iteritems():
     if col_type == 'O':
          categoricals.append(col)
     else:
          df1[col].fillna(0, inplace=True)

#%% md

#### LabelEncoder

#%%

category_col =['Gender', 'Religon', 'Race', 'Nature Of Occupation' ,
           'Civil Status' ,'Education Level' ,'Reason' ,
           'Psychiatric Disorders' ,'Past Illnesses' ,'Alcohol/ drug Consumption']
labelEncoder = preprocessing.LabelEncoder()
mapping_dict={}
for col in category_col:
    df1[col] = labelEncoder.fit_transform(df1[col])
    le_name_mapping = dict(zip(labelEncoder.classes_, labelEncoder.transform(labelEncoder.classes_)))
    mapping_dict[col]=le_name_mapping
print(df1.head(20))


##### Replacing unwanted labels with a unique label


#%%

df.replace(['Asthma', "Alzheimer's disease", 'Diabetes',
              'Cirrhosis', 'Ischemic heart disease',
              'Road Accident','Chronic kidney disease'],
             ['Natural Death','Natural Death','Natural Death','Natural Death',
              'Natural Death','Natural Death','Natural Death'], inplace = True)
df.replace(['Stroke/Chronic diseases & Physical disabilities'],
             ['Chronic diseases & Physical disabilities'], inplace = True)

#%%

##### Split the dataset

#%%

X = df1.values[:, 0:20]
Y = df1.values[:,20]
print(X)
print(Y)


X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.3,random_state=109)  # 70% training and 30% testing

#%%

#### Model Generation

#%%

#Importing the svm model
from sklearn import svm

#Build a svm Classifier
clf = svm.SVC(kernel='rbf') # polynomial Kernel

#Train the model using the training sets
clf.fit(X_train, y_train)

#Predict the response for test dataset
y_pred = clf.predict(X_test)


#%%

#### Finding the accuracy

#%%

print("Accuracy from SVM(RBF) :",metrics.accuracy_score(y_test, y_pred))

#%% md

#### Precision and Recall

#%%

print("Precision from SVM(RBF):",metrics.precision_score(y_test, y_pred))
print("Recall from SVM(RBF):",metrics.recall_score(y_test, y_pred))


#%% md

#### Finding the accuracy

print("Accuracy from SVM(RBF) :",metrics.accuracy_score(y_test, y_pred))

#%% md

#### Precision and Recall

#%%

print("Precision from SVM(RBF):",metrics.precision_score(y_test, y_pred))
print("Recall from SVM(RBF):",metrics.recall_score(y_test, y_pred))