# Incorrect Usage of $inc Operator in MongoDB

This repository demonstrates a common error when using the `$inc` operator in MongoDB and provides the correct solution.  The incorrect usage focuses on using `updateOne` without handling the case of a non-existent document, potentially leading to unexpected behavior. The corrected version utilizes `findOneAndUpdate` with the `upsert` option, ensuring atomic updates and creation if necessary.

## Bug
The original code incorrectly uses `updateOne` with `$inc`, which will fail if the document doesn't exist. 

## Solution
The solution uses `findOneAndUpdate` to atomically update the document, creating it if it doesn't already exist. The `upsert: true` option ensures document creation, and `returnOriginal: false` returns the updated document.