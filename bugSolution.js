```javascript
//Correct usage of $inc operator using findAndUpdate
db.collection('counters').findOneAndUpdate({ _id: 'myCounter' }, { $inc: { seq: 1 } }, { upsert: true, returnOriginal: false });
```