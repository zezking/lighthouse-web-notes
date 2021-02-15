# Notes

## OOP

### Single Responsibility Principle

The single responsibility principle states that a class should be responsible for a single part of the app's functionality, giving it only one reason to change. Or more simply, a class should only have one job.

```
// Manage the state of a task
class Task {
  complete() {
    // Mark this task as complete
  }
  sendNotification() {
    // Send a notification to the user that their task is complete
  }
  saveToDatabase() {
    // Save this task to the database
  }
}

let task = new Task();
task.saveToDatabase();
task.complete();
task.sendNotification();
task.saveToDatabase();
```

The class is reponsible for three things in the codes above which is not ideal.

```
// Manage the state of a task
class Task {
  complete() {
    // Mark this task as complete
  }
}

class NotificationManager {
  sendNotification(task) {
    // Send a notification to the user that their task is complete
  }
}

class DatabaseManager {
  saveToDatabase(task) {
    // Save this task to the database
  }
}

let task = new Task();
databaseManager.saveToDatabase(task);
task.complete();
notificationManager.sendNotification(task);
databaseManager.saveToDatabase(task);
```
