// utils.js
function saveToIndexedDB(key, value) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('firebase-notifications', 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore('notifications', { keyPath: 'key' });
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction('notifications', 'readwrite');
            const store = transaction.objectStore('notifications');
            store.put({ key, value });

            transaction.oncomplete = () => {
                resolve();
            };
            transaction.onerror = (error) => {
                reject(error);
            };
        };

        request.onerror = (error) => {
            reject(error);
        };
    });
}