from flask import Flask, render_template, url_for, request
import pandas as pd
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.externals import joblib
from sklearn.model_selection import train_test_split
from sklearn import tree
from flask import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})


@app.route('/')
def home():
    return jsonify('index.html')


@app.route('/result', methods=['GET','POST','OPTIONS'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def predict():
    data = pd.read_csv("heart_disease_all14.csv", header=None,
                       names=["age", "sex", "cp", "restbp", "chol", "fbs", "restecg",
                              "thalach", "exang", "oldpeak", "slope", "ca", "thal", "num"])

    y = data.num
    x = data.drop(['num'], axis=1)
    # cv = CountVectorizer()
    # X = cv.fit_transform(x)
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2)
    clf = tree.DecisionTreeClassifier()

    clf.fit(x_train, y_train)
    clf.score(x_test, y_test)
    # Alternative Usage of Saved Model
    # ytb_model = open("naivebayes_spam_model.pkl","rb")
    # clf = joblib.load(ytb_model)

    # if request.method == 'POST':
        # age = request.form['age']
        # gender = request.form['gender']
        # cp = request.form['cp']
        # restbp = request.form['BP']
        # chol = request.form['chlorestrol']
        # fbs = request.form['fbs']
        # restecg = request.form['restecg']
        # thalach = request.form['thalach']
        # exang = request.form['exang']
        # oldpeak = request.form['oldpeak']
        # slope = request.form['slope']
        # ca = request.form['CA']
        # thal = request.form['thal']
    data = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
        # data = [[age, gender, cp, restbp, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]]
        # data= [[age],[gender],[cp],[restbp],[chol],[fbs],[restecg],[thalach],[exang],[oldpeak],[slope],[ca],[thal]]
        # vect = cv.transform(data).toarray()
        # my_prediction = clf.predict(vect)
        # my_predicion = clf.predict(data)
    prediction = clf.predict(data);
    if prediction == [1]:
        response = 'Person may have heart problem';
    elif prediction == [0]:
	    response =  "Dont wory......!"

    # return render_template('result.html',prediction = my_prediction)
    return jsonify(response); 


if __name__ == '__main__':
    app.run(debug=True)
