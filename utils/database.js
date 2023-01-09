import * as SQLite from "expo-sqlite";
import { Place } from "../types/Place";

const database = SQLite.openDatabase("places.db");

export function init() {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                )`,
				[],
				() => {
					resolve();
				},
				(_, error) => {
					reject(error);
				}
			);
		});
	});

	return promise;
}

export function insertPlace(place) {
	const promise = new Promise((resolve, reject) => {
		const { title, imageUri, address, lat, lng } = place;
		database.transaction((tx) => {
			tx.executeSql(
				`INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
				[title, imageUri, address, lat, lng],
				(_, result) => {
					console.log(result);
					resolve(result);
				},
				(_, error) => {
					reject(error);
				}
			);
		});
	});

	return promise;
}

export function fetchPlaces() {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`SELECT * FROM places`,
				[],
				(_, result) => {
					const places = [];

					result.rows._array.forEach((place) => {
						places.push(place);
					});

					resolve(places);
				},
				(_, error) => {
					reject(error);
				}
			);
		});
	});

	return promise;
}
