# 3D Sorting Visualizer

A dynamic 3D Sorting Visualizer built using React, allowing users to visualize multiple sorting algorithms in real-time with adjustable input parameters. The visualizer dynamically adjusts bar heights, colors, and provides an intuitive user interface for interacting with sorting algorithms. Currently, the project supports **Bubble Sort, Insertion Sort, Merge Sort, Selection Sort, and Quick Sort**.

## 🌟 Features

- **Interactive UI**: Allows users to adjust the number of bars and their heights dynamically.
- **Algorithm Visualization**: Watch how different sorting algorithms process and sort data in 3D.
- **Color Tracking**: Highlights the bars being compared during sorting for a better understanding of the process.
- **User-Configurable Speed & Array Length**: Control the animation speed and adjust the array length to customize the visualization.
- **Detailed Explanations**: Each algorithm comes with an integrated explanation to help users understand the sorting process as they visualize it.
- **Background Hover Effect**: The background responds to user interaction—pixels light up as you hover over the visualizer, adding a visually appealing touch.

## 🚀 Tech Stack

- **React**: Frontend framework for building the visualizer interface.
- **JavaScript (ES6+)**: Logic for handling sorting algorithms and dynamic rendering.
- **CSS (with Tailwind)**: For dynamic styling, including color and size changes of the bars.

## 💡 Challenges Faced

1. **Managing State Variables**: Keeping track of the current state of variables, like bar heights, colors, and the algorithm's progress, while ensuring that updates didn't cause unnecessary re-renders or affect the visual feedback. Proper use of React's `useState` and `useEffect` was essential for controlling the flow and maintaining smooth interactions.

2. **3D Rendering**: Implementing a smooth 3D experience for sorting bars and ensuring performance remained optimal while animating.

3. **Algorithm Visualization**: Making sure that each algorithm step was captured accurately and reflected in real-time without performance lag.

4. **Real-time Feedback**: Implementing color transitions and bar size updates required careful state management to avoid rendering glitches.



## 📸 Screenshots

![image](https://github.com/user-attachments/assets/694f6486-581f-4231-8961-ba5c0111c6c1)

![image](https://github.com/user-attachments/assets/6a40bc2a-c038-423a-bbe2-ff7753af4962)

![image](https://github.com/user-attachments/assets/9f968a04-0cc6-4252-b7d2-3afaf44c129b)

![image](https://github.com/user-attachments/assets/ca3f7c26-3ef2-469c-b14d-4fd6b2bbfd0f)

![image](https://github.com/user-attachments/assets/6b1549b9-d878-4cea-8981-f219ede45b83)

![image](https://github.com/user-attachments/assets/5276bacf-590d-4891-9db7-65480341b8a9)


## 🛠️ Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/vansh-sardana/3d-sorting-visualizer.git
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Run the app locally:  
   ```bash
   npm run dev
   ```

## 👩‍💻 Future Improvements

- Improve the 3D bar rendering for larger datasets.
- Implement additional advanced algorithms like Heap Sort and Radix Sort.
- Add more customization options for users (e.g., color themes, more control over visualization parameters).
- Integrate detailed explanations for each step of algorithm alongside the visualization.
