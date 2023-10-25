from flask import Flask, render_template, request
import pandas as pd

df = pd.read_csv('dialogs.txt')

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    # Handle the chatbot conversation logic
    request.form['user_message']
    # Process user_message and generate chatbot response
    bot_response = "This is the chatbot response."

    return {'response': bot_response}