fib = DynamicArray(capacity=2)

a, b = 0, 1
fib.append(a)
fib.append(b)

for _ in range(6):
    next_value = a + b
    fib.append(next_value)
    a, b = b, next_value
