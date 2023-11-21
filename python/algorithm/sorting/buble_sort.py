"""
Iterative Bubble Sort
time: O(n*n)
space: O(1)
"""
def bubble_sort(items: list):
    for i in range(0,len(items)):
        swapped = False
        for j in range(0,len(items) - i - 1):
            if items[j] > items[j + 1]:
                    items[j], items[j+1] = items[j+1], items[j]
                    swapped = True
        if swapped == False:
            break


to_sorted = [64, 34, 25, 12, 22, 90, 11]
print(f'List before sorting {to_sorted}')
bubble_sort(to_sorted)
print(f'Sorted List {to_sorted}')