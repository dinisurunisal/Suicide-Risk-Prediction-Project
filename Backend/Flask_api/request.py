import requests

# URL
url = 'http://localhost:5000/predict'

# Change the value of experience that you want to test

r = requests.post(url,json={'exp':[1.8,2.0,1.5,1.0,0.0,0.0,1.0,1.0,0.0,6.0],})

print(r)
print(r.json())