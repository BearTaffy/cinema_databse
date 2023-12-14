import { db } from '../index.js';

function createCustomers(RoomNumber, NumberOFSeats) {
    const sql = "INSERT INTO Rooms (RoomNumber, NumberOFSeats) VALUES (?, ?)";

    db.query(sql, [RoomNumber, NumberOFSeats], (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Room created successfully');
    });
}

export default createCustomers;