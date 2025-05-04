import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris

# Task 1: Load and Explore the Dataset
try:
    # Load the Iris dataset from sklearn
    iris = load_iris()
    df = pd.DataFrame(data=iris.data, columns=iris.feature_names)
    df['species'] = pd.Categorical.from_codes(iris.target, iris.target_names)

    print("✅ Dataset loaded successfully.\n")
    
    # Display the first 5 rows
    print("🔍 First 5 rows of the dataset:")
    print(df.head(), "\n")
    
    # Check data types and missing values
    print("📋 Data Types:")
    print(df.dtypes, "\n")
    
    print("🧼 Missing Values:")
    print(df.isnull().sum(), "\n")
    
    # No missing values in Iris dataset, but if there were:
    # df = df.dropna() or df = df.fillna(method='ffill')

except Exception as e:
    print(f"❌ Error loading dataset: {e}")

# Task 2: Basic Data Analysis
print("📊 Basic Statistics:")
print(df.describe(), "\n")

# Group by species and calculate mean of each feature
grouped_means = df.groupby('species').mean()
print("📈 Mean of each feature grouped by species:")
print(grouped_means, "\n")

# Task 3: Data Visualization

# Set a consistent Seaborn style
sns.set(style="whitegrid")

# 1. Line Chart: Simulate time-series with cumulative index
plt.figure(figsize=(10, 5))
df['cumulative_index'] = range(len(df))
sns.lineplot(data=df, x='cumulative_index', y='sepal length (cm)', hue='species')
plt.title('Simulated Time-Series of Sepal Length')
plt.xlabel('Index (Time)')
plt.ylabel('Sepal Length (cm)')
plt.legend(title='Species')
plt.tight_layout()
plt.show()

# 2. Bar Chart: Average petal length per species
plt.figure(figsize=(8, 5))
sns.barplot(data=df, x='species', y='petal length (cm)', ci=None)
plt.title('Average Petal Length by Species')
plt.xlabel('Species')
plt.ylabel('Petal Length (cm)')
plt.tight_layout()
plt.show()

# 3. Histogram: Distribution of sepal width
plt.figure(figsize=(8, 5))
sns.histplot(data=df, x='sepal width (cm)', kde=True, bins=20)
plt.title('Distribution of Sepal Width')
plt.xlabel('Sepal Width (cm)')
plt.ylabel('Frequency')
plt.tight_layout()
plt.show()

# 4. Scatter Plot: Sepal length vs. petal length
plt.figure(figsize=(8, 5))
sns.scatterplot(data=df, x='sepal length (cm)', y='petal length (cm)', hue='species')
plt.title('Sepal Length vs. Petal Length')
plt.xlabel('Sepal Length (cm)')
plt.ylabel('Petal Length (cm)')
plt.legend(title='Species')
plt.tight_layout()
plt.show()
