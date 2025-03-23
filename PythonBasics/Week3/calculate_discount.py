def calculate_discount(price, discount_percent):
   if (discount_percent >= 20): return price - (discount_percent/100 * price)
   else: return price

print("Enter the original price and the discount") 
price = int(input("Original Price: "))
discount_percent = int(input("discount Percentage %: "))


print(calculate_discount(price, discount_percent))