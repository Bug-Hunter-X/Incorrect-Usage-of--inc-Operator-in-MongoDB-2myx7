```javascript
//Incorrect usage of $inc operator
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { seq: 1 } });

//Correct usage of $inc operator. Using $inc within updateOne can be problematic if the document doesn't exist. Consider using findAndUpdate instead.
db.collection('counters').findOneAndUpdate({ _id: 'myCounter' }, { $inc: { seq: 1 } }, { upsert: true, returnOriginal: false });
```