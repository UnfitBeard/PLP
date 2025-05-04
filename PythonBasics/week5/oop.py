# Base class
class Vehicle:
    def __init__(self, name, speed):
        self.name = name
        self.speed = speed  # in km/h

    def move(self):
        print(f"{self.name} is moving at {self.speed} km/h.")

# Subclass 1: Car
class Car(Vehicle):
    def move(self):
        print(f"{self.name} is driving on the road at {self.speed} km/h. 🚗")

# Subclass 2: Plane
class Plane(Vehicle):
    def move(self):
        print(f"{self.name} is flying in the sky at {self.speed} km/h. ✈️")

# Subclass 3: Boat
class Boat(Vehicle):
    def move(self):
        print(f"{self.name} is sailing in the water at {self.speed} km/h. 🚤")

# Function demonstrating polymorphism
def start_journey(vehicles):
    for v in vehicles:
        v.move()

# Create objects with unique values
car = Car("Honda Civic", 100)
plane = Plane("Boeing 747", 900)
boat = Boat("Yacht", 40)

# Call the polymorphic function
vehicle_list = [car, plane, boat]
start_journey(vehicle_list)
