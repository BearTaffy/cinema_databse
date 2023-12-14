import { db } from '../index.js';

function createCustomers(FirstName, LastName, Email, Password) {
    const sql = "INSERT INTO Customers (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)";

    db.query(sql, [FirstName, LastName, Email, Password], (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Customer created successfully');
    });
}

export default createCustomers;