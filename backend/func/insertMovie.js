import { db } from '../index.js';

function insertMovie(title, durationInMinutes, director, actors) {
    const sql = "INSERT INTO Movies (Title, DurationInMinutes, Director, Actors) VALUES (?, ?, ?, ?)";

    db.query(sql, [title, durationInMinutes, director, actors], (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Movie inserted successfully');
    });
}

export default insertMovie;