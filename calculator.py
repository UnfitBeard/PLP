def add(x, y):
    return x + y
def sub(x, y):
    return x - y
def mult(x, y):
    return x * y
def div(x, y):
    return x/y

print("Please Enter Operation \n"
      "1. Add\n"
      "2. Subtract\n"
      "3. Multiply\n"
      "4. Divide\n")

selection = int(input("Select Operation (1-4): "))
x = int(input("Enter first number: "))
y = int(input("Enter second number: "))

if selection == 1:
    print(f"{x} + {y} = {add(x,y)}")
elif selection == 2:
    print(f"{x} - {y} = {sub(x,y)}")
elif selection == 3:
    print(f"{x} * {y} = {mult(x,y)}")
elif selection == 4:
    print(f"{x} / {y} = {div(x,y)}")
else:
    print("Invalid Input")