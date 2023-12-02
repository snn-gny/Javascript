from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

tasks = []

@app.route('/')
def index():
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add():
    task = request.form.get('todo')
    if task:
        tasks.append(task)
    return redirect(url_for('index'))

@app.route('/delete/<int:task_id>')
def delete(task_id):
    if 0 <= task_id < len(tasks):
        del tasks[task_id]
    return redirect(url_for('index'))

@app.route('/clear')
def clear():
    tasks.clear()
    return redirect(url_for('index'))

@app.route('/api/filter/<keyword>')
def filter_tasks(keyword):
    filtered_tasks = [task for task in tasks if keyword.lower() in task.lower()]
    return jsonify(filtered_tasks)

if __name__ == '__main__':
    app.run(debug=True)
