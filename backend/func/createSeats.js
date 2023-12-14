import { db } from '../index.js';

function createCustomers(SeatNumber, RowLetter) {
    const sql = "INSERT INTO Seats (SeatNumber, RowLetter) VALUES (?, ?)";

    db.query(sql, [SeatNumber, RowLetter], (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Seats created successfully');
    });
}

function insertSeats(RoomID) {
    const rowLetters = ['LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'RA', 'RB', 'RC', 'RD', 'RE', 'RF', 'RG', 'RH'];
    let seatCount = 0;

    for (let i = 0; i < rowLetters.length; i++) {
        const seatStart = (rowLetters[i] === 'LH' || rowLetters[i] === 'RH') ? 5 : 1;
        const seatLimit = (rowLetters[i] === 'LH' || rowLetters[i] === 'RH' || rowLetters[i].startsWith('R') || seatCount < 120) ? 8 : 0;

        for (let seatNumber = seatStart; seatNumber <= seatLimit; seatNumber++) {
            console.log(RoomID, seatNumber, rowLetters[i]);
            seatCount++;
        }
    }
}

insertSeats(1);

export default insertSeats;