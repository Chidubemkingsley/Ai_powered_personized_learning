// Assume this is the TensorFlow.js file named tensorflow.js

// Import TensorFlow.js library
import * as tf from '@tensorflow/tfjs';

// Define input data and labels for training
const inputData = tf.tensor2d([[1], [2], [3], [4], [5]]);
const labels = tf.tensor2d([[2], [4], [6], [8], [10]]);

// Define a sequential model
const model = tf.sequential();

// Add a single dense (fully connected) layer with one unit
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Compile the model with mean squared error loss and Adam optimizer
model.compile({loss: 'meanSquaredError', optimizer: 'adam'});

// Train the model
async function trainModel() {
    await model.fit(inputData, labels, {epochs: 50});
    console.log('Model training complete.');
}

// Call the function to train the model
trainModel().then(() => {
    // Once training is complete, make predictions
    const testData = tf.tensor2d([[6], [7], [8]]);
    const predictions = model.predict(testData);
    predictions.print();
});

